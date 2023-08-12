"use client"
import type { NextPage } from "next"
import React, { useEffect, useState } from "react"
import { LeftBar } from "@/components/learn/LeftBar"
import { BottomBar } from "@/components/learn/BottomBar"
import { RightBar } from "@/components/learn/RightBar"
import Link from "next/link"
import {
  BronzeLeagueSvg,
  FirstPlaceSvg,
  LeaderboardBannerSvg,
  LockedLeaderboardSvg,
  LockedLeagueSvg,
  SecondPlaceSvg,
  ThirdPlaceSvg,
} from "@/components/SVGs"
import Image from "next/image"
import { useGetLeadersQuery } from "@/store/slices/LeaderBoardSlice"
import { useGetCurrentUserQuery } from "@/store/slices/UserSlice"
import NameAvatar from "@/utils/NameAvatar"
const LeaderboardProfile = ({
  place,
  name,
  image,
  xp,
  isCurrentUser,
}: {
  place: number
  name: string
  image: string
  xp: number
  isCurrentUser: boolean
}) => {
  return (
    <div
      className={[
        "flex items-center gap-5 rounded-2xl py-2 px-5 hover:bg-gray-100 md:mx-0",
        isCurrentUser ? "bg-gray-200" : "",
      ].join(" ")}>
      <div className='flex items-center gap-4'>
        {place === 1 ? (
          <FirstPlaceSvg />
        ) : place === 2 ? (
          <SecondPlaceSvg />
        ) : place === 3 ? (
          <ThirdPlaceSvg />
        ) : (
          <div className='flex h-10 w-10 items-center justify-center font-bold text-green-700'>
            {place}
          </div>
        )}
        {image ? (
          <Image
            src={image}
            alt='avatar'
            width='48'
            height='48'
            className='rounded-full'
          />
        ) : (
          <NameAvatar name={name} />
        )}
      </div>
      <div className='grow overflow-hidden overflow-ellipsis font-bold'>
        {name}
      </div>
      <div className='shrink-0 text-gray-500'>{`${xp} XP`}</div>
    </div>
  )
}

const Leaderboard: NextPage = () => {
  const { data: leaders, isLoading } = useGetLeadersQuery<any>()
  const { data: currentUser } = useGetCurrentUserQuery<any>()

  const [leaderboardUsers, setLeaderboardUsers] = useState([])
  const [currentUserHasPoints, setCurrentUserHasPoints] = useState(false)

  useEffect(() => {
    if (leaders?.usersWithPoints && currentUser?.user && !isLoading) {
      const mappedLeaderboardUsers = leaders?.usersWithPoints.map(
        (user: { image: any; name: any; Point: any[] }) => {
          const isCurrentUser = user.name === currentUser?.user.name
          const xp = user.Point.reduce(
            (total: any, point: any) => total + point.points,
            0,
          )
          if (isCurrentUser && xp > 0) {
            setCurrentUserHasPoints(true)
          }

          return {
            image: user.image,
            name: user.name,
            xp,
            isCurrentUser,
          }
        },
      )

      // Filter out users with zero points
      const nonZeroLeaderboardUsers = mappedLeaderboardUsers.filter(
        (user: { xp: number }) => user.xp > 0,
      )

      // Sort the non-zero users based on their xp in descending order
      const sortedLeaderboardUsers = nonZeroLeaderboardUsers.sort(
        (a: { xp: number }, b: { xp: number }) => b.xp - a.xp,
      )

      setLeaderboardUsers(sortedLeaderboardUsers)
    }
  }, [leaders, currentUser, isLoading])

  console.log(leaderboardUsers)
  const leaderboardLeague = "Bronze League"

  return (
    <div>
      <LeftBar selectedTab='leaderboard' />
      <div className='flex justify-center gap-3 pt-14 md:ml-24 md:p-6 md:pt-10 lg:ml-64 lg:gap-12'>
        <div className='flex w-full max-w-xl flex-col items-center gap-5 pb-28 md:px-5'>
          {!leaders && (
            <>
              <LeaderboardBannerSvg />

              <p className='text-center text-lg text-gray-500'>Loading...</p>

              <div className='h-5'></div>
              <LockedLeaderboardSvg />
            </>
          )}
          {!currentUserHasPoints && (
            <>
              <LeaderboardBannerSvg />
              <h1 className='text-center text-2xl font-bold text-gray-700'>
                Unlock Leaderboards!
              </h1>
              <p className='text-center text-lg text-gray-500'>
                Complete at least one section to view the leaderboard!
              </p>
              <Link
                href='/learn'
                className='w-fit rounded-2xl border-2 border-b-4 border-gray-200 px-16 py-2 text-center font-bold uppercase text-blue-400 transition hover:bg-gray-50 hover:brightness-90'>
                Start Learning
              </Link>
              <div className='h-5'></div>
              <LockedLeaderboardSvg />
            </>
          )}
          {currentUserHasPoints && (
            <>
              <div className='sticky top-0 -mt-14 flex w-full flex-col items-center gap-5 bg-white pt-14'>
                <div className='flex items-center gap-5'>
                  <BronzeLeagueSvg className='h-fit w-20' />
                  <LockedLeagueSvg />
                  <LockedLeagueSvg />
                  <LockedLeagueSvg />
                  <LockedLeagueSvg />
                </div>
                <h1 className='text-2xl font-bold'>{leaderboardLeague}</h1>
                <div className='flex w-full flex-col items-center gap-1 pb-5'>
                  <p className='text-lg text-gray-500'>Top 20 in this league</p>
                </div>
                <div className='w-full border-b-2 border-gray-200'></div>
              </div>
              <div className='w-full'>
                {leaderboardUsers.map((user: any, i: any) => {
                  return (
                    <LeaderboardProfile
                      key={user.name}
                      place={i + 1}
                      image={user.image}
                      name={user.name}
                      xp={user.xp}
                      isCurrentUser={user.isCurrentUser}
                    />
                  )
                })}
              </div>
            </>
          )}
        </div>
        <RightBar />
      </div>
      <BottomBar selectedTab='leaderboard' />
    </div>
  )
}

export default Leaderboard
