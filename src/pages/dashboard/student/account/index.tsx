import DashboardLayout from "@/components/layout/students_dashboard/DashboardLayout";
import { NextPageWithLayout } from "@/pages/_app";
import DashboardSidebar from "@/components/layout/students_dashboard/DashboardSidebar";
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { student_courses } from "@/data/data";
import Link from "next/link";
import Image from "next/image";

const Dashboard: NextPageWithLayout = () => {
  const formatToNigerianCurrency = (price: number) => {
    const formatter = new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    });
    return formatter.format(price);
  };

  const limitedCourses = student_courses.slice(0, 4);

  return (
    <DashboardSidebar>
      <div className="w-full mt-20 md:mt-20">
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <h2>Elevate your skills today!</h2>
            <Button className="bg-[#A85334] rounded-[6px] flex gap-2 items-center">
              <Plus size={18} /> Subscribe to a plan
            </Button>
          </div>
          <p>Level up with each category..</p>
          <div></div>
          <div>
            <p>
              Get fired up with <span>free lessons</span>
            </p>
          </div>

          <div>
            <div className="flex justify-between">
              <p>
                Dive into our{" "}
                <span className="text-[#D06B0D]">
                  <Link href="/dashboard/student/courses">courses</Link>
                </span>{" "}
                now..
              </p>
              <Button variant={"link"} className="text-[#A85334]">
                <Link href="/dashboard/student/courses">View all</Link>
              </Button>
            </div>
            <div className=" grid md:grid-cols-4 gap-4">
              {limitedCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-[#FEF9F8] border-[0.5px] border-[#C4AAA1] p-4 relative flex flex-col space-y-4"
                >
                  <h3 className="text-normal font-md text-[#1E1E1E]">
                    {course.title}
                  </h3>
                  <p
                    style={{
                      display: "-webkit-box",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 2,
                    }}
                  >
                    {course.content}
                  </p>

                  <div className="absolute right-0 top-0">
                    <Image
                      src="/images/courses_bg.svg"
                      alt="blob"
                      width={200}
                      height={156}
                      className="object-cover rounded-[10px]"
                    />
                  </div>
                  <p className="text-[#D06B0D]">
                    {formatToNigerianCurrency(course.price)}
                  </p>
                  <Button
                    variant={"outline"}
                    className="w-full border-[1px] border-[#A85334] text-[#A85334] cursor-pointer"
                  >
                    Buy
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardSidebar>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout page={"dashboard"}>{page}</DashboardLayout>;
};
