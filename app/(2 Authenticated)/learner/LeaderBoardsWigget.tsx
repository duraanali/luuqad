import React from "react"
import LuuqadIconLock from "../../../components/icons/LuuqadIconLock"

type Props = {}

const LeaderBoardsWigget = (props: Props) => {
  return (
    <div>
      <div className='unit-score-leaderboard c-max-md:hidden w-[368px] min-h-[150px] border border-gray-200 rounded-2xl p-5 '>
        <h2 className='unit-leaderboard-h2 text-2xl mb-6 '>
          Unlock Leaderboards!
        </h2>
        <div className='info-icon-wrapper grid  grid-cols-[70px_minmax(25%,_1fr)_50px] items-center   '>
          <LuuqadIconLock width={30} />
          <p className='unit-leaderboard-p text-[17px] pl-2 my-1 '>
            Complete 3 more lessons to start competing
          </p>
        </div>
      </div>
    </div>
  )
}

export default LeaderBoardsWigget
