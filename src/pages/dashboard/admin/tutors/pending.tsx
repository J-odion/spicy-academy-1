import React, { useState } from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import DashboardSidebar from '@/components/layout/dashboard/DashboardSidebar'
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout'
import TutorsHeaderTab from '@/components/tabs/TutorsHeaderTab'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import tutors from '@/data/tutors.json'
import { Table, TableHeader, TableHead, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Moment from 'react-moment';
import Datapagination from '@/components/pagination/Data-Pagination';


const itemsPerPage = 5;

const Pending: NextPageWithLayout = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const acceptedTutors = tutors.filter(tutor => tutor.status === 'pending');

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = acceptedTutors.slice(indexOfFirstItem, indexOfLastItem);

  const getButtonBorderColor = (status: string) => {
    return status === 'accepted' ? 'border-red-500' : 'border-green-500';
  };

  return (
    <DashboardSidebar>
      <div className="w-full md:mt-20">
        <div className='flex justify-between'>
          <div><h1>Tutors</h1></div>
          <Button className='bg-[#A85334]  gap-2'><Plus size={18} />Add Course</Button>
        </div>
        <TutorsHeaderTab currentTab="pending" />
        <div className="py-5 w-full">
          <Table className='w-full'>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Telephone</TableHead>
                <TableHead>Email Address</TableHead>
                <TableHead>Date accepted</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentItems.map((tutor, index) => (
                <TableRow key={index}>
                  <TableCell>{tutor.name}</TableCell>
                  <TableCell>{tutor.telephone}</TableCell>
                  <TableCell>{tutor.email}</TableCell>
                  <TableCell>
                    <Moment format="DD/M/YY">
                      {tutor.date_accepted}
                    </Moment>
                  </TableCell>
                  <TableCell>
                    <Button variant={'outline'} className={getButtonBorderColor(tutor.status)}>
                      {tutor.status === 'accepted' ? 'Reject request' : 'Accept request'}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Datapagination
            totalItems={tutors.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </DashboardSidebar>
  )
}

export default Pending

Pending.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout page={"tutors"} >{page}</DashboardLayout>;
};
