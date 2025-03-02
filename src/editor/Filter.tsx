import React, { useEffect, useState } from 'react';
import {
    Modal,
    Box,
    Button,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Checkbox,
    ListItemText,
    OutlinedInput,
    SelectChangeEvent,
    CircularProgress,
} from '@mui/material';
import { X } from 'lucide-react';
import axios from 'axios';

interface ApiResponse {
    message: string;
    data: {
        dealers: Dealer[];
    };
}

interface Dealer {
    id: number;
    name: string;
}


export interface FilterModalProps {
    onApply: (filters: {
        startDate: string;
        endDate: string;
        selectedVoucherType: string | null;
        selectedDealers: number[];
    }) => void;
    isOpen: boolean;
    setIsOpen: (val: boolean) => void,
    handleReset: () => void,
}

interface User {
    user_id: number;
    name: string;
    email: string;
    phone: string;
    status: string;
    registered_date: string;
}

interface Dealer {
    dealer_id: number;
    business_name: string;
    code: string;
    discount: string;
    last_purchased_on: string;
    user: User;
}
enum Voucher {
    FIVE_DINAR = '5dinar',
    TEN_DINAR = '10dinar',
    TWENTY_DINAR = '20dinar',
    THIRTY_DINAR = '30dinar',
    FOURTY_DINAR = '40dinar',
    FIFTY_DINAR = '50dinar',
    HUNDRED_DINAR = '100dinar',
    FIVE_HUNDRED_DINAR = '500dinar',
}

const FilterModal: React.FC<FilterModalProps> = ({ onApply, isOpen, setIsOpen, handleReset }) => {
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [selectedVoucherType, setSelectedVoucherType] = useState<string | null>(null);
    const [selectedDealers, setSelectedDealers] = useState<number[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [dealers, setDealers] = useState<Dealer[]>([]);
    const [error, setError] = useState<string>('');
    const voucherTypes = Object.entries(Voucher).map(([_, key]) => ({
        id: key,
        name: key.replace(/\d+/, (match) => `${match} `).replace('dinar', 'Dinar'),
    }));

    // Sample data
    useEffect(() => {
        const fetchDealers = async () => {
            setLoading(true);
            setError('');
            try {
                const response = await axios.get<ApiResponse>(
                    'http://143.244.132.143:7893/api/v1/dealer',
                    {
                        headers: {
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbmNyeXB0ZWREYXRhIjoiUFNWeFNGVUk3bDEwdk0wVnd6T3Y4QT09OkMzSGR0cVZqM2x1VEVSNkRXUENTdXR0dkY5WWdTZy9lUHJWTkpwWVVBT2RURjVwaG9ycHZJSGcvWCtMeTNTK2I1Vk5oc2N2LzVaN1c0OGM3bmU3NnlNZFNRZzRCa0Z4Qk9KZFN3d3dJejhzPSIsImlhdCI6MTczODkyNjI0NSwiZXhwIjoxNzQxNTE4MjQ1fQ.mQ4erF1i-fMuPF-BHNuPJI7K_LR717NV-KnOusDV_3o',
                            Referer: 'http://143.244.132.143:9632/',
                            Accept: 'application/json',
                        },
                    }
                );
                setDealers(response.data.data.dealers);
            } catch (err) {
                setError('Failed to fetch dealers');
                console.error('Error fetching dealers:', err);
            } finally {
                setLoading(false);
            }
        };

        if (isOpen && dealers.length === 0) {
            fetchDealers();
        }
    }, [isOpen]);

    const handleVoucherTypeChange = (event: SelectChangeEvent) => {
        setSelectedVoucherType(event.target.value as string);
    };

    const handleDealerChange = (event: SelectChangeEvent<number[]>) => {
        const value = event.target.value as number[];
        setSelectedDealers(value);
    };

    const handleApply = (): void => {
        onApply?.({
            startDate,
            endDate,
            selectedVoucherType,
            selectedDealers
        });
        setIsOpen(false);
    };

    const handleResetAll = (): void => {
        setStartDate('');
        setEndDate('');
        setSelectedVoucherType(null);
        setSelectedDealers([]);
        handleReset()
    };
    const handleDateChange = (dateType: 'startDate' | 'endDate', value: string) => {
        if (dateType === 'startDate') {
            setStartDate(value);
        } else {
            setEndDate(value);
        }
    };

    return (
        <div className="relative">
            <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                aria-labelledby="filter-modal"
                className="flex items-center justify-center p-4"
            >
                <Box className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 hover:text-gray-500"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Filter Content */}
                    <div className="p-4 space-y-4">
                        {/* Date Range */}
                        <div className="grid grid-cols-2 gap-4">
                            <TextField
                                label="From"
                                type="date"
                                value={startDate ? new Date(startDate).toISOString().slice(0, 10) : ''}
                                onChange={(e) => handleDateChange('startDate', e.target.value)}
                                InputLabelProps={{ shrink: true }}
                                className="w-full"
                                size="small"
                            />
                            <TextField
                                label="To"
                                type="date"
                                value={endDate ? new Date(endDate).toISOString().slice(0, 10) : ''}
                                onChange={(e) => handleDateChange('endDate', e.target.value)}
                                InputLabelProps={{ shrink: true }}
                                className="w-full"
                                size="small"
                            />
                        </div>

                        {/* Voucher Type Select */}
                        <FormControl fullWidth size="small">
                            <InputLabel>Select Voucher Type</InputLabel>
                            <Select
                                value={selectedVoucherType || ''}
                                onChange={handleVoucherTypeChange}
                                label="Select Voucher Type"
                                className="w-full"
                            >
                                {voucherTypes.map((type) => (
                                    <MenuItem key={type.id} value={type.id.toString()}>
                                        {type.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        {/* Multi-select Dealers */}
                        <FormControl fullWidth size="small">
                            <InputLabel>Select Dealers</InputLabel>
                            {loading ? (
                                <div className="flex justify-center p-4">
                                    <CircularProgress size={24} />
                                </div>
                            ) : error ? (
                                <div className="text-red-500 flex justify-center p-4 text-sm">{error}</div>
                            ) : (
                                <Select
                                    multiple
                                    value={selectedDealers}
                                    onChange={handleDealerChange}
                                    input={<OutlinedInput label="Select Dealers" />}
                                    renderValue={(selected) => {
                                        const selectedCount = selected.length;
                                        return `${selectedCount} dealer${selectedCount !== 1 ? 's' : ''} selected`;
                                    }}
                                    className="w-full"
                                    MenuProps={{
                                        PaperProps: {
                                            className: 'max-h-56',
                                        },
                                    }}
                                >
                                    {dealers.map((dealer) => (
                                        <MenuItem key={dealer.dealer_id} value={dealer.dealer_id}>
                                            <Checkbox
                                                checked={selectedDealers.includes(dealer.dealer_id)}
                                                className="p-0"
                                            />
                                            <ListItemText
                                                primary={`${dealer.business_name} (${dealer.code})`}
                                                secondary={dealer.user.name}
                                                className="ml-2"
                                            />
                                        </MenuItem>
                                    ))}
                                </Select>
                            )}
                        </FormControl>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between p-4 border-t border-gray-200">
                        <Button
                            onClick={handleResetAll}
                            className="text-gray-600 hover:text-gray-700"
                        >
                            Reset all
                        </Button>
                        <div className="flex gap-2">
                            <Button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-600 hover:text-gray-700"
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={handleApply}
                                variant="contained"
                                className="bg-blue-600 hover:bg-blue-700 text-white"
                            >
                                Apply now
                            </Button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default FilterModal;