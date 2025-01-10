import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MoveUp, MoveDown } from 'lucide-react';

// Types
interface SortConfig {
    key: string;
    direction: 'asc' | 'desc';
}

export interface Column<T> {
    header: string;
    accessor: keyof T;
    cell?: (value: any) => React.ReactNode;
    sortable?: boolean;
}

interface TableProps<T> {
    data: T[];
    columns: Column<T>[];
    itemsPerPage?: number;
    className?: string;
    onRowClick?: (item: T) => void;
    enableSelection?: boolean;
    onSelectionChange?: (selectedItems: T[]) => void;
}

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

// Pagination Component
const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <div className="flex items-center justify-between px-4 py-2 bg-gray-50 shadow-md">
            <button
                className={`px-3 py-1 text-sm font-semibold text-black bg-white border rounded-md shadow-sm hover:bg-gray-200 transition-all ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            <span className="text-sm font-medium text-black">
                Page {currentPage} of {totalPages}
            </span>
            <button
                className={`px-3 py-1 text-sm font-semibold text-black bg-white border rounded-md shadow-sm hover:bg-gray-200 transition-all ${currentPage === totalPages && 'opacity-50 cursor-not-allowed'}`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

// Main Table Component
export function Table<T extends object>({
    data,
    columns,
    itemsPerPage = 10,
    className = '',
    onRowClick,
    enableSelection = false,
    onSelectionChange,
}: TableProps<T>) {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);
    const [selectedItems, setSelectedItems] = useState<T[]>([]);

    // Sorting logic
    const handleSort = (key: string) => {
        setSortConfig((current) => {
            if (current?.key === key) {
                return current.direction === 'asc' ? { key, direction: 'desc' } : { key, direction: 'asc' };
            }
            return { key, direction: 'asc' };
        });
    };

    // Selection logic
    const handleSelectItem = (item: T) => {
        const newSelection = selectedItems.includes(item)
            ? selectedItems.filter((i) => i !== item)
            : [...selectedItems, item];
        setSelectedItems(newSelection);
        onSelectionChange?.(newSelection);
    };

    const handleSelectAll = () => {
        const newSelection = selectedItems.length === currentData.length ? [] : currentData;
        setSelectedItems(newSelection);
        onSelectionChange?.(newSelection);
    };

    const handleRowClick = (item: T) => {
        handleSelectItem(item);
    };

    // Sort data
    const sortedData = React.useMemo(() => {
        if (!sortConfig) return data;
        return [...data].sort((a, b) => {
            const aValue = a[sortConfig.key as keyof T];
            const bValue = b[sortConfig.key as keyof T];
            if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        });
    }, [data, sortConfig]);

    const totalPages = Math.ceil(sortedData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = sortedData.slice(startIndex, endIndex);

    return (
        <div className={`bg-white rounded-lg shadow-md ${className}`}>
            <div className="overflow-x-auto">
                <table className="min-w-full font-inter divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            {enableSelection && (
                                <th className="px-4 py-2 text-left">
                                    <motion.input
                                        type="checkbox"
                                        checked={selectedItems.length === currentData.length}
                                        onChange={handleSelectAll}
                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer transition-transform duration-300 hover:scale-110"
                                    />
                                </th>
                            )}
                            {columns.map((column, index) => (
                                <th
                                    key={index}
                                    scope="col"
                                    className="px-6 py-3 text-xs font-medium text-black uppercase tracking-wider cursor-pointer group"
                                    onClick={() => column.sortable && handleSort(column.accessor as string)}
                                >
                                    <div className="flex items-center">
                                        <span>{column.header}</span>
                                        {column.sortable && (
                                            <span className="flex gap-0">
                                                <MoveUp
                                                    className={`w-3 h-3 transition-all ${sortConfig?.key === column.accessor && sortConfig.direction === 'asc'
                                                        ? 'text-blue-600'
                                                        : 'text-gray-400'
                                                        }`}
                                                />
                                                <MoveDown
                                                    className={`w-3 h-3 transition-all ${sortConfig?.key === column.accessor && sortConfig.direction === 'desc'
                                                        ? 'text-blue-600'
                                                        : 'text-gray-400'
                                                        }`}
                                                />
                                            </span>
                                        )}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {currentData.map((item, rowIndex) => (
                            <motion.tr
                                key={rowIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: rowIndex * 0.05 }}
                                onClick={() => handleRowClick(item)}
                                className={`hover:bg-gray-100 cursor-pointer transition-all duration-300 ${selectedItems.includes(item) && enableSelection ? 'bg-blue-50' : ''}`}
                            >
                                {enableSelection && (
                                    <td className="px-4 py-2">
                                        <motion.input
                                            type="checkbox"
                                            checked={selectedItems.includes(item)}
                                            onChange={() => handleSelectItem(item)}
                                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer transition-transform duration-300 hover:scale-110"
                                        />
                                    </td>
                                )}
                                {columns.map((column, colIndex) => (
                                    <td key={colIndex} className="px-6 py-4 text-sm text-black">
                                        {column.cell ? column.cell(item[column.accessor]) : String(item[column.accessor])}
                                    </td>
                                ))}
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {totalPages > 1 && (
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            )}
        </div>
    );
}
