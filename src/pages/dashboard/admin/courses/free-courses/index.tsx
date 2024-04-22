import React from 'react'
import { NextPageWithLayout } from '@/pages/_app';
import DashboardSidebar from '@/components/layout/dashboard/DashboardSidebar';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import CoursesHeaderTab from '@/components/tabs/CoursesHeaderTab';

const freeCourses = () => {
  return (
    <DashboardSidebar>
      <div className="w-full md:mt-20">
        <CoursesHeaderTab currentTab={'free-courses'} />
      </div>
    </DashboardSidebar>
  )
}

export default freeCourses

freeCourses.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout page={"courses"} >{page}</DashboardLayout>;
};
