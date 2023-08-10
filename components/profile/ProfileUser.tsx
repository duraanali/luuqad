import Image from "next/image"
import Link from "next/link"
import LuuqadIconFollow from "../icons/LuuqadIconFollow"
import LuuqadIconPen from "../icons/LuuqadIconPen"
import LuuqadIconTime from "../icons/LuuqadIconTime"
import LuuqadIconUK from "../icons/LuuqadIconUK"

type Props = {}

const ProfileUser = (props: Props) => {
  return (
    <div className='user-container flex  justify-between border-b-[2px] mt-2  '>
      <div className='user-left-detail flex flex-col flex-auto '>
        <h1 className='user-name-container c-sm:text-2xl text-3xl text-cyan-950 font-bold leading-tight mb-4		 '>
          <span className='user-full-name  '>jamaal mahamed</span>
          <div className=' user-user-name text-lg  text-gray-400 font-normal '>
            jamaaldev
          </div>
        </h1>
        <div className='user-join-date flex items-center gap-2 '>
          <span>
            <LuuqadIconTime className='text-gray-300' width={20} />
          </span>
          <span className='text-lg text-gray-500'>
            Joined <span>July 2023</span>
          </span>
        </div>
        <div className='user-follow flex items-center gap-2'>
          <span>
            <LuuqadIconFollow className='text-gray-300' width={20} />
          </span>
          <span className='text-lg'>
            <span className=' c-sm:hidden text-gray-500 '>0 Following</span>
            &nbsp;<span className=' c-sm:hidden '>/</span>&nbsp;
            <span className=' c-sm:hidden text-gray-500 '>0 Followers</span>
            <span className=' c-min-sm:hidden text-gray-500 '>0 Friends</span>
          </span>
        </div>
        <div className='user-courses py-4'>
          <button className=''>
            <LuuqadIconUK width={30} />
          </button>
        </div>
      </div>
      <div className='user-right-avatar relative ml-2 '>
        <Image
          className=' profile-avatar object-contain  rounded-full max-w-none c-sm:w-[77px] '
          src='/images/Profile.png'
          width={140}
          height={140}
          alt='Picture of the author'
        />
        <Link href={"/settings/acount"} className='user-setting'>
          <div className=' absolute bg-sky-400 p-0 rounded-[50%]  top-0  right-0 '>
            <LuuqadIconPen className=' text-primary-white-1 ' width={30} />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ProfileUser
