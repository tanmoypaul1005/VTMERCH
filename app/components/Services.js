import { iCustomerSupport, iDelivery, iExchange, iVerified } from '@/util/imageImports'
import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <div className='flex justify-between bg-gradient-to-b p-[100px] gap-x-10'>
            <div className='text-white'>
                <Image src={iDelivery} alt=""/>
                <div className='mt-6 mb-3 text-2xl font-medium leading-7'>Shipping</div>
                <div className='text-base font-normal line-clamp-2'>The attention to detail is evident in every aspect of this backpack.</div>
            </div>

            <div className='text-white'>
                <Image src={iExchange} alt=""/>
                <div className='mt-6 mb-3 text-2xl font-medium leading-7'>Shipping</div>
                <div className='text-base font-normal line-clamp-2'>The attention to detail is evident in every aspect of this backpack.</div>
            </div>

            <div className='text-white'>
                <Image src={iCustomerSupport} alt=""/>
                <div className='mt-6 mb-3 text-2xl font-medium leading-7'>Shipping</div>
                <div className='text-base font-normal line-clamp-2'>The attention to detail is evident in every aspect of this backpack.</div>
            </div>

            <div className='text-white'>
                <Image src={iVerified} alt=""/>
                <div className='mt-6 mb-3 text-2xl font-medium leading-7'>Shipping</div>
                <div className='text-base font-normal line-clamp-2'>The attention to detail is evident in every aspect of this backpack.</div>
            </div>
        </div>
    )
}

export default Services