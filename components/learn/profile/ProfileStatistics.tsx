import LuuqadIconFire from "@/components/icons/LuuqadIconFire"
import LuuqadIconLightning from "@/components/icons/LuuqadIconLightning"

type Props = {
  points: any
}

const ProfileStatistics = ({ points }: Props) => {
  const totalPoints = points?.points.reduce(
    (accumulator: any, currentValue: any) => {
      return accumulator + currentValue.points
    },
    0,
  )

  const calculateTotalPoints = () => {
    const currentDate = new Date().toISOString().split("T")[0] // Get current date in 'YYYY-MM-DD' format
    const currentDayData = points?.points.filter((entry: any) =>
      entry.created_at.startsWith(currentDate),
    )
    const totalPoints = currentDayData?.reduce(
      (total: any, entry: any) => total + entry.points,
      0,
    )
    return totalPoints
  }

  return (
    <div className='statistics-container text-gray-500 '>
      <h2 className='statistics-title text-2xl text-gray-800 font-bold mb-3 '>
        Statistics
      </h2>
      <div className='statistics-score-wrapper grid grid-cols-2 gap-3  '>
        <div className='statistics-score flex justify-evenly items-start gap-3 border rounded-2 border-gray-200 py-4 px-6 '>
          <span>
            <LuuqadIconFire width={22} />
          </span>
          <div className='statistics-day-streak-wrapper flex-push overflow-hidden'>
            <span className='staticstics-number text-gray-400 text-xl font-bold'>
              {calculateTotalPoints()}
            </span>
            <div className='staticstics-text'>Day Streak</div>
          </div>
        </div>
        {/* End statistics-score */}
        <div className='statistics-score flex justify-evenly items-start gap-3 border rounded-2 border-gray-200 py-4 px-6'>
          <span>
            <LuuqadIconLightning width={22} />
          </span>
          <div className='statistics-total-xp-wrapper flex-push overflow-hidden'>
            <span className='staticstics-number text-gray-400 text-xl font-bold'>
              {totalPoints}
            </span>
            <div className='staticstics-text'>Total XP</div>
          </div>
        </div>
        {/* End statistics-score */}
        {/* <div className='statistics-score flex justify-evenly items-start gap-3 border rounded-2 border-gray-200 py-4 px-6'>
          <span>
            <BronzeLeagueSvg />
          </span>
          <div className='statistics-current-league-wrapper flex-push overflow-hidden '>
            <span className='staticstics-number text-gray-400 text-xl font-bold'>
            Bronze
            </span>
            <div className='staticstics-text flex gap-1 '>
              <span className='hidden c-min-sm:flex'>Current</span>
              <span>League</span>
            </div>
          </div>
        </div> */}
        {/* End statistics-score */}
        {/* <div className='statistics-score flex justify-evenly items-start gap-3 border rounded-2 border-gray-200 py-4 px-6'>
          <span>
            <LuuqadIconTop width={22} />
          </span>
          <div className='statistics-top-finishes-wrapper flex-push overflow-hidden'>
            <span className='staticstics-number text-gray-400 text-xl font-bold'>
              0
            </span>
            <div className='staticstics-text'>Top 3 Finishes</div>
          </div>
        </div> */}
        {/* End statistics-score */}
      </div>
    </div>
  )
}

export default ProfileStatistics
