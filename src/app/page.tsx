import Image from 'next/image'
import { Inter } from 'next/font/google'
import { NextSeo } from 'next-seo';
import data from '../../data/data';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const currentYear = new Date().getFullYear()
  const {
    description,
    copyrightText,
    newsletterheading,
    sitelogo,
    title,
  } = data

  return (
    <>
        <div className="relative flex flex-col  place-items-center ">
          <h2 className='text-center font-heading m-10 text-6xl sm:text-7xl lg:text-8xl leading-[5rem] sm:leading-[7rem] lg:leading-[7rem] font-bold '>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>{title}</span>
            <span className=''>⏳</span>
          </h2>
          <p className='text-2xl md:text-3xl px-6 max-w-3xl text-center m-5 text-slate-100 font-thin' dangerouslySetInnerHTML={{
            __html: description
          }}>
          </p>
        </div>
        <footer className='text-slate-500 text-center'>
          <div className=''>
            <p className='' dangerouslySetInnerHTML={{
              __html: copyrightText
            }}>
            </p>

          </div>
        </footer>

      </main>
    </>
  )
}
