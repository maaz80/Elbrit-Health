"use client"; // Required for client-side animations in Next.js
import Navbar from './components/Navbar'
import Image from 'next/image';
import Medicine from './Assets/Medicine.png'
import CardImage1 from './Assets/h2-b1.jpg.png'
import CardImage2 from './Assets/bn2-2.jpg.png'
import CardImage3 from './Assets/bn2-3.jpg.png'
import CardImage4 from './Assets/bn2-4.jpg.png'
import CardImage5 from './Assets/bn2-5.jpg.png'
import LastCardImage from './Assets/LastCard.png'
import BlogImage1 from './Assets/blog1-450x580.jpg.png'
import BlogImage2 from './Assets/blog2-450x580.jpg.png'
import Icon1 from './Assets/Icon1.png'
import Icon2 from './Assets/Icon2.png'
import Icon3 from './Assets/Icon3.png'
import FeatureIcon1 from './Assets/FeatureIcon1.png'
import FeatureIcon2 from './Assets/FeatureIcon2.png'
import FeatureIcon3 from './Assets/FeatureIcon3.png'
import FeatureIcon4 from './Assets/FeatureIcon4.png'
import FeatureIcon5 from './Assets/FeatureIcon5.png'
import FeatureIcon6 from './Assets/FeatureIcon6.png'
import Features from './components/Features';
import Card from './components/Card';
import BlogCard from './components/BlogCard';
import Footer from './components/Footer';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Typical from "react-typical";


function Page() {
  const imageRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      bgRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
    );

    gsap.fromTo(
      imageRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.5 }
    );
  }, []);
  return (
    <div className='poppins-regular'>
      {/* Navbar  */}
      <div>
        <Navbar />
      </div>

      {/* Hero Section  */}
      <div style={{ backgroundColor: '#E2F5FB' }} className='min-h-screen  p-2 md:p-10 mx-1 md:mx-10 m-auto'>
      <h1 className="text-4xl md:text-8xl font-bold text-blue-950 text-center">
      <Typical
        steps={[
          "Essential Vitamins", 
          2000,                
          "Boost Your Health", 
          2000,
          "Feel Your Best",    
          2000,
        ]}
        loop={Infinity} 
        wrapper="span" 
      />
    </h1>
        <div className='w-full flex flex-col md:flex-row justify-between'>
          <div className='w-[100%] md:w-[28%] h-[250px] md:h-[380px]  flex flex-col justify-center item-start md:items-end'>
            <div className='w-52 flex flex-col justify-center items-start gap-6'>
              <p className=' text-gray-400'>Online Medical Supplies</p>
              <h1 className='font-semibold text-2xl w-56'>Get Your Vitamins & Minerals</h1>
              <button style={{ backgroundColor: '#17414F' }} className=' text-white flex justify-center items-center w-32 h-12 rounded-3xl'>Explore</button>
            </div>
          </div>

          <div className='w-[358px] h-[380px] mt-4 relative flex justify-center items-start md:items-center'>
            <div
              ref={bgRef}
              style={{ backgroundColor: "#FFE9B5" }}
              className="w-80 h-80 rounded-tr-[120px] rounded-bl-[120px]"
            ></div>
            <Image
              ref={imageRef}
              src={Medicine}
              priority
              alt="Medicine"
              className="w-[380px]  h-[100%] -top-16 right-5 absolute"
            />
          </div>

          <div className='w-[100%] md:w-[28%] h-[180px] md:h-[380px] mt-6 flex flex-col justify-center items-start gap-8'>
            <div className='flex justify-center items-center w-64 gap-3'>
              <Image src={Icon1} alt='Medicine' className='w-14 h-14 -top-16 right-10 ' />
              <div className='text-blue-950'>
                <h1 className='font-semibold text-lg'>Vitamin</h1>
                <p className='text-[11px] text-gray-400'>Increased Vitamins and
                  minerals in your diet</p>
              </div>
            </div>

            <div className='flex justify-center items-center w-64 gap-3'>
              <Image src={Icon2} alt='Medicine' className='w-14 h-14 -top-16 right-10 ' />
              <div className='text-blue-950'>
                <h1 className='font-semibold text-lg'>Weight Loss</h1>
                <p className='text-[11px] text-gray-400'> Weight Loss </p>
                <p className='text-[11px] text-gray-400'> Find scientifically proven solutions </p>
              </div>
            </div>

            <div className='flex justify-center items-center w-64 gap-3'>
              <Image src={Icon3} alt='Medicine' className='w-14 h-14 -top-16 right-10 ' />
              <div className='text-blue-950'>
                <h1 className='font-semibold text-lg'>Functional Foods</h1>
                <p className='text-[11px] text-gray-400'>Functional Foods</p>
                <p className='text-[11px] text-gray-400'>From protein powers to baby formula</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section  */}
      <div style={{ backgroundColor: ' #17414F' }} className='min-h-[400px] w-[100%] md:w-[70%]  rounded-3xl text-white mx-auto mt-16 xl:-mt-36 flex flex-wrap p-10  justify-between'>

        <div className='w-full md:w-60 -mt-20 mb-10'>
          <Features head={'Cleanically Studied'} para={'All products that we offer have undergone lab and safety tests'} Icons={FeatureIcon1} />
        </div>
        <div className='w-full md:w-60 mt-0 md:-mt-20 mb-10'>
          <Features head={'Vegetarian Friendly'} para={'We have a wide selection of vegetarian products to meet your needs'} Icons={FeatureIcon2} />
        </div>
        <div className='w-full md:w-60 mt-0 md:-mt-20 mb-10'>
          <Features head={'Made in India'} para={'Shop local and explore health products made right here in India'} Icons={FeatureIcon3} />
        </div>

        <div className=' w-full flex flex-wrap gap-7 justify-between'>
          <div className='w-full md:w-60 '>
            <Features head={'Free shipping'} para={'We deliver to your door with no shipping costs on your orders'} Icons={FeatureIcon4} />
          </div>
          <div className='w-full md:w-60 '>
            <Features head={'No Risk'} para={'We ensure that all products are safe and within their use-by date'} Icons={FeatureIcon5} />
          </div>
          <div className='w-full md:w-60 '>
            <Features head={'GMO free'} para={'Natural, no modified products and derivatives for those who need it'} Icons={FeatureIcon6} />
          </div>
        </div>

      </div>

      {/* Card Section  */}
      <div className='min-h-[400px] w-[100%] md:w-[70%] mx-1 md:mx-auto flex flex-wrap   justify-between mt-16'>
        <div className='w-[100%] md:w-[35%] flex justify-center items-start flex-col gap-3 ml-3'>
          <h2 style={{ color: ' #17414F' }} className='font-semibold'>Ingredients</h2>
          <h1 style={{ color: ' #17414F' }} className='text-xl font-semibold'>Better Ingredients</h1>
          <div className='text-gray-400 text-sm'>Only the best when you choose products offered on our platform - high-quality ingredients for high quality products! </div>
        </div>
        <Card title={'Vitamins C'} desc={'Vitamins C as ascorbic acid.'} CardImage={CardImage1} />
        <Card title={'Vitamins B3'} desc={'Niacin for healthy gut and skin'} CardImage={CardImage2} />
        <Card title={'Magnesium'} desc={'Boost energy and support muscle function'} CardImage={CardImage5} />
        <Card title={'Hyaluronic Acid'} desc={'For smooth, supple and soft skin!'} CardImage={CardImage3} />
        <Card title={'Lactobacillus'} desc={'Invigorate your gut microbime'} CardImage={CardImage4} />
        <Image src={LastCardImage} alt='LastCard' className=' mt-2 w-24 h-56' />
      </div>

      {/* Blog Section  */}
      <div className='text-center mt-16'>
        <h2 style={{ color: ' #17414F' }}>Our Blog</h2>
        <h1 style={{ color: ' #17414F' }} className='text-2xl font-semibold'>Latest News</h1>
      </div>
      <div className='w-[100%] md:w-[90%] mx-auto min-h-[500px] flex flex-wrap justify-between mt-16'>
        <div className='w-[100%] md:w-auto'>
          <BlogCard BlogImage={BlogImage1} news={'The Covid-19 Epidemic In 2022 Is Back'} date={'20 APR'} height={'h-96'} />
          <BlogCard BlogImage={BlogImage2} news={'The Covid-19 Epidemic In 2023 Is Back'} date={'20 APR'} height={'h-44'} />
        </div>
        <div className='w-[100%] md:w-auto'>
          <BlogCard BlogImage={BlogImage1} news={'The Covid-19 Epidemic In 2022 Is Back'} date={'20 APR'} height={'h-44'} />
          <BlogCard BlogImage={BlogImage2} news={'The Covid-19 Epidemic In 2023 Is Back'} date={'20 APR'} height={'h-96'} />
        </div>
        <div className='w-[100%] md:w-auto'>
          <BlogCard BlogImage={BlogImage1} news={'The Covid-19 Epidemic In 2022 Is Back'} date={'20 APR'} height={'h-96'} />
          <BlogCard BlogImage={BlogImage2} news={'The Covid-19 Epidemic In 2023 Is Back'} date={'20 APR'} height={'h-44'} />
        </div>
        <div className='w-[100%] md:w-auto'>
          <BlogCard BlogImage={BlogImage1} news={'The Covid-19 Epidemic In 2022 Is Back'} date={'20 APR'} height={'h-44'} />
          <BlogCard BlogImage={BlogImage2} news={'The Covid-19 Epidemic In 2023 Is Back'} date={'17 MAR'} height={'h-96'} />
        </div>
      </div>

      {/* Footer  */}
      <div style={{ backgroundColor: ' #17414F' }} className='w-full p-10'>
        <Footer />
      </div>
    </div >
  )
}

export default Page;
