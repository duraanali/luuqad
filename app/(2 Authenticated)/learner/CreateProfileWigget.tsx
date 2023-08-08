import Link from "next/link"
import React from "react"

type Props = {}

const CreateProfileWigget = (props: Props) => {
  return (
    <div>
      <div className='unit-score-Create-Profile c-max-md:hidden w-[366px] min-h-[150px] border border-gray-200 rounded-2xl p-5 '>
        <div className='unit-score-create-sign mb-6  '>
          <h2 className='unit-Create-Profile-h2 text-xl '>
            Create a profile to save your progress!
          </h2>
        </div>
        <div className='unit-score-profile-btn flex flex-col text-center '>
          <button>
            <Link href={"#"}> CREATE A PROFILE</Link>
          </button>
          <button>
            <Link href={"#"}>SIGN IN</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateProfileWigget
