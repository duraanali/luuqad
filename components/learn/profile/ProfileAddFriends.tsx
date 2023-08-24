import LuuqadIconRightchevron from "@/components/icons/LuuqadIconRightchevron"
import LuuqadIconWarning from "@/components/icons/LuuqadIconWarning"
import Image from "next/image"
import { useParams, usePathname } from "next/navigation"
import { SetStateAction } from "react"

type Props = {
  SetModelIsOpen: React.Dispatch<SetStateAction<boolean>>
}

const ProfileAddFriends = (props: Props) => {
  // i must use pathname to check if i am in profile page ...
  // other wise it will throw error becuase ProfileAddFriends Component is every where ...
  // I only Allowed the functionality of invite friend works when you are in profile page
  const pathname = usePathname()
  const { locale } = useParams()

  const handleAddFriend = (event: React.MouseEvent<HTMLElement>) => {
    const checkSocial = event.currentTarget.dataset.social
    if (
      (checkSocial === "social-panel-invite-friends" &&
        pathname === "/learn/profile") ||
      pathname === "/so/learn/profile"
    ) {
      props?.SetModelIsOpen(true)
    }
  }
  const isTrue = true

  let profileAddFriendTitle: string = "Add Friends "
  let ProfileFindfriends: string = "Find friends"
  let ProfileInvitefriends: string = "Invite Friends"
  let profileConnectFacebook: string = "Connect to Facebook"

  if (locale === "so") {
    profileAddFriendTitle = "Kudar Asxaabta"
    ProfileFindfriends = "Raadi Saaxiibo"
    ProfileInvitefriends = "Casuum Asxaabta"
    profileConnectFacebook = "Ku Xidhnow Facebook-ga"
  }

  return (
    <div className='border-2 rounded-2xl'>
      <div className='text-xl font-bold p-[20px_20px_16px] leading-7 '>
        {profileAddFriendTitle}
      </div>
      <div
        onClick={handleAddFriend}
        className='flex items-center cursor-pointer p-[6px_16px]'
        data-social='social-panel-find-friends'>
        <Image
          width={52}
          height={52}
          alt='find friends'
          className='mr-5'
          src='/svg/search.svg'
        />
        <div className='flex-push'>
          <div className='text-base font-bold'>{ProfileFindfriends}</div>
        </div>

        <LuuqadIconRightchevron width={10} />
      </div>
      <div
        onClick={handleAddFriend}
        className='flex items-center cursor-pointer p-[6px_16px]'
        data-social='social-panel-invite-friends'>
        <Image
          width={52}
          height={52}
          alt='invite friend'
          className='mr-5'
          src='/svg/invitefriend.svg'
        />
        <div className='flex-push'>
          <div className='text-base font-bold'>{ProfileInvitefriends}</div>
        </div>
        <LuuqadIconRightchevron width={10} />
      </div>
      <div
        onClick={handleAddFriend}
        className='flex items-center cursor-pointer p-[6px_16px]'
        data-social='social-panel-facebook'>
        <Image
          width={52}
          height={52}
          alt='connect facebook'
          className='mr-5'
          src='/svg/connectfacebook.svg'
        />
        <div className='flex-push'>
          <div className='text-base font-bold '>{profileConnectFacebook}</div>
        </div>
        {isTrue ? (
          <LuuqadIconRightchevron width={10} />
        ) : (
          <LuuqadIconWarning width={28} />
        )}
      </div>
    </div>
  )
}

export default ProfileAddFriends
