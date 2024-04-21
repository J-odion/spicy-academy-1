import React from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import DashboardSidebar from '@/components/layout/dashboard/DashboardSidebar'
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout'
import { icons } from '@/components/layout/dashboard/DashboardLayout'

const Dashboard: NextPageWithLayout = () => {
  return (
    <DashboardSidebar>
      <div className="">
        <div className="items-center justify-between md:flex"></div>
      </div>
    </DashboardSidebar>
  )
}

export default Dashboard


Dashboard.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout page={"dashboard"} >{icons.dashboard}{" "}{page}</DashboardLayout>;
};
