import React, {useState} from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
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
import { NoDataCard } from '@/components/dashboard/cards/NoDataCard';



const categoryCourses = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState(categories[0]);
  console.log(categories.map((category) => category.id));
  return (
    <div>

    </div>
  )
}

export default categoryCourses
