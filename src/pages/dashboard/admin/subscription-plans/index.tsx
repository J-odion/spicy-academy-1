import React from 'react'
import { NextPageWithLayout } from '@/pages/_app';
import DashboardSidebar from '@/components/layout/dashboard/DashboardSidebar';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import SubscriptionCards from '@/components/dashboard/cards/SubscriptionCards';

const SubscriptionPlans: NextPageWithLayout = () => {
  return (
    <DashboardSidebar>
      <div className="w-full mt-10">
        <h1 className="text-2xl font-semibold">Subscription Plans</h1>
        <SubscriptionCards />
      </div>
    </DashboardSidebar>
  )
}

export default SubscriptionPlans

SubscriptionPlans.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout page={"subscription-plans"} >{page}</DashboardLayout>;
};
