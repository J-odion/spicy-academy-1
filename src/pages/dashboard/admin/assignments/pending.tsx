import React, {useState} from 'react';
import { NextPageWithLayout } from '@/pages/_app';
import DashboardSidebar from '@/components/layout/dashboard/DashboardSidebar';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import AssignmentsHeaderTab from '@/components/tabs/AssignmentsHeaderTab';
import assignments from '@/data/assignments.json';
import { Table, TableHeader, TableHead, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import Moment from 'react-moment';
import Datapagination from '@/components/pagination/Data-Pagination';


const itemsPerPage = 8;

const Pending: NextPageWithLayout = () => {

  const [currentPage, setCurrentPage] = useState(1);



  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = assignments.slice(indexOfFirstItem, indexOfLastItem);


  const getBackgroundColor = (grade: number) => {
    if (grade >= 80 && grade <= 100) {
      return 'bg-[#D6F3C5] ';
    } else if (grade >= 60 && grade <= 79) {
      return 'bg-orange-200';
    } else {
      return 'bg-red-200';
    }
  };


  return (
    <DashboardSidebar>
      <div className="w-full md:mt-20">
        <div><h1 className='text-2xl font-medium'>Assignments</h1></div>
        <AssignmentsHeaderTab currentTab="pending" />
        <div className="py-4 w-full">
          <Table className='w-full'>
            <TableHeader>
              <TableRow>
                <TableHead>Submission date</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email Address</TableHead>
                <TableHead>Level</TableHead>
                <TableHead>Lesson</TableHead>
                <TableHead>Grade</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentItems.filter((assignment) => assignment.status === 'pending').map((assignment) => (
                <TableRow key={assignment.id}>
                  <TableCell className='text-[#4F4F4F]'>
                    <Moment format="D/M/YY">
                      {assignment.submission_date}
                    </Moment>
                  </TableCell>
                  <TableCell>{assignment.name}</TableCell>
                  <TableCell>{assignment.email}</TableCell>
                  <TableCell>{assignment.level}</TableCell>
                  <TableCell>{assignment.lesson}</TableCell>
                  <TableCell>
                    <Button variant={'outline'} className='border-[1px] border-[#A85334] text-[#A85334]'>
                      {assignment.status === 'reviewed' ? 'View Remark' : 'Grade'}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <Datapagination
            totalItems={assignments.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
    </DashboardSidebar>
  );
};

export default Pending;

Pending.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout page={"assignments"} >{page}</DashboardLayout>;
};
