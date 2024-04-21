import React from 'react'
import { Button } from '@/components/ui/button'
import { Trash } from 'lucide-react'


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

const SubscriptionCards = () => {
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
            {subscriptionPlans.map((plan) => (
            <div key={plan.id} className="bg-white shadow-md p-4 rounded-md border-brown border-2 relative">
                <img src={plan.image} alt="music" className="absolute top-0 right-0 w-[220px] h-[220px] overflow-hidden" />
                <h2 className="text-xl font-semibold">{plan.name}</h2>
                <p className="text-gray-500 text-sm mt-2">₦{plan.price}</p>
                <ul className="mt-4">
                {plan.description.map((desc, index) => (
                    <li key={index} className="text-gray-500 text-sm inline-flex items-center gap-2"><span><img src="/images/guitar.svg" alt="guitar" /></span>{desc}</li>
                ))}
                </ul>
                <div className="mt-4 flex justify-between">
                <Button className='bg-[#A85334]'>Edit</Button>
                <Button variant="link" className="ml-2">
                    <Trash size={16} color='#A85334'/>
                </Button>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default SubscriptionCards
