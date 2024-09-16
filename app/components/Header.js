import { iMenu, iValuetainment } from '@/util/imageImports'
import Image from 'next/image'
import React from 'react'
import FutureProduct from './FutureProduct'

const Header = () => {
    return (
        <div className='bg-[#EA2127] pb-[60px] px-[100px]'>
            <div className=' text-black pt-[50px]'>
                <div className='flex justify-between'>

                <div className='flex gap-x-2'>
                    <Image width={60} height={60} src={iValuetainment} alt="" />
                    <div className='flex items-center justify-center font-extrabold'>VTMERCH</div>
                </div>
                <Image alt="" src={iMenu}/>
                </div>
            </div>
            <FutureProduct/>
        </div>
    )
}

export default Header