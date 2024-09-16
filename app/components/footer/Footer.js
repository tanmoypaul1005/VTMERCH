import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#000000] px-[100px] py-10'>
            <div className='font-extrabold pb-7 text-[100px] text-white border-b-[1px] border-[#A6A5A380] leading-[120px]'>
                VTMERCH
            </div>

            <div className="mt-[48px] grid grid-cols-12 gap-x-10">
                <div className='col-span-5'>
                    <div className='font-normal text-[24px] leading-7 text-white mb-[48px]'>Subscribe and be the first to receive notifications about our upcoming releases and the latest news. </div>
                <div className='border w-full-[1px] text-white py-2 mb-3 text-center border-white rounded-xl'>Enter your email</div>
                <div className='w-full py-2 text-center text-black bg-white rounded-xl'>Subscribe</div>
                </div>
                <div className='flex justify-between col-span-7'>
                    <div className='flex flex-col gap-y-4'>
                        <div className='font-medium text-white text-[20px] leading-6'>
                            Customer Services
                        </div>

                        <div className='font-normal text-white text-[16px] leading-6'>
                            About Us
                        </div>

                        <div className='font-normal text-white text-[16px] leading-6'>
                            Search
                        </div>

                        <div className='font-normal text-white text-[16px] leading-6'>
                            Privacy Policy
                        </div>

                        <div className='font-normal text-white text-[16px] leading-6'>
                            Contact Us
                        </div>

                        <div className='font-normal text-white text-[16px] leading-6'>
                            Terms of Service
                        </div>

                        <div className='font-normal text-white text-[16px] leading-6'>
                            Refund policy
                        </div>

                        <div className='font-normal text-white text-[16px] leading-6'>
                            Track Order
                        </div>
                    </div>


                    <div className='flex flex-col gap-y-4'>
                        <div className='font-medium text-white text-[20px] leading-6'>
                            Products
                        </div>

                        <div className='font-normal text-white text-[16px] leading-6'>
                            Featured products
                        </div>

                        <div className='font-normal text-white text-[16px] leading-6'>
                            Bestseller
                        </div>

                        <div className='font-normal text-white text-[16px] leading-6'>
                            Latest product
                        </div>

                        <div className='font-normal text-white text-[16px] leading-6'>
                            All collections
                        </div>

                        <div className='font-normal text-white text-[16px] leading-6'>
                            All products
                        </div>
                    </div>


                    <div className='flex flex-col gap-y-4'>
                        <div className='font-medium text-white text-[20px] leading-6'>
                            Contact
                        </div>

                        <div className='font-normal text-white w-[300px] text-[16px] leading-6'>
                            Available between 8AM to 8PM. Ready to answer your questions.
                        </div>

                        <div className='font-normal text-white text-[16px] leading-6'>
                            013456789
                        </div>

                        <div className='font-normal text-white text-[16px] leading-6'>
                            store@valuetainment.com
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer