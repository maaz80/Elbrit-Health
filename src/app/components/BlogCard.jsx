import Image from 'next/image'
import React from 'react'

function BlogCard({ height, BlogImage, news, date }) {
    return (
        <div className={`relative w-[100%] ${height} rounded-md shadow-md shadow-gray-400 text-white mb-4`}>
            <Image src={BlogImage} alt='BlogImage' className='w-full h-full rounded-md object-cover ' />
            <div className='absolute top-10  left-8  w-[80%]'>{news}</div>
            <div style={{ backgroundColor: ' #17414F' }} className='absolute top-5 -left-2 text-[10px] flex justify-center items-center rounded-r-md w-12 h-4'>{date}</div>
        </div>
    )
}

export default BlogCard
