import { useState } from 'react';
import { NextPageWithLayout } from '@/pages/_app';
import DashboardSidebar from '@/components/layout/dashboard/DashboardSidebar';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import CoursesCategoryTab from '@/components/tabs/CoursesCategoryTab';


const Advanced = () => {
  return (
    <DashboardSidebar>
      <div className="w-full md:mt-20">
        <CoursesCategoryTab currentTab={'advanced'} />
          <h1>Advanced Courses</h1>

      </div>
    </DashboardSidebar>
  )
}

export default Advanced

Advanced.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout page={"courses"} >{page}</DashboardLayout>;
};
