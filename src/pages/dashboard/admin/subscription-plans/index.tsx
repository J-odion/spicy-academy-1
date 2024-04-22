import React from 'react'
import { NextPageWithLayout } from '@/pages/_app';
import DashboardSidebar from '@/components/layout/dashboard/DashboardSidebar';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import SubscriptionCards from '@/components/dashboard/cards/SubscriptionCards';

const subscriptionPlans = [
  {
      id: 1,
      name: '1 Month',
      price: '3,550',
      description: [
          'Unlimited access to all courses',
          'Unlimited access to all courses',
          'Unlimited access to all courses',
          'Unlimited access to all courses',
      ],
      image: '/images/blob-music.svg'
  },
  {
      id: 2,
      name: '3 Month',
      price: '10,000',
      description: [
          'Unlimited access to all courses',
          'Unlimited access to all courses',
          'Unlimited access to all courses',
          'Unlimited access to all courses',
      ],
      image: '/images/blob-music-purple.svg'
  },
  {
      id: 3,
      name: '6 Month',
      price: '18,000',
      description: [
          'Unlimited access to all courses',
          'Unlimited access to all courses',
          'Unlimited access to all courses',
          'Unlimited access to all courses',
      ],
      image: '/images/blob-music-purple.svg'
  },
  {
      id: 4,
      name: '12 Month',
      price: '30,000',
      description: [
          'Unlimited access to all courses',
          'Unlimited access to all courses',
          'Unlimited access to all courses',
          'Unlimited access to all courses',
      ],
      image: '/images/blob-music-purple.svg'
  },
]


const SubscriptionPlans: NextPageWithLayout = () => {
  return (
    <DashboardSidebar>
      <div className="w-full mt-10 px-8">
        <h1 className="text-2xl font-semibold py-8">Subscription Plans</h1>
        <SubscriptionCards subscriptionPlans={subscriptionPlans} />
      </div>
    </DashboardSidebar>
  )
}

export default SubscriptionPlans

SubscriptionPlans.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout page={"subscription-plans"} >{page}</DashboardLayout>;
};
