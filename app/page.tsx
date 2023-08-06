import Image from 'next/image'
import logo from '@/public/images/logo.svg'
import illustration from '@/public/images/illustration-dashboard.png'
import { FormInput } from '@/components/FormInput'
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram } from "react-icons/ti";


export default function Home() {
  return (
    <main className="min-h-screen grid place-content-center px-9">
      <article className='flex items-center flex-col gap-5 max-w-[500px]'>
        <Image src={logo} alt='Ping logo' width={60} className='mb-5'/>
        <h1 className='text-gray text-2xl'>
          We are launching <span className='text-very_dark_blue font-heavy'>soon!</span>
        </h1>
        <p className='text-sm'>
          Subscribe and get notified
        </p>
        <FormInput/>
        <Image src={illustration} alt="Illustration of a dashboard with graphs and toolbar on the left"/>
        <footer className='grid gap-5'>
          <div className='flex text-blue gap-6 mt-[6em] justify-center'>
            <div className='p-2 border-gray/30 border-2 rounded-full
              hover:bg-blue hover:text-white cursor-pointer'>
              <TiSocialFacebook className=''/>
            </div>
            <div className='p-2 border-gray/30 border-2 rounded-full
              hover:bg-blue hover:text-white cursor-pointer'>
              <TiSocialTwitter className=''/>
            </div>
            <div className='p-2 border-gray/30 border-2 rounded-full
              hover:bg-blue hover:text-white cursor-pointer'>
              <TiSocialInstagram className=''/>
            </div>
          </div>
          <p className='text-xs text-center text-gray/50'>
            &copy; Copyrights Ping. All rights reserved
          </p>
        </footer>
      </article>
    </main>
  )
}
