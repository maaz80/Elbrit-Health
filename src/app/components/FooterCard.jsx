import Image from 'next/image'

function FooterCard({ FooterIcon, Info1, Info2 }) {
    return (
        <div className='h-16 w-72 flex justify-center items-center gap-4 text-white p-2 rounded-md bg-white/10 text-sm'>
            <Image src={FooterIcon}  alt='Medicine' className='w-10 h-10  ' />
            <div>
                <div>{Info1}</div>
                <div className='font-semibold '>{Info2}</div>
            </div>
        </div>
    )
}

export default FooterCard
