import { useState } from 'react';
import { NextPageWithLayout } from '@/pages/_app';
import DashboardSidebar from '@/components/layout/dashboard/DashboardSidebar';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import CoursesHeaderTab from '@/components/tabs/CoursesHeaderTab';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Trash, Pencil } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import categories from '@/data/categories.json';
import { Plus } from 'lucide-react';
import DeleteModal from '@/components/modal/courses/DeleteModal';
import EditModal from '@/components/modal/courses/EditModal';
import { NoDataCard } from '@/components/dashboard/cards/NoDataCard';


const Courses: NextPageWithLayout = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const handleDeleteModal = () => {
    setDeleteModal(!deleteModal);
  }

  const handleEditModal = () => {
    setEditModal(!editModal);
  }

  return (
    <DashboardSidebar>
      <div className="w-full md:mt-20">
        <CoursesHeaderTab currentTab={'category-courses'} />

        <div className="py-5 w-full">
            <Table className='w-full'>
              <TableHeader>
                <TableRow>
                  <TableHead>Category</TableHead>
                  <TableHead>Courses</TableHead>
                  <TableHead>Enrolled students</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categories.map((category) => (
                  <TableRow key={category.id}>
                  <TableCell className='inline-flex items-center gap-4'>{category.category} <span className='cursor-pointer text-[#A85334]'><Pencil size={18} onClick={handleEditModal} /></span></TableCell>
                  <TableCell>{category.no_of_courses}</TableCell>
                  <TableCell>{category.enrolled_students}</TableCell>
                  <TableCell>
                      <Button variant={'outline'} className='border-[#A85334] border-[1px] text-[#A85334]'>View</Button>
                  </TableCell>
                  <TableCell onClick={handleDeleteModal}><Trash size={20} color='#A85334' className='cursor-pointer' /></TableCell>
                </TableRow>
                ))}
              </TableBody>
            </Table>
        </div>
        <div className='py-4'>
          <Button variant={'outline'} className='border-[1px] border-[#A85334] text-[#A85334]'><span><Plus size={18} /></span>{" "}Add category</Button>
          <Button className='ml-8 bg-[#A85334]'><span><Plus size={18} /></span>{" "}Add course</Button>
        </div>
      </div>

      <DeleteModal
        title='Are you sure you want to delete this category'
        message='This will delete all courses under this categories'
        open={deleteModal}
        setOpen={setDeleteModal}
      />

      <EditModal
        title='Edit category name'
        open={editModal}
        setOpen={setEditModal}
      />
    </DashboardSidebar>
  )
}

export default Courses;

Courses.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout page={"courses"} >{page}</DashboardLayout>;
};
