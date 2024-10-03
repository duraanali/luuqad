import Link from "next/link"

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-around pt-8 pb-8 mt-16 bg-[#58CC02]'>
      <div className='grid w-full grid-cols-2 gap-8 px-4 py-6 mx-auto place-items-center lg:py-8 md:grid-cols-3'>
        <div>
          <h3 className='mb-1 text-2xl font-bold tracking-wider text-white'>
            About Us
          </h3>
          <ul className='mt-3 font-semibold tracking-wider text-white'>
            <li>
              <Link href='/about/who_we_are'>Who We Are</Link>
            </li>
            <li>Mission</li>
            <li>Contact us</li>
            <li>
              <Link href='/about/approach'>Approach</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='w-full mb-1 text-2xl font-bold tracking-wider text-white'>
            Help and support
          </h3>
          <ul className='mt-3 font-semibold tracking-wider text-white'>
            <li>Forum</li>
            <li>Luuqad FAQs</li>
            <li>Join Our Discord</li>
          </ul>
        </div>

        <div>
          <h3 className='w-full mb-1 text-2xl font-bold tracking-wider text-white'>
            Social
          </h3>
          <ul className='mt-3 font-semibold tracking-wider text-white'>
            <li>Blogs</li>
            <li>
              <Link href='/'>Facebook</Link>
            </li>
            <li>
              <Link href='/'>Instagram</Link>
            </li>
            <li>
              <Link href='/'>Twitter</Link>
            </li>
          </ul>
        </div>
      </div>

      <hr className='w-full mb-10 bg-primary-white-3' />

      <div>
        <div className='flex flex-row items-center gap-5 mt-4 text-white'>
          <span className='font-semibold tracking-wider text-white text-md'>
            © 2023 Copyright Luuqad
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
