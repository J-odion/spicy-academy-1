import React from "react";
import DashboardSidebar from "@/components/layout/students_dashboard/DashboardSidebar";
import DashboardLayout from "@/components/layout/students_dashboard/DashboardLayout";
import { NextPageWithLayout } from "@/pages/_app";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import CurriculumHeaderTab from "@/components/tabs/student_dashboard/CurriculumHeaderTab";

const Curriculum: NextPageWithLayout = () => {
  return (
    <DashboardSidebar>
      <div className="w-full mt-20 md:mt-20">
        <div className="flex justify-between">
          <h1>Check out our curriculum</h1>
          <Button className="inline-flex items-center gap-[1px] bg-[#A85334]"><span><Plus size={18} /></span>Subscribe to a plan</Button>
        </div>
        <CurriculumHeaderTab currentTab="beginner" />
      </div>
    </DashboardSidebar>
  );
};

export default Curriculum;

Curriculum.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout page={"curriculum"}>{page}</DashboardLayout>;
};
