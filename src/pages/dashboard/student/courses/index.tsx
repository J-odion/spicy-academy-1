import React from 'react'
import DashboardSidebar from '@/components/layout/students_dashboard/DashboardSidebar'
import DashboardLayout from '@/components/layout/students_dashboard/DashboardLayout'
import { NextPageWithLayout } from '@/pages/_app'

const Courses: NextPageWithLayout = () => {
  return (
    <DashboardSidebar>Courses</DashboardSidebar>
  )
}

export default Courses

Courses.getLayout = function getLayout(page: React.ReactElement){
    return <DashboardLayout page={"courses"}>{page}</DashboardLayout>
}
