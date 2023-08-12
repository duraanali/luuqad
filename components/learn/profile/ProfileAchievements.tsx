import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import RewardCard from "../achievement/RewardCard"

type Props = {}

type FakeData = {
  reward: string
  tips: string
  level: number
  min: number
  max: number
  reach: number
  range: number
}
const ProfileAchievements = (props: Props) => {
  const [rewardData, SetReward] = useState([])

  useEffect(() => {
    axios("/export.json")
      .then((response) => SetReward(response?.data))
      .catch((error) => console.log("myError ->> ", error))
  }, [])

  return (
    <div className='profile-achievement-container'>
      <div className='achievement-header flex justify-between items-center'>
        <h2 className='achievements-title text-2xl text-gray-800 font-bold mb-3'>
          Achievements
        </h2>
        <Link
          href={`${"email or username"}/achievements`}
          className='text-sky-400 font-bold'>
          VIEW All
        </Link>
      </div>
      <div className='achievements-list-container '>
        <ul className='achievements-list border-2 rounded-2 '>
          {rewardData
            ?.map((reward: FakeData, index) => (
              <li key={index} className='border-b-2 last:border-none'>
                <RewardCard
                  reward={reward?.reward}
                  tips={reward?.tips}
                  level={reward?.level}
                  min={reward?.min}
                  max={reward?.max}
                  reach={reward?.reach}
                  range={reward?.range}
                />
              </li>
            ))
            .slice(0, 3)}
        </ul>
      </div>
    </div>
  )
}

export default ProfileAchievements
