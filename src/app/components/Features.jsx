import Image from 'next/image'

function Features({ Icons, head, para ,top}) {
    return (
        <div className='w-full h-full text-white flex flex-col gap-3 items-center'>
            <div className={`w-20 h-20 bg-white rounded-full flex justify-center items-center`}>
                <Image src={Icons}  className='w-[33%] h-[33%]' alt='icons' />

            </div>
            <h1 className='text-xl'>{head}</h1>
            <p className='text-[12px] flex-wrap text-center'>{para}</p>
        </div>
    )
}

export default Features
