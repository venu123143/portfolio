import { BsCurrencyDollar } from "react-icons/bs";
import {  useSearchParams } from "react-router-dom";
import { useEffect, useState, useCallback } from 'react';
import axios from "axios";
import { Column, Table } from '../editor/Table';

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

const TableFilter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [transactions, setTransactions] = useState<TransactionHistory[]>([]);
    const [totalItems, setTotalItems] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);

    // Get page and limit from URL params or use defaults
    const getPageFromUrl = () => parseInt(searchParams.get("page") || "1", 10);
    const getLimitFromUrl = () => parseInt(searchParams.get("limit") || "10", 10);

    const fetchTransactions = useCallback(async (pageNum: number, limitNum: number) => {
        setLoading(true);
        try {
            const response = await axios.get(
                `http://143.244.132.143:7893/api/v1/history?page=${pageNum}&limit=${limitNum}`,
                {
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
        setSearchParams({
            limit: String(getLimitFromUrl()),
            page: String(newPage),
        });
    };

    // Handle limit change
    const handleLimitChange = (newLimit: number) => {
        setSearchParams({ limit: String(newLimit), page: String(getPageFromUrl()), })
    };

    // Effect to handle URL params changes
    useEffect(() => {
        const page = getPageFromUrl();
        const limit = getLimitFromUrl();
        console.log("limit", limit);

        fetchTransactions(page, limit);
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

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
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
        </div>
    );
};

export default TableFilter;