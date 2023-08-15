import Link from "next/link"
import LuuqadIconBook from "../icons/LuuqadIconBook"
import UnitTimeLine_1 from "./UnitTimeLine_1"

const UnitSection_1 = () => {
  return (
    <>
      <section className=' unit-section ' data-test='skill-path-unit-1'>
        <header className=' c-max-md:rounded-none bg-lime-500 flex justify-between  px-4 shadow-inner  py-6 items-center rounded-xl overflow-hidden '>
          <div>
            <h1 className=' text-2xl text-slate-50  font-bold '>Unit 1</h1>
            <span className=' text-lg  text-slate-50 '>
              Pair letters and sounds, identify names
            </span>
          </div>

          <Link
            href={"#"}
            className=' bg-lime-500 shadow-inset h-14 px-4 text-lg text-slate-50 rounded-2xl flex items-center gap-3 active:translate-y-[2px] active:shadow-none  active:bg-lime-600 '>
            <LuuqadIconBook width={30} />
            <span className=' c-max-md:hidden '>GuideBook</span>
          </Link>
        </header>
        <div className='unit-play-ground'>
          <UnitTimeLine_1 />
        </div>
      </section>
    </>
  )
}

export default UnitSection_1
