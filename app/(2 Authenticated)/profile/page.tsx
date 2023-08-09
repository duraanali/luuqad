"use client"
import { BottomBar } from "@/components/learn/BottomBar"
import { LeftBar } from "@/components/learn/LeftBar"
import { RightBar } from "@/components/learn/RightBar"
import ProfileUser from "@/components/profile/ProfileUser"
import { NextPage } from "next"

type Props = {}

const Profile: NextPage = (props: Props) => {
  return (
    <>
      {/* <TopBar backgroundColor='bg-[#58cc02]' borderColor='border-[#46a302]' /> */}
      <LeftBar selectedTab='Profile' />

      <div className='flex justify-center gap-3 px-4 sm:p-6 sm:pt-6 md:ml-24 lg:ml-64 lg:gap-12 '>
        <div className='flex max-w-xl grow flex-col'>
          <ProfileUser />
        </div>
        <RightBar />
      </div>

      <div className='pt-[90px]'></div>

      <BottomBar selectedTab='Profile' />
    </>
  )
}

export default Profile
