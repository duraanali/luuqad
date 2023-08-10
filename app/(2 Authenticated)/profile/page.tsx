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

      <div className='main-right flex justify-center gap-3 pt-14 sm:p-6 sm:pt-6 md:ml-24 c-max-tm:w-[100%] c-max-td:w-[820px]   c-min-lg:ml-64 c-min-lg:gap-12'>
        <div className='flex max-w-[592px] grow flex-col'>
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
