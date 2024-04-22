import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

interface TransactionsProps {
    currentTab: "all" | "successful" | "pending";
  }

const TransactionHeaderTab = ({currentTab = "all"}: TransactionsProps) => {
    const router = useRouter();


  return (
    <div className="py-4 tabs">
      <ul className="flex space-x-8 md:space-x-12">
      <Link href="/dashboard/settings/profile">
          <li
            className={`cursor-pointer ${
              currentTab === "all" && "border-b-4 border-gray-950 pb-2"
            }`}
          >
            Overview
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default TransactionHeaderTab
