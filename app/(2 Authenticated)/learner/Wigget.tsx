import React from "react"
import ScoreInfoWigget from "./ScoreInfoWigget"
import LeaderBoardsWigget from "./LeaderBoardsWigget"
import QuestsWigget from "./QuestsWigget"
import CreateProfileWigget from "./CreateProfileWigget"

type Props = {}

const Wigget = (props: Props) => {
  return (
    <div className=" unit-Wigget-container  c-max-md:w-full c-max-md:top-0 w-96 flex items-center flex-col justify-around c-max-md:bg-lime-500 c-max-md:py-4  sticky self-start  top-6 gap-4  ">
        {/* Start Right Side Wigget */}
          {/* Start ScoreBar Wigget */}
            <ScoreInfoWigget/>
          {/* End ScoreBar Wigget */}
       
        {/* Start LeaderBoard  Wigget */}
            <LeaderBoardsWigget/>
        {/* End LeaderBoard Wigget */}

        {/* Start Quests  Wigget */}
            <QuestsWigget/>
        {/* End Quests Wigget */}
        {/* Start Create Profile  Wigget */}
            <CreateProfileWigget/>
        {/* End Create Profile Wigget */}
        {/* End Right Side Wigget */}
      </div>
    
  )
}

export default Wigget
