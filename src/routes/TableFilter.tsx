import { BsCurrencyDollar } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState, useCallback } from 'react';
import axios from "axios";
import { Column, Table } from '../editor/Table';
import { BsSearch, BsThreeDots } from 'react-icons/bs';
import FilterModal from "../editor/Filter"
import { Button } from "@mui/material";
import { Filter } from "lucide-react";
import { FilterModalProps } from "../editor/Filter";
// import ClipLoader from "react-spinners/ClipLoader";
interface TransactionHistory {
    transaction_id: number;
    transaction_items_id: number;
    transaction_type: string;
    discount: string;
    transaction_date: string;
    approved_at: string;
    business_name: string;
    dealer_user_name: string;
    dealer_user_id: number;
    dealer_id: number;
    approver_name: string;
    quantity: number;
    sub_total: string;
    final_value: string;
    denomination: string;
    voucher_type: string;
}

// Custom hook for debouncing
const useDebounce = (value: string, delay: number = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedValue;
};


const TableFilter = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const [searchParams, setSearchParams] = useSearchParams();
    const [transactions, setTransactions] = useState<TransactionHistory[]>([]);
    const [totalItems, setTotalItems] = useState<number>(0);
    const [filterCount, setfilterCount] = useState<number>(0);
    const [searchQuery, setSearchQuery] = useState('');
    const debouncedSearchQuery = useDebounce(searchQuery, 500);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };
    useEffect(() => {
        const currentParams = new URLSearchParams(searchParams);
        if (debouncedSearchQuery) {
            currentParams.set('q', debouncedSearchQuery);
        } else {
            currentParams.delete('q');
        }
        currentParams.set('page', '1'); // Reset to first page on search
        setSearchParams(currentParams);
    }, [debouncedSearchQuery]);

    const TransactionTypeBadge: React.FC<{ type: 'debit' | 'credit' }> = ({ type }) => {
        const baseClasses = "px-3 py-1 rounded-full text-sm font-medium text-center";
        const typeClasses = {
            debit: "bg-red-100 text-red-700",
            credit: "bg-green-100 text-green-700"
        };

        return (
            <span className={`${baseClasses} ${typeClasses[type]}`}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
        );
    };


    // Get page and limit from URL params or use defaults
    const getPageFromUrl = () => parseInt(searchParams.get("page") || "1", 10);
    const getLimitFromUrl = () => parseInt(searchParams.get("limit") || "10", 10);

    const fetchTransactions = useCallback(async (searchParams: any) => {
        try {
            const queryParams = Object.fromEntries(searchParams);
            const response = await axios.get(
                `http://143.244.132.143:7893/api/v1/history`,
                {
                    params: queryParams,
                    headers: {
                        Authorization: ''
                    },
                }
            );
            const { transaction_history, count } = response.data.data;
            setTransactions(transaction_history);
            setTotalItems(count.total);
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    }, []);

    // Handle page change
    const handlePageChange = (newPage: number) => {
        const currentParams = new URLSearchParams(searchParams);
        currentParams.set('page', newPage.toString())
        setSearchParams(currentParams);
    };

    // Handle limit change
    const handleLimitChange = (newLimit: number) => {
        const currentParams = new URLSearchParams(searchParams);
        currentParams.set('limit', String(newLimit));
        currentParams.set('page', String(getPageFromUrl()));
        setSearchParams(currentParams)
    };

    // Effect to handle URL params changes
    useEffect(() => {
        fetchTransactions(searchParams);
        setfilterCount(searchParams.size - 2)
    }, [searchParams, fetchTransactions]);

    const columns: Column<TransactionHistory>[] = [
        {
            header: 'Transaction ID',
            accessor: 'transaction_id',
            sortable: true
        },
        {
            header: 'Business Name',
            accessor: 'business_name',
        },
        {
            header: 'Dealer Name',
            accessor: 'dealer_user_name',
        },
        {
            header: 'Transaction Type',
            accessor: 'transaction_type',
            cell: (value) => (
                <>
                    <TransactionTypeBadge type={value as 'debit' | 'credit'} />
                </>
            )
        },
        {
            header: 'Transaction Date',
            accessor: 'transaction_date',
            sortable: true,
            cell: (value) => new Date(value).toLocaleString(undefined, {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            }),
        },
        {
            header: 'Final Value',
            accessor: 'final_value',
            sortable: true,
            cell: (value) => (
                <span className='font-rubik font-medium flex items-center '>
                    {value}<BsCurrencyDollar className='inline text-green-600' />
                </span>
            )
        },
        {
            header: 'Voucher Type',
            accessor: 'voucher_type',
            sortable: true,
            cell: (value) => (
                <>
                    {value.replace(/\d+/, (match: any) => `${match} `).replace('dinar', 'Dinar')}
                </>
            )
        },
    ];
    const onApply: FilterModalProps['onApply'] = (filters) => {
        const { startDate, endDate, selectedVoucherType, selectedDealers } = filters;
        const currentParams = new URLSearchParams(searchParams);
        // Helper function to set or delete a query parameter
        let count = 0;
        const updateQueryParam = (key: string, value: string | null | undefined) => {
            if (value && value.trim() !== '') {
                currentParams.set(key, value);
                count++;
            } else {
                currentParams.delete(key);
            }
        };
        updateQueryParam('start_date', startDate);
        updateQueryParam('end_date', endDate);
        updateQueryParam('voucher_types', selectedVoucherType);
        updateQueryParam('dealer_ids', selectedDealers.length > 0 ? selectedDealers.join(',') : null);

        setSearchParams(currentParams)
        setfilterCount(count)
    };
    const handleResetAll = () => {
        setSearchParams({ limit: String(getLimitFromUrl()), page: "1", })
        setIsOpen(false)
        setfilterCount(0)
    }
    return (
        <>
            <div className="flex items-center bg-gray-100 p-4 rounded-md">
                <div className="flex-grow mr-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <BsSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
                    </div>
                </div>

                <Button
                    variant="outlined"
                    className="relative flex items-center gap-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                    onClick={() => setIsOpen(true)}
                >
                    <Filter className="w-4 h-4" />
                    <span>Filters</span>

                    {/* Badge for filter count */}
                    {filterCount > 0 && (
                        <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                            {filterCount}
                        </span>
                    )}
                </Button>

                <FilterModal setIsOpen={setIsOpen} isOpen={isOpen} onApply={onApply} handleReset={handleResetAll} />
                <button className="ml-4 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <BsThreeDots className="mr-2" />
                </button>
            </div>
            <Table<TransactionHistory>
                data={transactions}
                totalItems={totalItems}
                currentPage={getPageFromUrl()}
                setCurrentPage={handlePageChange}
                columns={columns}
                itemsPerPage={getLimitFromUrl()}
                setItemsPerPage={handleLimitChange}
                enableSelection={true}
                onSelectionChange={(selected) => console.log('Selected:', selected)}
                onRowClick={(transaction) => console.log('Clicked:', transaction)}
            />
            {/* {!loading && <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/20  flex justify-center items-center">
                <ClipLoader color="#3B82F6" size={50} />
            </div>} */}
        </>
    );
};

export default TableFilter;