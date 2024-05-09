import React from 'react'
import { NextPageWithLayout } from '@/pages/_app';
import DashboardSidebar from '@/components/layout/dashboard/DashboardSidebar';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import CoursesHeaderTab from '@/components/tabs/admin_dashboard/CoursesHeaderTab';

const ShopperCourses: NextPageWithLayout = () => {
  return (
    <DashboardSidebar>
      <div className="w-full md:mt-20 mt-24">
        <CoursesHeaderTab currentTab={'shopper-courses'} />
        <p>Shopper Courses</p>
      </div>
    </DashboardSidebar>
  )
}

export default ShopperCourses

ShopperCourses.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout page={"courses"} >{page}</DashboardLayout>;
};
