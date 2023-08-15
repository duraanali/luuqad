import Link from "next/link"
import LuuqadIconGear from "../icons/LuuqadIconGear"

type Props = {}

const ProfileSettings = (props: Props) => {
  return (
    <div className='settings-container  hidden c-sm:flex  justify-between p-4 border-b-[2px] c-sm:p-4  '>
      <div className='settings-empty-svg'></div>
      <div className='settings-name text-xl text-gray-300 font-extrabold '>
        Profile
      </div>
      <div className='settings-gear text-gray-300 '>
        <Link href={"/learn/profile/edit"}>
          <LuuqadIconGear width={30} />
        </Link>
      </div>
    </div>
  )
}

export default ProfileSettings
