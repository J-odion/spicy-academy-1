import { useState } from 'react';
import { NextPageWithLayout } from '@/pages/_app';
import DashboardSidebar from '@/components/layout/dashboard/DashboardSidebar';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import CoursesCategoryTab from '@/components/tabs/CoursesCategoryTab';


const Intermediate = () => {
  return (
    <DashboardSidebar>
      <div className="w-full md:mt-20">
        <CoursesCategoryTab currentTab={'intermediate'} />
          <h1>Intermediate Courses</h1>

      </div>
    </DashboardSidebar>
  )
}

export default Intermediate

Intermediate.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout page={"courses"} >{page}</DashboardLayout>;
};
