"use client"
import type { NextPage } from "next"
import React, { useEffect } from "react"
import { LeftBar } from "@/components/learn/LeftBar"
import { BottomBar } from "@/components/learn/BottomBar"
import { RightBar } from "@/components/learn/RightBar"
import Profile from "../../../../public/images/Profile.png"
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
import { useRouter } from "next/navigation"
import Image from "next/image"

const LeaderboardProfile = ({
  place,
  name,
  xp,
  isCurrentUser,
}: {
  place: number
  name: string
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
        <Image
          width={48}
          height={48}
          className='h-12 w-12 rounded-full'
          src={Profile}
          alt=''
        />
      </div>
      <div className='grow overflow-hidden overflow-ellipsis font-bold'>
        {name}
      </div>
      <div className='shrink-0 text-gray-500'>{`${xp} XP`}</div>
    </div>
  )
}

const Leaderboard: NextPage = () => {
  const router = useRouter()
  const loggedIn = true

  const lessonsCompleted = 10

  useEffect(() => {
    if (!loggedIn) {
      void router.push("/")
    }
  }, [loggedIn, router])

  const lessonsToUnlockLeaderboard = 5
  const lessonsRemainingToUnlockLeaderboard =
    lessonsToUnlockLeaderboard - lessonsCompleted
  const leaderboardIsUnlocked = lessonsCompleted >= lessonsToUnlockLeaderboard

  const leaderboardLeague = "Bronze League"

  const leaderboardUsers = [
    {
      name: "John Doe",
      xp: 100,
      isCurrentUser: false,
    },
    {
      name: "Jane Doe",
      xp: 90,
      isCurrentUser: true,
    },
    {
      name: "John Doe",
      xp: 80,
      isCurrentUser: false,
    },
    {
      name: "Jane Doe",
      xp: 70,
      isCurrentUser: false,
    },
  ]

  return (
    <div>
      <LeftBar selectedTab='leaderboard' />
      <div className='flex justify-center gap-3 pt-14 md:ml-24 md:p-6 md:pt-10 lg:ml-64 lg:gap-12'>
        <div className='flex w-full max-w-xl flex-col items-center gap-5 pb-28 md:px-5'>
          {!leaderboardIsUnlocked && (
            <>
              <LeaderboardBannerSvg />
              <h1 className='text-center text-2xl font-bold text-gray-700'>
                Unlock Leaderboards!
              </h1>
              <p className='text-center text-lg text-gray-500'>
                Complete {lessonsRemainingToUnlockLeaderboard} more section
                {lessonsRemainingToUnlockLeaderboard === 1 ? "" : "s"} to start
                competing
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
          {leaderboardIsUnlocked && (
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
                {leaderboardUsers.map((user, i) => {
                  return (
                    <LeaderboardProfile
                      key={user.name}
                      place={i + 1}
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
