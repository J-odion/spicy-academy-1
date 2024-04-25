import React from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import DashboardSidebar from '@/components/layout/dashboard/DashboardSidebar'
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout'

const ChatForum: NextPageWithLayout = () => {
  return (
    <DashboardSidebar>
      <div className="w-full md:mt-20">
        ChatForum
      </div>
    </DashboardSidebar>
  )
}

export default ChatForum

ChatForum.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout page={"chat-forum"} >{page}</DashboardLayout>;
};
