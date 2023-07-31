import { SideBar, Lessons } from "@/components"

const Learn = () => {
  return (
    <div className=" flex flex-row p-20 c-xl:p-5 space-18">
      <div className="pr-1 border-r-2 border-blue-100">
        <SideBar />
      </div>
      <div className="flex-grow pl-5">
        <Lessons />
      </div>
    </div>
  )
}

export default Learn
