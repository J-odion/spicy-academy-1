import React, { useState } from 'react';
import { NextPageWithLayout } from '@/pages/_app';
import DashboardSidebar from '@/components/layout/dashboard/DashboardSidebar';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import CoursesHeaderTab from '@/components/tabs/CoursesHeaderTab';
import freecourses from '@/data/freeCourses.json';
import { EllipsisVertical } from 'lucide-react';

const FreeCourses: NextPageWithLayout = () => {
  const [menuOpen, setMenuOpen] = useState<string | null>(null);

  const handleMenuClick = (courseId: string) => {
    setMenuOpen(courseId === menuOpen ? null : courseId);
  };

  return (
    <DashboardSidebar>
      <div className="w-full md:mt-20">
        <CoursesHeaderTab currentTab={'free-courses'} />
        <div className='grid grid-cols-4 gap-8'>
          {freecourses.map((course) => (
            <div key={course.id} className='flex flex-col gap-2 rounded-[6px] justify-between py-4 relative'>
              <div className='flex items-center gap-4'>
                <video className='rounded-md' controls>
                  <source src={course.content} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className='flex justify-between'>
                <h5>{course.title}</h5>
                <div className="relative">
                  <EllipsisVertical size={18} className='text-[#E89222] cursor-pointer' onClick={() => handleMenuClick(course.id.toString())} />
                  {menuOpen === course.id.toString() && (
                    <div className="absolute right-0 top-full bg-white border border-gray-200 shadow-md rounded-md mt-2 py-1 w-32">
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Edit</button>
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Delete</button>
                    </div>
                  )}
                </div>
              </div>
              <div className='flex justify-between text-[#1E1E1E80] text-[14px]'>
                <h5>{course.name_of_tutor}</h5>
                <p>{course.video_duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardSidebar>
  );
};

export default FreeCourses;

FreeCourses.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout page={"courses"} >{page}</DashboardLayout>;
};
