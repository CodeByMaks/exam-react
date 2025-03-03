import React from 'react'
import Header from '../../layout/header';
import Footer from '../../layout/footer';

const Blog = () => {
  return (
    <>
      <Header />

      <section className='w-[70%] m-auto'>
        <p className='py-3'>Home / <span className='font-bold'>BLOG</span></p>

        <h1 className='text-6xl font-bold text-center py-9'>Blog</h1>

        <div className='py-9 flex justify-between gap-3'>
            <div className='w-[187px] h-[46px] flex flex-col justify-center items-center bg-amber-600 rounded'>
                <p className='text-white font-bold'>All categories</p>
            </div>
            <div className='w-[187px] h-[46px] flex flex-col justify-center items-center border-2 border-amber-600 rounded'>
                <p className='text-amber-600 font-bold'>All categories</p>
            </div>
            <div className='w-[187px] h-[46px] flex flex-col justify-center items-center border-2 border-amber-600 rounded'>
                <p className='text-amber-600 font-bold'>All categories</p>
            </div>
            <div className='w-[187px] h-[46px] flex flex-col justify-center items-center border-2 border-amber-600 rounded'>
                <p className='text-amber-600 font-bold'>All categories</p>
            </div>
            <div className='w-[187px] h-[46px] flex flex-col justify-center items-center border-2 border-amber-600 rounded'>
                <p className='text-amber-600 font-bold'>All categories</p>
            </div>
            <div className='w-[187px] h-[46px] flex flex-col justify-center items-center border-2 border-amber-600 rounded'>
                <p className='text-amber-600 font-bold'>All categories</p>
            </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Blog;