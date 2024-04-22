import React from 'react'
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout'
import DashboardSidebar from '@/components/layout/dashboard/DashboardSidebar'
import TransactionHeaderTab from '@/components/tabs/TransactionHeaderTab'
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Moment from 'react-moment';
import { Skeleton } from '@/components/ui/skeleton';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


const Transactions = () => {
  return (
    <DashboardSidebar>
      <div className="w-full mt-10 px-8">
        <h1 className="text-2xl font-semibold py-8">Transactions</h1>
      </div>
    </DashboardSidebar>
  )
}

export default Transactions

Transactions.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout page={"transactions"} >{page}</DashboardLayout>;
};
