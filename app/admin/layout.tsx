import { SideBar } from "@/components/admin"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const callbackUrl = "/login"
  return (
    <>
      <h4 className='text-3xl font-bold text-center'>Welcome To Admin Area</h4>
      <p className='text-center'>
        I know this area is not styled well, but I will get to it when we finish
        the project!
      </p>
      <div className=' flex flex-row p-20 c-xl:p-5 space-18 bg-sky-100'>
        <div className='pr-1 border-r-2 border-blue-100'>
          <SideBar callbackUrl={callbackUrl} />
        </div>
        <div className='flex-grow pl-5'>{children}</div>
      </div>
    </>
  )
}
