import React from 'react'
import LuuqadIconUK from '../../../components/icons/LuuqadIconUK'
import Link from 'next/link'
import LuuqadIconHeart from '../../../components/icons/LuuqadIconHeart'
import LuuqadIconGems from '../../../components/icons/LuuqadIconGems'
import LuuqadIconFire from '../../../components/icons/LuuqadIconFire'

type Props = {}

const ScoreInfoWigget = (props: Props) => {
  return (
    <div>
        {/* Start Score-Each-Icon */}
        <div className="score-info-wigget flex flex-row gap-4 items-center ">

        <div className="score-icon-courses  ">
                <Link href={'#'} >
                  <span className="score-icon_text flex items-center gap-2  p-2 c-min-md:hover:bg-zinc-100 rounded-xl">
                    <LuuqadIconUK width={30} />
                    <span className="  hidden text-sm text-gray-500 font-bold  tracking-widest   " >10</span>
                  </span>
                </Link>
              </div>
              {/* End Score-Each-Icon */}
              {/* Start Score-Each-Icon */}
              <div className="score-icon-fire   ">
                <Link href={'#'} >
                  <span className="score-icon_text flex items-center gap-2 p-2 c-min-md:hover:bg-zinc-100 rounded-xl ">
                    <LuuqadIconFire width={30} />
                    <span className=" text-sm text-gray-500 font-bold  tracking-widest  " >1000</span>
                  </span>
                </Link>
              </div>
              {/* End Score-Each-Icon */}
              {/* Start Score-Each-Icon */}
              <div className="score-icon-fire   ">
                <Link href={'#'} >
                  <span className="score-icon_text flex items-center gap-2 p-2 c-min-md:hover:bg-zinc-100 rounded-xl ">
                    <LuuqadIconGems width={30} />
                    <span className=" text-sm text-gray-500 font-bold  tracking-widest  " >100</span>
                  </span>
                </Link>
              </div>
              {/* End Score-Each-Icon */}
              {/* Start Score-Each-Icon */}
              <div className="score-icon-fire   ">
                <Link href={'#'} >
                  <span className="score-icon_text flex items-center gap-2 p-2 c-min-md:hover:bg-zinc-100 rounded-xl ">
                    <LuuqadIconHeart width={30} />
                    <span className=" text-sm text-gray-500 font-bold  tracking-widest  " >10</span>
                  </span>
                </Link>
              </div>
              {/* End Score-Each-Icon */}
    </div>
    </div>
  )
}

export default ScoreInfoWigget