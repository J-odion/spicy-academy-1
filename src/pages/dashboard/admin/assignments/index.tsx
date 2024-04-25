import React from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import DashboardSidebar from '@/components/layout/dashboard/DashboardSidebar'
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout'

const Assignments: NextPageWithLayout = () => {
  return (
    <DashboardSidebar>
      <div className="w-full md:mt-20">
        Assignments
      </div>
    </DashboardSidebar>
  )
}

export default Assignments

Assignments.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout page={"assignments"} >{page}</DashboardLayout>;
};
