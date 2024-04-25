import React from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import DashboardSidebar from '@/components/layout/dashboard/DashboardSidebar'
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout'

const Students: NextPageWithLayout = () => {
  return (
    <DashboardSidebar>
      <div className="w-full md:mt-20">
        Students
      </div>
    </DashboardSidebar>
  )
}

export default Students

Students.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout page={"students"} >{page}</DashboardLayout>;
};
