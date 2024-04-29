import { useState } from 'react';
import { NextPageWithLayout } from '@/pages/_app';
import DashboardSidebar from '@/components/layout/dashboard/DashboardSidebar';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import CoursesCategoryTab from '@/components/tabs/CoursesCategoryTab';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';


const Amateur = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  }
  return (
    <DashboardSidebar>
      <div className="w-full md:mt-20">
        <div className="items-center justify-between md:flex">
          <Button variant={'link'} className='text-[#A85334]' onClick={handleGoBack}>Back</Button>
          <Button className='bg-[#A85334]'><span><Plus size={14} /></span>{" "}Add course</Button>
        </div>
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
