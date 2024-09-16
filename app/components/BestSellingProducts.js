import React from 'react'
import ShortSleeve from './ShortSleeve'

const BestSellingProducts = () => {
    return (
        <div className='p-[100px] bg-[#F6F5F5]'>
            <div className='uppercase font-montserrat text-[50px] font-semibold leading-[84px] tracking-[0.5px] text-left'>
                <div className='text-[#060606]'>Buy 1 get 1 Free</div>
                <div className='flex gap-x-3'>
                    <div className='text-[#060606]'>on </div>
                    <div className='text-[#060606] tracking-wide outlined-text '>best selling products</div>
                    
                </div>
            </div>

            <ShortSleeve />
        </div>
    )
}

export default BestSellingProducts