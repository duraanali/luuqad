import Image from "next/image"
import { useParams } from "next/navigation"
import { useState } from "react"

type Props = {}

const ProfileFriendFollow = (props: Props) => {
  const { locale } = useParams()

  let profileFollowing: string = "Following"
  let profileFollowers: string = "Followers"
  let ProfileFollowersBio: string = "No followers yet"
  let profileFollowingBio: string =
    "Learning is more fun and effective when you connect with others."

  if (locale === "so") {
    profileFollowing = "Daba Gal"
    profileFollowers = "Raacayaasha"
    ProfileFollowersBio = "Wali ma jiro cid raacsan"
    profileFollowingBio =
      "Waxbarashadu aad bay u xiiso badan tahay oo waxtar u leedahay markaad dadka kale la xiriirto."
  }
  const [activeFollowing, setActiveFollowing] = useState<string>("flex")

  const [activeBorderFollowing, setActiveBorderFollowing] = useState<string>(
    "text-sky-500 border-b-2 border-b-sky-500 text-center ",
  )

  const [activeFollowers, setActiveFollowers] = useState<string>("hidden")

  const [activeBorderFollowers, setActiveBorderFollowers] = useState<string>(
    " text-slate-500 border-b-2  text-center",
  )

  const clickHandleFollow = (event: React.MouseEvent<HTMLElement>) => {
    const checkFollow = event.currentTarget.dataset.follow

    if (checkFollow === "following") {
      setActiveFollowing("flex ")
      setActiveBorderFollowing(
        "  text-sky-500 border-b-2 border-b-sky-500 text-center ",
      )
      setActiveBorderFollowers("text-slate-500")
      setActiveFollowers("hidden")
    }

    if (checkFollow === "followers") {
      setActiveFollowing("hidden")
      setActiveFollowers("flex ")
      setActiveBorderFollowers(
        "  text-sky-500 border-b-2 border-b-sky-500 text-center ",
      )
      setActiveBorderFollowing("text-slate-500")
    }
  }
  return (
    <div>
      <div className=''>
        <div></div>
        <div className='border-2 border-slate-200 rounded-2xl'>
          <ul className='flex justify-center w-full text-center border-b-2 border-sky-500 relative font-bold uppercase tracking-wide'>
            <li
              onClick={clickHandleFollow}
              data-follow='following'
              className={`'${activeFollowing} flex-1 pt-4 text-slate-500 cursor-pointer relative align-middle'`}>
              <span
                className={` ${activeBorderFollowing} ' block text-base first:pl-[10px] pb-3 border-b-2 bg-transparent mb-[-2px] text-center hover:border-b-sky-500 hover:text-sky-500 '`}>
                <span data-test='friend-following-list'>
                  {profileFollowing}
                </span>
              </span>
            </li>
            <li
              onClick={clickHandleFollow}
              data-follow='followers'
              className={`'${activeFollowers} ' flex-1 pt-4 cursor-pointer relative align-middle'`}>
              <span
                className={` ${activeBorderFollowers} ' block text-base first:pl-[10px] pb-3 border-b-2 bg-transparent mb-[-2px] text-center hover:border-b-sky-500 hover:text-sky-500   '`}>
                <span data-test='friend-followers-list'>
                  {profileFollowers}
                </span>
              </span>
            </li>
          </ul>
          <div
            className={`${activeFollowing} " content items-center text-[18px] flex-col p-[40px_30px_30px] "`}>
            <Image
              priority
              className=' profile-avatar object-contain  max-w-none c-max-md:w-[77px] '
              src={"/svg/follow.svg"}
              width={304}
              height={141}
              alt='Follow Friends'
            />
            <div className='text-center text-slate-500'>
              {profileFollowingBio}
            </div>
          </div>
          <div
            className={` ${activeFollowers} '  items-center flex-col p-[40px_30px_30px] '`}>
            <div className='text-center text-slate-500'>
              {ProfileFollowersBio}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileFriendFollow
