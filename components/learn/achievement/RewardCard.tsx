type Props = {
  reward: string
  tips: string
  level: number
  min: number
  max: number
  reach: number
  range: number
}

const RewardCard = (props: Props) => {
  // Formula --> value is  Math.floor((props?.max / props.reach) * props.range)

  return (
    <div className='achievement-reward-container flex gap-4 p-5'>
      <div
        className='achievement-reward bg-no-repeat relative min-w-[73px] min-h-[90px] '
        style={{
          backgroundImage: `url("/images/achievement/${props?.reward}.svg")`,
        }}>
        <span className=' level w-max text-xs text-white absolute bottom-0 translateX(-50%) translateY(-50%) -translate-x-1/2 -translate-y-1/2 left-[50%]'>
          LEVEL {props?.level}
        </span>
      </div>
      {props?.reward ? (
        <div className='reward-container w-full grid '>
          {/* Reward Header Title Start */}
          <div className='reward-header flex justify-between'>
            <h3 className='reward-title font-bold'>
              {props?.reward
                ?.charAt(0)
                .toUpperCase()
                .concat(props?.reward?.slice(1))}
            </h3>
            <div className='reward-reach text-slate-400'>
              {props.range} / {props.reach}
            </div>
          </div>
          {/* Reward Header Title End */}

          {/* Reward ProgressBar Range Start */}
          <div className='reward-range'>
            <div
              className='progress-bar overflow-hidden  '
              role={"progressbar"}
              aria-valuenow={Math.floor(
                (props?.max / props.reach) * props.range,
              )}
              aria-valuemin={props?.min}
              aria-valuemax={props?.max}
              style={{
                width: "100%",
                height: "15px",
                backgroundColor: "rgb(239, 239, 239)",
              }}>
              <div
                className='rounded-full relative '
                style={{
                  width: `${Math.floor(
                    (props?.max / props.reach) * props.range,
                  )}%`,
                  height: "100%",
                  backgroundColor: "rgb(250 204 21)",
                }}>
                <div
                  className='absolute top-[3px] left-0 right-0 rounded-full'
                  style={{
                    marginInline: "10px",
                    height: "0.4rem",
                    backgroundColor: "rgb(255, 211, 51)",
                  }}></div>
              </div>
            </div>
          </div>
          {/* Reward ProgressBar Range End */}

          <div className='reward-tips'>{props?.tips}</div>
        </div>
      ) : (
        "loading rewardCard"
      )}
    </div>
  )
}

export default RewardCard
