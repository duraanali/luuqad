import {
  EmptyFireSvg,
  FireSvg,
  LightningProgressSvg,
  TreasureProgressSvg,
} from "@/components/SVGs"
import { useGetPointsQuery } from "@/store/slices/PointSlice"
import languages from "@/utils/languages"
import { Flag } from "./Flag"
import ProfileAddFriends from "./profile/ProfileAddFriends"
import ProfileFriendFollow from "./profile/ProfileFriendFollow"

export const RightBar = () => {
  const { data: points } = useGetPointsQuery<any>()
  const totalPoints = points?.points.reduce(
    (accumulator: any, currentValue: any) => {
      return accumulator + currentValue.points
    },
    0,
  )
  const streak = totalPoints || 0
  const language = languages.filter((lang) => lang.code === "en")[0]

  return (
    <>
      <aside className='main-middle-right sticky top-0 hidden w-[368px] flex-col gap-6 self-start md:flex'>
        <article className='flex justify-between gap-4'>
          <div
            className='relative flex cursor-default items-center gap-2 rounded-xl p-3 font-bold uppercase text-gray-500 hover:bg-gray-100'
            role='button'
            tabIndex={0}>
            <Flag language={language} width={45} />
            <div>{language.name}</div>
          </div>
          <span className='relative flex cursor-pointer items-center gap-2 rounded-xl p-3 font-bold text-orange-500 hover:bg-gray-100'>
            <div>{streak > 0 ? <FireSvg /> : <EmptyFireSvg />}</div>
            <span className={streak > 0 ? "text-orange-500" : "text-gray-300"}>
              {streak}
            </span>
          </span>
          {/* <span
            className='relative flex items-center gap-2 rounded-xl p-3 font-bold text-red-500 hover:bg-gray-100'
            role='button'
            tabIndex={0}>
            {lingots > 0 ? <GemSvg /> : <EmptyGemSvg />}
            <span className={lingots > 0 ? "text-red-500" : "text-gray-300"}>
              {lingots}
            </span>
            <div
              className='absolute top-full z-10 flex w-72 items-center gap-3 rounded-2xl border-2 border-gray-300 bg-white p-5'
              style={{
                left: "calc(50% - 150px)",
                display: "none",
              }}></div>
          </span> */}
        </article>
        <ProfileFriendFollow />
        <ProfileAddFriends />
        <DailyQuestsSection />
        {/* <XpProgressSection /> */}
      </aside>
    </>
  )
}

const DailyQuestsSection = () => {
  const { data: points } = useGetPointsQuery<any>()

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

  const xpToday = calculateTotalPoints() ? calculateTotalPoints() : 0
  const goalXp = 50

  const adjustedXpToday = xpToday > goalXp ? goalXp : xpToday

  return (
    <article className='flex flex-col gap-5 rounded-2xl border-2 border-gray-200 p-6 font-bold text-gray-700'>
      <h2 className='text-xl'>Daily Quests</h2>
      <div className='flex items-center gap-4'>
        <LightningProgressSvg />
        <div className='flex flex-col gap-2'>
          <h3>Earn {goalXp} XP</h3>
          <div className='flex items-center'>
            <div className='relative h-5 w-52 rounded-l-full bg-gray-200'>
              <div
                className={"relative h-full rounded-l-full bg-yellow-400 px-2"}
                style={{
                  width: `${Math.min(1, adjustedXpToday / goalXp) * 100}%`,
                }}>
                <div className='absolute top-1 left-2 right-0 h-2 rounded-l-full bg-yellow-300'></div>
              </div>
              <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-sm text-gray-400'>
                {adjustedXpToday} / {goalXp}
              </div>
            </div>
            <TreasureProgressSvg />
          </div>
        </div>
      </div>
    </article>
  )
}

// const TreasureClosedSvg = (props: ComponentProps<"svg">) => {
//   return (
//     <svg width='76px' height='76px' viewBox='0 0 76 76' {...props}>
//       <defs>
//         <path
//           d='M3.86139252,0 L68.6938776,0 C70.8264639,0 72.555269,1.71104633 72.555269,3.82172455 L72.555269,37.605593 C72.555269,39.7162712 70.8264639,41.4273175 68.6938776,41.4273175 L3.86139252,41.4273175 C1.72880408,41.4273175 0,39.7162712 0,37.605593 L0,3.82172455 C0,1.71104633 1.72880408,0 3.86139252,0 Z'
//           id='path-1'
//         />
//         <polygon
//           id='path-3'
//           points='0 0 52.7674684 0 52.7674684 2.18038513 0 2.18038513'
//         />
//         <polygon
//           id='path-5'
//           points='0 0 52.7674684 0 52.7674684 2.18038513 0 2.18038513'
//         />
//         <path
//           d='M73.262529,75.2232871 L2.59070681,75.2232871 C1.15989931,75.2232871 0,74.0730206 0,72.6540957 L0,2.56919141 C0,1.15026218 1.15989931,0 2.59070681,0 L12.7998048,0 C14.2306167,0 15.3905116,1.15026218 15.3905116,2.56919141 L15.3905116,35.9763547 L60.4627242,35.9763547 L60.4627242,2.56919141 C60.4627242,1.15026218 61.6226191,0 63.053431,0 L73.262529,0 C74.6933409,0 75.8532358,1.15026218 75.8532358,2.56919141 L75.8532358,72.6540957 C75.8532358,74.0730206 74.6933409,75.2232871 73.262529,75.2232871 Z'
//           id='path-7'
//         />
//         <polygon
//           id='path-9'
//           points='0 0 45.0722126 0 45.0722126 17.4430811 0 17.4430811'
//         />
//         <polygon
//           id='path-11'
//           points='0.0272741852 0.350693145 46.8210364 0.350693145 46.8210364 2.91988456 0.0272741852 2.91988456'
//         />
//         <polygon
//           id='path-13'
//           points='0 46.28539 0 15.2626959 15.3905116 0 15.3905116 29.4351993 16.9913007 29.4351993'
//         />
//         <path
//           d='M73.7539135,0 L73.7539135,44.0674805 L55.1790391,62.4880958 L55.1782476,62.4873152 L52.2295245,65.411554 L0.491384548,65.411554 C0.326577453,65.411554 0.165365142,65.3962929 0.00910637696,65.3671181 L13.2911894,52.1953457 L13.2911894,57.780206 L58.3634019,57.780206 L58.3634019,40.337125 L29.3189671,40.337125 L37.9821432,31.7458951 L39.8621491,33.6102989 L47.3701794,26.1646216 L58.3634019,26.1646216 L58.3634019,15.2626959 L73.7539135,0 Z'
//           id='path-15'
//         />
//         <path
//           d='M2.59070681,0 L18.2964161,0 C19.727228,0 20.8871229,1.15026218 20.8871229,2.56919141 L20.8871229,22.5052376 C20.8871229,23.9241669 19.727228,25.074429 18.2964161,25.074429 L2.59070681,25.074429 C1.15989491,25.074429 0,23.9241669 0,22.5052376 L0,2.56919141 C0,1.15026218 1.15989491,0 2.59070681,0 Z'
//           id='path-17'
//         />
//         <path
//           d='M4.94695016,10.175127 C2.21482654,10.175127 0,7.89735495 0,5.08756894 C0,2.27778294 2.21482654,0 4.94695016,0 C7.67907378,0 9.89390032,2.27778294 9.89390032,5.08756894 C9.89390032,7.89735495 7.67907378,10.175127 4.94695016,10.175127 Z'
//           id='path-19'
//         />
//         <path
//           d='M7.43585973,2.64571203 L9.10020065,7.34990385 C9.44121041,8.313754 8.92976172,9.36925664 7.95783992,9.70743438 C7.75942325,9.77646537 7.55066195,9.8117331 7.34038359,9.8117331 L2.46067897,9.8117331 C1.43066898,9.8117331 0.595678759,8.98367734 0.595678759,7.96223231 C0.595678759,7.75370028 0.631241834,7.54667271 0.700861912,7.34990385 L2.36520283,2.64571203 C2.85647896,1.25711195 4.38985761,0.526388579 5.79007537,1.01359564 C6.56015061,1.28153226 7.1656793,1.88203213 7.43585973,2.64571203 Z'
//           id='path-21'
//         />
//         <path
//           d='M2.74830565,5.45096283 C1.23045821,5.45096283 0,4.2307212 0,2.72548142 C0,1.22024164 1.23045821,0 2.74830565,0 C4.26615308,0 5.49661129,1.22024164 5.49661129,2.72548142 C5.49661129,4.2307212 4.26615308,5.45096283 2.74830565,5.45096283 Z'
//           id='path-23'
//         />
//         <path
//           d='M2.74830565,5.45096283 C1.23045821,5.45096283 0,4.23072338 0,2.72548142 C0,1.22023946 1.23045821,0 2.74830565,0 C4.26615308,0 5.49661129,1.22023946 5.49661129,2.72548142 C5.49661129,4.23072338 4.26615308,5.45096283 2.74830565,5.45096283 Z'
//           id='path-25'
//         />
//         <path
//           d='M2.74830565,5.45096283 C1.23046041,5.45096283 0,4.23072338 0,2.72548142 C0,1.22023946 1.23046041,0 2.74830565,0 C4.26615088,0 5.49661129,1.22023946 5.49661129,2.72548142 C5.49661129,4.23072338 4.26615088,5.45096283 2.74830565,5.45096283 Z'
//           id='path-27'
//         />
//         <path
//           d='M2.74830565,5.45096283 C1.23046041,5.45096283 0,4.2307212 0,2.72548142 C0,1.22024164 1.23046041,0 2.74830565,0 C4.26615088,0 5.49661129,1.22024164 5.49661129,2.72548142 C5.49661129,4.2307212 4.26615088,5.45096283 2.74830565,5.45096283 Z'
//           id='path-29'
//         />
//         <path
//           d='M2.74830565,5.45096283 C1.23045821,5.45096283 0,4.2307212 0,2.72548142 C0,1.22024164 1.23045821,0 2.74830565,0 C4.26615308,0 5.49661129,1.22024164 5.49661129,2.72548142 C5.49661129,4.2307212 4.26615308,5.45096283 2.74830565,5.45096283 Z'
//           id='path-31'
//         />
//         <path
//           d='M2.74830565,5.45096283 C1.23046041,5.45096283 0,4.2307212 0,2.72548142 C0,1.22024164 1.23046041,0 2.74830565,0 C4.26615088,0 5.49661129,1.22024164 5.49661129,2.72548142 C5.49661129,4.2307212 4.26615088,5.45096283 2.74830565,5.45096283 Z'
//           id='path-33'
//         />
//       </defs>
//       <g
//         id='PANEL-CHEST'
//         stroke='none'
//         strokeWidth='1'
//         fill='none'
//         fillRule='evenodd'>
//         <g
//           id='Group-52-Copy'
//           transform='translate(38.500000, 38.000000) rotate(-360.000000) translate(-38.500000, -38.000000)'>
//           <g id='Group-3' transform='translate(1.099322, 4.360770)'>
//             <mask id='mask-2' fill='white'>
//               <use xlinkHref='#path-1' />
//             </mask>
//             <g id='Clip-2' />
//             <polygon
//               id='Fill-1'
//               fill='#AA572A'
//               mask='url(#mask-2)'
//               points='-5.49661129 46.8782804 78.0518803 46.8782804 78.0518803 -5.45096283 -5.49661129 -5.45096283'
//             />
//           </g>
//           <g id='Group-6' transform='translate(10.993223, 9.811733)'>
//             <mask id='mask-4' fill='white'>
//               <use xlinkHref='#path-3' />
//             </mask>
//             <g id='Clip-5' />
//             <polygon
//               id='Fill-4'
//               fill='#904821'
//               mask='url(#mask-4)'
//               points='-5.49661129 7.63134797 58.2640797 7.63134797 58.2640797 -5.45096283 -5.49661129 -5.45096283'
//             />
//           </g>
//           <g id='Group-9' transform='translate(10.993223, 25.074429)'>
//             <mask id='mask-6' fill='white'>
//               <use xlinkHref='#path-5' />
//             </mask>
//             <g id='Clip-8' />
//             <polygon
//               id='Fill-7'
//               fill='#904821'
//               mask='url(#mask-6)'
//               points='-5.49661129 7.63134797 58.2640797 7.63134797 58.2640797 -5.45096283 -5.49661129 -5.45096283'
//             />
//           </g>
//           <g id='Group-12'>
//             <mask id='mask-8' fill='white'>
//               <use xlinkHref='#path-7' />
//             </mask>
//             <g id='Clip-11' />
//             <polygon
//               id='Fill-10'
//               fill='#FFBC00'
//               mask='url(#mask-8)'
//               points='-5.49661129 80.6742499 81.3498471 80.6742499 81.3498471 -5.45096283 -5.49661129 -5.45096283'
//             />
//           </g>
//           <g id='Group-15' transform='translate(15.390512, 50.148858)'>
//             <mask id='mask-10' fill='white'>
//               <use xlinkHref='#path-9' />
//             </mask>
//             <g id='Clip-14' />
//             <polygon
//               id='Fill-13'
//               fill='#AA572A'
//               mask='url(#mask-10)'
//               points='-5.49661129 22.8940439 50.5688239 22.8940439 50.5688239 -5.45096283 -5.49661129 -5.45096283'
//             />
//           </g>
//           <g id='Group-18' transform='translate(15.390512, 59.960591)'>
//             <mask id='mask-12' fill='white'>
//               <use xlinkHref='#path-11' />
//             </mask>
//             <g id='Clip-17' />
//             <polygon
//               id='Fill-16'
//               fill='#904821'
//               mask='url(#mask-12)'
//               points='-5.4693426 8.37084739 52.3176422 8.37084739 52.3176422 -5.10026969 -5.4693426 -5.10026969'
//             />
//           </g>
//           <g id='Group-21' transform='translate(0.000000, 6.541155)'>
//             <mask id='mask-14' fill='white'>
//               <use xlinkHref='#path-13' />
//             </mask>
//             <g id='Clip-20' />
//             <polygon
//               id='Fill-19'
//               fill='#FFD300'
//               mask='url(#mask-14)'
//               points='-5.49661129 51.7363529 22.487912 51.7363529 22.487912 -5.45096283 -5.49661129 -5.45096283'
//             />
//           </g>
//           <g id='Group-24' transform='translate(2.099322, 9.811733)'>
//             <mask id='mask-16' fill='white'>
//               <use xlinkHref='#path-15' />
//             </mask>
//             <g id='Clip-23' />
//             <polygon
//               id='Fill-22'
//               fill='#FFD300'
//               mask='url(#mask-16)'
//               points='-5.48750491 70.8625168 79.2505303 70.8625168 79.2505303 -5.45096283 -5.48750491 -5.45096283'
//             />
//           </g>
//           <g id='Group-27' transform='translate(27.483056, 31.615584)'>
//             <mask id='mask-18' fill='white'>
//               <use xlinkHref='#path-17' />
//             </mask>
//             <g id='Clip-26' />
//             <polygon
//               id='Fill-25'
//               fill='#FFBC00'
//               mask='url(#mask-18)'
//               points='-5.49661129 30.5253919 26.3837342 30.5253919 26.3837342 -5.45096283 -5.49661129 -5.45096283'
//             />
//           </g>
//           <g id='Group-30' transform='translate(32.979668, 35.976355)'>
//             <mask id='mask-20' fill='white'>
//               <use xlinkHref='#path-19' />
//             </mask>
//             <g id='Clip-29' />
//             <polygon
//               id='Fill-28'
//               fill='#DB8500'
//               mask='url(#mask-20)'
//               points='-5.49661129 15.6260898 15.3905116 15.6260898 15.3905116 -5.45096283 -5.49661129 -5.45096283'
//             />
//           </g>
//           <g id='Group-33' transform='translate(32.979668, 41.427318)'>
//             <mask id='mask-22' fill='white'>
//               <use xlinkHref='#path-21' />
//             </mask>
//             <g id='Clip-32' />
//             <polygon
//               id='Fill-31'
//               fill='#DB8500'
//               mask='url(#mask-22)'
//               points='-4.90093253 15.2626959 14.7025008 15.2626959 14.7025008 -4.58836977 -4.90093253 -4.58836977'
//             />
//           </g>
//           <g id='Group-36' transform='translate(4.397289, 39.246932)'>
//             <mask id='mask-24' fill='white'>
//               <use xlinkHref='#path-23' />
//             </mask>
//             <g id='Clip-35' />
//             <polygon
//               id='Fill-34'
//               fill='#F8A201'
//               mask='url(#mask-24)'
//               points='-5.49661129 10.9019257 10.9932226 10.9019257 10.9932226 -5.45096283 -5.49661129 -5.45096283'
//             />
//           </g>
//           <g id='Group-39' transform='translate(4.397289, 64.321361)'>
//             <mask id='mask-26' fill='white'>
//               <use xlinkHref='#path-25' />
//             </mask>
//             <g id='Clip-38' />
//             <polygon
//               id='Fill-37'
//               fill='#F8A201'
//               mask='url(#mask-26)'
//               points='-5.49661129 10.9019257 10.9932226 10.9019257 10.9932226 -5.45096283 -5.49661129 -5.45096283'
//             />
//           </g>
//           <g id='Group-42' transform='translate(65.959335, 64.321361)'>
//             <mask id='mask-28' fill='white'>
//               <use xlinkHref='#path-27' />
//             </mask>
//             <g id='Clip-41' />
//             <polygon
//               id='Fill-40'
//               fill='#F8A201'
//               mask='url(#mask-28)'
//               points='-5.49661129 10.9019257 10.9932226 10.9019257 10.9932226 -5.45096283 -5.49661129 -5.45096283'
//             />
//           </g>
//           <g id='Group-45' transform='translate(65.959335, 39.246932)'>
//             <mask id='mask-30' fill='white'>
//               <use xlinkHref='#path-29' />
//             </mask>
//             <g id='Clip-44' />
//             <polygon
//               id='Fill-43'
//               fill='#F8A201'
//               mask='url(#mask-30)'
//               points='-5.49661129 10.9019257 10.9932226 10.9019257 10.9932226 -5.45096283 -5.49661129 -5.45096283'
//             />
//           </g>
//           <g id='Group-48' transform='translate(4.397289, 16.352888)'>
//             <mask id='mask-32' fill='white'>
//               <use xlinkHref='#path-31' />
//             </mask>
//             <g id='Clip-47' />
//             <polygon
//               id='Fill-46'
//               fill='#F8A201'
//               mask='url(#mask-32)'
//               points='-5.49661129 10.9019257 10.9932226 10.9019257 10.9932226 -5.45096283 -5.49661129 -5.45096283'
//             />
//           </g>
//           <g id='Group-51' transform='translate(65.959335, 16.352888)'>
//             <mask id='mask-34' fill='white'>
//               <use xlinkHref='#path-33' />
//             </mask>
//             <g id='Clip-50' />
//             <polygon
//               id='Fill-49'
//               fill='#F8A201'
//               mask='url(#mask-34)'
//               points='-5.49661129 10.9019257 10.9932226 10.9019257 10.9932226 -5.45096283 -5.49661129 -5.45096283'
//             />
//           </g>
//         </g>
//       </g>
//     </svg>
//   )
// }
