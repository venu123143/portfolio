// types.ts
export interface SortConfig {
    key: string;
    direction: 'asc' | 'desc';
}

export interface Column<T> {
    header: string;
    accessor: keyof T;
    cell?: (value: any) => React.ReactNode;
    sortable?: boolean;
}

export interface TableProps<T> {
    data: T[];
    totalItems: number;
    columns: Column<T>[];
    itemsPerPage: number;
    setItemsPerPage: (item: number) => void;
    className?: string;
    onRowClick?: (item: T) => void;
    enableSelection?: boolean;
    onSelectionChange?: (selectedItems: T[]) => void;
    currentPage: number,
    setCurrentPage: (item: number) => void;
}

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    itemsPerPage: number;
    onItemsPerPageChange: (value: number) => void;
    totalItems?: number;
}


// EnhancedPagination.tsx
import React, { useMemo, useState } from 'react';
import {  ChevronLeft, ChevronRight } from 'lucide-react';
import { Select, MenuItem, IconButton } from '@mui/material';
import { motion } from 'framer-motion';

// import { MoveUp, MoveDown } from 'lucide-react';

const EnhancedPagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
    itemsPerPage,
    onItemsPerPageChange,
    totalItems
}) => {
    // Generate page numbers array with ellipsis
    const pageNumbers = useMemo((): Array<number | string> => {
        const pages: Array<number | string> = [];
        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 4) {
                for (let i = 1; i <= 5; i++) {
                    pages.push(i);
                }
                pages.push("...");
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 3) {
                pages.push(1);
                pages.push("...");
                for (let i = totalPages - 4; i <= totalPages; i++) {
                    pages.push(i);
                }
            } else {
                pages.push(1);
                pages.push("...");
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pages.push(i);
                }
                pages.push("...");
                pages.push(totalPages);
            }
        }
        return pages;
    }, [currentPage, totalPages]);

    return (
        <div className="flex items-center justify-between px-4 py-3 bg-white border rounded-lg shadow-sm">
            <div className="flex items-center space-x-4">
                <Select
                    value={itemsPerPage}
                    onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
                    size="small"
                    variant="outlined"
                >
                    {[5, 10, 20, 50, 100].map((value) => (
                        <MenuItem key={value} value={value}>
                            {value} per page
                        </MenuItem>
                    ))}
                </Select>
                {totalItems !== undefined && (
                    <span className="text-sm text-gray-700">
                        Total items: {totalItems}
                    </span>
                )}
            </div>

            <div className="flex items-center space-x-2">
                <IconButton
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                >
                    <ChevronLeft />
                </IconButton>

                {pageNumbers.map((pageNum, index) => (
                    <div key={index}>
                        {
                            pageNum === "..." ? <span className='font-bold '>...</span> :
                                <button
                                    key={index}
                                    onClick={() => typeof pageNum === 'number' ? onPageChange(pageNum) : undefined}
                                    disabled={pageNum === '...'}
                                    className={`
                                    min-w-[32px] h-8 px-3 rounded-md text-sm font-medium
                                    ${pageNum === currentPage
                                            ? 'bg-blue-600 text-white'
                                            : 'hover:bg-gray-100 text-gray-700'
                                        }
                                `}
                                    aria-label={typeof pageNum === 'number' ? `Go to page ${pageNum}` : 'More pages'}
                                    aria-current={pageNum === currentPage ? 'page' : undefined}
                                >
                                    {pageNum}
                                </button>
                        }
                    </div>
                ))}

                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Next page"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export function Table<T extends object>({
    data,
    totalItems,
    columns,
    itemsPerPage, setItemsPerPage,
    className = '',
    enableSelection = false,
    onSelectionChange,
    setCurrentPage,
    currentPage = 1,
}: TableProps<T>) {
    const [selectedItems, setSelectedItems] = useState<T[]>([]);
    const handleSelectItem = (item: T) => {
        const newSelection = selectedItems.includes(item)
            ? selectedItems.filter((i) => i !== item)
            : [...selectedItems, item];
        setSelectedItems(newSelection);
        onSelectionChange?.(newSelection);
    };

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
        <div className={`bg-white rounded-lg shadow-md ${className}`}>
            <div className="overflow-x-auto">
                <table className="min-w-full table-fixed divide-y divide-gray-200">
                    <thead className="bg-[#F8F8FA]">
                        <tr className="">
                            {enableSelection && (
                                <th className="w-12 px-4 py-3 border-r border-gray-200">
                                    <input
                                        type="checkbox"
                                        checked={selectedItems.length === data.length}
                                        // onChange={handleSelectAll}
                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer transition-all hover:scale-110"
                                    />
                                </th>
                            )}
                            {columns.map((column, index) => (
                                <th
                                    key={index}
                                    scope="col"
                                    className={`px-6 py-4 border-r border-gray-200 tracking-wider cursor-pointer group ${index === columns.length - 1 ? 'border-r-0' : ''
                                        }`}
                                >
                                    <div className="flex items-center justify-center gap-2 group">
                                        <span className="font-semibold text-gray-900 text-sm tracking-wider">
                                            {column.header}
                                        </span>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="min-w-full table-fixed divide-y divide-gray-200 relative">
                        {data.map((item, rowIndex) => (
                            <motion.tr
                                key={rowIndex}
                                onClick={() => handleSelectItem(item)}
                                whileHover={{
                                    scale: 1.02,
                                    zIndex: 10, 
                                    transition: { duration: 0.2 },
                                }}
                                className={`hover:bg-gray-50 cursor-pointer hover:shadow-lg ${selectedItems.includes(item) ? 'bg-blue-50' : ''
                                    }`}
                            >

                                {enableSelection && (
                                    <td className="w-12 px-4 py-4 border-r border-gray-200">
                                        <input
                                            type="checkbox"
                                            checked={selectedItems.includes(item)}
                                            onChange={(e) => e.stopPropagation()}
                                            className="w-4 h-4 rounded text-blue-600 border-gray-300 focus:ring-blue-500"
                                        />
                                    </td>
                                )}
                                {columns.map((column, colIndex) => (
                                    <td
                                        key={colIndex}
                                        className={`px-6 py-4 font-inter text-center text-sm text-gray-900 border-r border-gray-200 ${colIndex === columns.length - 1 ? 'border-r-0' : ''
                                            }`}
                                    >
                                        {column.cell ? column.cell(item[column.accessor]) : String(item[column.accessor])}
                                    </td>
                                ))}
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <EnhancedPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                itemsPerPage={itemsPerPage}
                onItemsPerPageChange={setItemsPerPage}
                totalItems={totalItems}
            />
        </div>
    );
}