import Image from "next/image"
import { MutableRefObject, SetStateAction, useRef, useState } from "react"

type Props = {
  SetModelIsOpen: React.Dispatch<SetStateAction<boolean>>
}

const ProfileInviteFriendModal = (props: Props) => {
  const [copyed, SetCopyed] = useState("Copy link")
  const inPutValue = useRef() as MutableRefObject<HTMLInputElement>
  const handleModal = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>,
  ) => {
    const checkCloseBtn = event.currentTarget.dataset.close
    // referece input
    if (inPutValue) {
      // const inputLink = event?.currentTarget?.value
      const copyLink = inPutValue?.current?.value
      navigator.clipboard.writeText(copyLink)
      SetCopyed("Copied")
    }

    if (checkCloseBtn === "close-button") {
      SetCopyed("Copy link")
      props?.SetModelIsOpen(false)
    }
  }
  return (
    <div className=' absolute bg-slate-800 bg-opacity-70  z-20 right-0 left-0 top-0 bottom-0 flex justify-center items-center'>
      <div className=' relative p-8 bg-white rounded-2xl m-6  '>
        <div
          onClick={handleModal}
          data-close='close-button'
          className=' flex items-center w-[40px] h-[40px] justify-center cursor-pointer border-2 rounded-full absolute right-0 top-0 bg-white  hover:bg-slate-100 translate-x-2/4 -translate-y-1/2'>
          <Image
            alt='close modal'
            width={16}
            height={16}
            src='/svg/closeX.svg'
          />
        </div>
        <Image
          alt='owls svg invite friend'
          width={120}
          height={100}
          className=' m-[0_auto_25px]'
          src='/svg/invietEnvelope.svg'
        />
        <h2 className='text-center font-bold text-2xl m-[0_0_25px]'>
          Invite friends
        </h2>
        <p className=' text-center text-lg mb-4 mx-auto max-w-[420px]'>
          Tell your friends it’s free and fun to learn a language on Duolingo!
        </p>
        <div className=' mt-6 w-full inline-flex items-center bg-white border-2 rounded-2xl min-h-[48px] py-1 px-3 overflow-hidden'>
          <input
            onClick={(e) => handleModal(e)}
            data-invite='copylink'
            ref={inPutValue}
            className=' min-w-0 bg-none outline-none border-none shadow-none text-ellipsis flex-1 text-slate-800'
            readOnly={true}
            type='text'
            value='https://invite.luuqad.com/ABCDEFGHIJKLMNOPQRST'
          />
          <span
            onClick={handleModal}
            className=' ml-1 text-base  uppercase text-sky-500 font-bold cursor-pointer '>
            {copyed}
          </span>
        </div>
        <p className=' text-lg text-slate-500 m-[25px_0_15px]'>
          Or share on...
        </p>
        <div className=' grid grid-cols-2 gap-7'>
          <button className='relative  uppercase  h-[33px] w-full active:translate-y-[2px] active:translate-z-0 before:active:shadow-none before:content-[""] before:absolute before:shadow-border_b before:shadow-slate-200 before:border-2 before:-left-0 before:-right-0 before:-top-2 before:-bottom-2 before:rounded-2xl '>
            <span className='text-blue-500 font-bold '>Facebook</span>
          </button>
          <button className='relative  uppercase  h-[33px] w-full active:translate-y-[2px] active:translate-z-0 before:active:shadow-none before:content-[""] before:absolute before:shadow-border_b before:shadow-slate-200 before:border-2 before:-left-0 before:-right-0 before:-top-2 before:-bottom-2 before:rounded-2xl'>
            <span className=' text-sky-500 font-bold'>Twitter</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileInviteFriendModal
