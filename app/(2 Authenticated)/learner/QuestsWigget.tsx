import React from "react"
import LuuqadIconChest from "../../../components/icons/LuuqadIconChest"
import LuuqadIconGlobal from "../../../components/icons/LuuqadIconGlobal"
import Link from "next/link"

type Props = {}

const QuestsWigget = (props: Props) => {
  return (
    <div>
      <div className='unit-score-Quests c-max-md:hidden w-[366px] min-h-[150px] border border-gray-200 rounded-2xl p-5 '>
        <div className='flex items-center mb-6 justify-between '>
          <h2 className='unit-Quests-h2 text-2xl  '>Daily Quests</h2>
          <Link href={"#"}>VIEW ALL</Link>
        </div>
        <div className='info-icon-wrapper grid  grid-cols-[80px_minmax(25%,_1fr)_0px] items-center   '>
          <LuuqadIconGlobal width={30} />
          <div className='unit-score-earn'>
            <p className='unit-earn-p text-[17px]  my-1 '>Earn 10 XP</p>
            <div className='unit-earn-progressbar flex items-center justify-between'>
              <div className='unit-progressbar bg-slate-100 w-[207px] rounded-2 text-center '>
                <span>0/10</span>
              </div>
              <LuuqadIconChest width={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestsWigget
