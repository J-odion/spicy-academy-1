import { useState } from 'react';
import { NextPageWithLayout } from '@/pages/_app';
import DashboardSidebar from '@/components/layout/dashboard/DashboardSidebar';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import CoursesCategoryTab from '@/components/tabs/CoursesCategoryTab';


const Amateur = () => {
  return (
    <DashboardSidebar>
      <div className="w-full md:mt-20">
        <CoursesCategoryTab currentTab={'amateur'} />
          <h1>Amateur Courses</h1>

      </div>
    </DashboardSidebar>
  )
}

export default Amateur

Amateur.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout page={"courses"} >{page}</DashboardLayout>;
};
