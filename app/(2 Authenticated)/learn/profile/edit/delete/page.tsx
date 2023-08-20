"use client"
import type { NextPage } from "next"
import { BottomBar } from "@/components/learn/BottomBar"
import { LeftBar } from "@/components/learn/LeftBar"
import { RightBar } from "@/components/learn/RightBar"
import { signOut } from "next-auth/react"
import { useDeleteMyAccountMutation } from "@store/slices/UserSlice"
import { toast } from "react-toastify"
import Link from "next/link"

const DeleteProfile: NextPage = () => {
  const [deleteMyAccount] = useDeleteMyAccountMutation()

  const onDeleteAccount = async () => {
    try {
      const { data }: any = await deleteMyAccount()
      if (data) {
        toast.success("Account deleted successfully")
        signOut()
      }
    } catch (error) {
      toast.error("Something went wrong")
    }
  }

  return (
    <div>
      <LeftBar selectedTab={null} />
      <BottomBar selectedTab={null} />
      <div className='mx-auto flex flex-row gap-5 py-20 px-4 sm:py-10 md:pl-28 lg:pl-72'>
        <div className='flex w-full mt-32 max-w-xl flex-col gap-8 px-8'>
          <p className='text-2xl font-bold text-center'>
            Are you sure you want to delete your account?
          </p>
          <div className='flex flex-col items-center justify-between gap-2 sm:flex-row sm:justify-center'>
            <Link
              href='/learn/profile'
              className='rounded-2xl w-60 border-b-4 border-green-600 bg-green-500 py-3 text-center font-bold uppercase text-white transition hover:brightness-110 disabled:border-b-0 disabled:bg-gray-200 disabled:text-gray-400 disabled:hover:brightness-100'>
              Nevermind
            </Link>
            <button
              onClick={onDeleteAccount}
              className='rounded-2xl w-60 border-b-4 border-red-600 bg-red-500 py-3 font-bold uppercase text-white transition hover:brightness-110 disabled:border-b-0 disabled:bg-gray-200 disabled:text-gray-400 disabled:hover:brightness-100'>
              Delete account
            </button>
          </div>
        </div>
        <RightBar />
      </div>
    </div>
  )
}

export default DeleteProfile
