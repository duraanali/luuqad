"use client"
import type { NextPage } from "next"
import React, { useEffect, useState } from "react"
import { LeftBar } from "@/components/learn/LeftBar"
import { BottomBar } from "@/components/learn/BottomBar"
import { RightBar } from "@/components/learn/RightBar"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { useParams } from "next/navigation"
import {
  BronzeLeagueSvg,
  FirstPlaceSvg,
  LeaderboardBannerSvg,
  LockedLeaderboardSvg,
  LockedLeagueSvg,
  SecondPlaceSvg,
  ThirdPlaceSvg,
} from "@/components/SVGs"
import { useGetLeadersQuery } from "@/store/slices/LeaderBoardSlice"
import { useGetCurrentUserQuery } from "@/store/slices/UserSlice"

const Leaderboard: NextPage = () => {
  const { locale } = useParams()
  const t = useTranslations("Leaderboard")

  let leaderboardName: any = "Leaderboard"
  if (locale == "so") {
    leaderboardName = "Hogaamiyaha"
  }
  return (
    <div>
      <LeftBar selectedTab={leaderboardName} />
      <div className='flex justify-center items-center gap-3 pt-14 md:ml-24 md:p-6 md:pt-10 lg:ml-64 lg:gap-12'>
        <div className='flex w-full max-w-xl flex-col items-center gap-5 pb-28 md:px-5'>
          <h1>Guidebook page is under construction!</h1>
        </div>
        <RightBar />
      </div>
      <BottomBar selectedTab={leaderboardName} />
    </div>
  )
}

export default Leaderboard
