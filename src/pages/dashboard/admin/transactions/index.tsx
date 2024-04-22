import React from 'react'
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout'
import DashboardSidebar from '@/components/layout/dashboard/DashboardSidebar'

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
