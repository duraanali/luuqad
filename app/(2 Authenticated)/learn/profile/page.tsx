"use client"
import { BottomBar } from "@/components/learn/BottomBar"
import { LeftBar } from "@/components/learn/LeftBar"
import { RightBar } from "@/components/learn/RightBar"
import ProfileInviteFriendModal from "@/components/learn/profile/ProfileInviteFriendModal"
import ProfileSettings from "@/components/learn/profile/ProfileSettings"
import ProfileStatistics from "@/components/learn/profile/ProfileStatistics"
import ProfileUser from "@/components/learn/profile/ProfileUser"
import { useGetPointsQuery } from "@/store/slices/PointSlice"
import { useGetCurrentUserQuery } from "@store/slices/UserSlice"
import { NextPage } from "next"
import { Suspense, useState } from "react"

const Profile: NextPage = () => {
  const { data: user } = useGetCurrentUserQuery()
  const { data: points } = useGetPointsQuery()
  const [ModelIsOpen, SetModelIsOpen] = useState(false)

  return (
    <>
      <ProfileSettings />
      <LeftBar selectedTab='Profile' />
      <div className='main-right-middle-container flex justify-center gap-12  sm:p-6 sm:pt-6 md:ml-24 c-max-tm:w-[100%] c-max-td:w-[820px]   c-min-lg:ml-64'>
        <div className=' main-middle-left flex max-w-[592px] grow flex-col gap-8 c-sm:p-4 c-sm:mb-20'>
          {user && (
            <Suspense fallback={<div>loading...</div>}>
              <ProfileUser user={user} />
            </Suspense>
          )}
          <ProfileStatistics points={points} />
          {ModelIsOpen ? (
            <ProfileInviteFriendModal SetModelIsOpen={SetModelIsOpen} />
          ) : (
            ""
          )}
          {/* <ProfileAchievements /> */}
        </div>
        <RightBar SetModelIsOpen={SetModelIsOpen} />
      </div>
      <BottomBar selectedTab='Profile' />
    </>
  )
}

export default Profile
