import { Mail, UserCircle } from 'lucide-react';
import { Column, Table } from '../editor/Table';


// Usage Example
interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    company: string;
}




const TableFilter = () => {
    const columns: Column<User>[] = [
        {
            header: 'Name',
            accessor: 'name',
            sortable: true,
        },
        {
            header: 'Email',
            accessor: 'email',
            sortable: true,
            cell: (value) => (
                <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>{value}</span>
                </div>
            )
        },
        {
            header: 'Role', accessor: 'role', cell: (value) => (
                <div className="font-noto font-bold">
                    <span className="ml-2">{value}</span>
                </div>
            )
        },
        {
            header: 'Company',
            accessor: 'company',
            cell: (value) => (
                <div className="flex items-center">
                    <span className="ml-2">{value}</span>
                </div>
            )
        },
    ];
    const usersData: User[] = Array.from({ length: 100 }, (_, index) => ({
        id: index + 1,
        name: `user ${index + 1}`,
        email: `user${index + 1}@example.com`,
        role: ['Admin', 'User', 'Guest'][Math.floor(Math.random() * 3)],
        company: `Company ${Math.floor(Math.random() * 10)}`,
    }));

    return (
        <div className='max-w-[80%] max-h-[80'>
            <Table<User>
                data={usersData}
                columns={columns}
                itemsPerPage={10}
                // fontFamily="font-poppins"
                enableSelection={true}
                onSelectionChange={(selected) => console.log('Selected:', selected)}
                onRowClick={(user) => console.log('clicked:', user)}
            />
        </div>
    )
}

export default TableFilter