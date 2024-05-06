import DashboardLayout from '@/components/layout/students_dashboard/DashboardLayout';
import { NextPageWithLayout } from '@/pages/_app';
import DashboardSidebar from '@/components/layout/students_dashboard/DashboardSidebar';
import React from 'react'
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { student_courses } from '@/data/data';





const Dashboard: NextPageWithLayout = () => {
  return (
    <DashboardSidebar>
        <div className="w-full mt-20 md:mt-20" >
            <div className="flex flex-col">
                <div className='flex justify-between items-center'>
                    <h2>Elevate your skills today!</h2>
                    <Button className='bg-[#A85334] rounded-[6px] flex gap-2 items-center'><Plus size={18} /> Subscribe to a plan</Button>
                </div>
                <p>Level up with each category..</p>
                <div></div>
                <div>
                    <p>Get fired up with <span>free lessons</span></p>
                </div>
                <div className='flex justify-between'>
                    <p>Dive into our <span className='text-[#D06B0D]'>courses</span> now</p>
                    <Button variant={'link'} className='text-[#A85334]'>View all</Button>
                </div>
            </div>
        </div>
    </DashboardSidebar>
  )
}

export default Dashboard

Dashboard.getLayout = function getLayout(page: React.ReactElement) {
    return <DashboardLayout page={"dashboard"}>{page}</DashboardLayout>;
};
