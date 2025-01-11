import { BsCurrencyDollar } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState, useCallback, useRef } from 'react';
import axios from "axios";
import { Column, Table } from '../editor/Table';
import { BsSearch, BsThreeDots } from 'react-icons/bs';
import FilterModal from "../editor/Filter"
import { Button } from "@mui/material";
import { Filter } from "lucide-react";
import { FilterModalProps } from "../editor/Filter";
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
interface FilterOption {
    value: string;
    label: string;
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
    const [loading, setLoading] = useState<boolean>(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
    const filterDropdownRef = useRef<HTMLDivElement>(null);
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


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                filterDropdownRef.current &&
                !filterDropdownRef.current.contains(event.target as Node)
            ) {
                setIsFilterDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    // Get page and limit from URL params or use defaults
    const getPageFromUrl = () => parseInt(searchParams.get("page") || "1", 10);
    const getLimitFromUrl = () => parseInt(searchParams.get("limit") || "10", 10);

    const fetchTransactions = useCallback(async (searchParams: any) => {
        setLoading(true);
        try {
            const queryParams = Object.fromEntries(searchParams);
            const response = await axios.get(
                `http://143.244.132.143:7893/api/v1/history`,
                {
                    params: queryParams,
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbmNyeXB0ZWREYXRhIjoiLzhSOExnN3o2YU4raFNWd252aGRUdz09OlJDWXV4UnlRSDhIVUhOR1dVVUdzZ1ROUHlWRnhscWxVTTZVWWlaWGRhUFN5aWprdXYzd1prV1pkYVI3bm5wTmkvbWFzdzhFNHFCaCsvNmdidlhCdExzQW8yK1Fwa2JDL05LTHFWZHhkc2VvPSIsImlhdCI6MTczNjQwNDU1NSwiZXhwIjoxNzM4OTk2NTU1fQ.FahnoO5R-oxSQJT20yRoAwcqKf1cG_Ju3aFEaICX4fw',
                    },
                }
            );
            const { transaction_history, count } = response.data.data;
            setTransactions(transaction_history);
            setTotalItems(count.total);
        } catch (error) {
            console.error('Error fetching transactions:', error);
        } finally {
            setLoading(false);
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
        setSearchParams({ limit: String(newLimit), page: String(getPageFromUrl()), })
    };

    // Effect to handle URL params changes
    useEffect(() => {
        fetchTransactions(searchParams);
    }, [searchParams, fetchTransactions]);

    const columns: Column<TransactionHistory>[] = [
        {
            header: 'Transaction ID',
            accessor: 'transaction_id',
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
        },
        {
            header: 'Transaction Date',
            accessor: 'transaction_date',
            cell: (value) => new Date(value).toLocaleString(),
        },
        {
            header: 'Final Value',
            accessor: 'final_value',
            cell: (value) => (
                <span className='font-rubik font-medium flex items-center'>
                    {value}<BsCurrencyDollar className='inline' />
                </span>
            )
        },
        {
            header: 'Voucher Type',
            accessor: 'voucher_type',
        },
    ];
    const onApply: FilterModalProps['onApply'] = (filters) => {
        const { startDate, endDate, selectedVoucherType, selectedDealers } = filters;
        const currentParams = new URLSearchParams(searchParams);
        // Helper function to set or delete a query parameter
        const updateQueryParam = (key: string, value: string | null | undefined) => {
            if (value && value.trim() !== '') {
                currentParams.set(key, value);
            } else {
                currentParams.delete(key);
            }
        };
        updateQueryParam('start_date', startDate);
        updateQueryParam('end_date', endDate);
        updateQueryParam('voucher_types', selectedVoucherType);
        updateQueryParam('dealer_ids', selectedDealers.length > 0 ? selectedDealers.join(',') : null);
         
        setSearchParams(currentParams)
    };
    const handleResetAll = () => {
        setSearchParams({ limit: String(getLimitFromUrl()), page: "1", })
        setIsOpen(false)
    }
    return (
        <div>
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
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                    onClick={() => setIsOpen(true)}
                >
                    <Filter className="w-4 h-4" />
                    <span>Filters</span>
                </Button>
                <FilterModal setIsOpen={setIsOpen} isOpen={isOpen} onApply={onApply} handleReset={handleResetAll} />
                <button className="ml-4 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <BsThreeDots className="mr-2" />
                </button>
            </div>
            {
                loading ? <div>Loading...</div>
                    :
                    <Table<TransactionHistory>
                        data={transactions}
                        totalItems={totalItems}
                        currentPage={getPageFromUrl()}
                        setCurrentPage={handlePageChange}
                        columns={columns}
                        itemsPerPage={getLimitFromUrl()}
                        setItemsPerPage={handleLimitChange}
                        enableSelection={false}
                        onSelectionChange={(selected) => console.log('Selected:', selected)}
                        onRowClick={(transaction) => console.log('Clicked:', transaction)}
                    />
            }
        </div>
    );
};

export default TableFilter;