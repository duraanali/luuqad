import Image from "next/image"
import NotoV1Star from "../NotoV1Star"
import ProgressBar from "../ProgressBar"
import LuuqadIconStar from "../icons/LuuqadIconStar"
import LuuqadIconLocked from "../icons/LuuqadIconLocked"

type Props = {}
const UnitTimeLine_1 = (props: Props) => {
  return (
    <div className="unit-button-container flex flex-col items-center my-[67px] ">
      {/* btn start*/}
      <div
        className="unit-button-wrapper_1 relative top-[0.01px] left-[0px]"
        role="button"
        tabIndex={0}
      >
        <div>{/* progress goes here  */}</div>
        <button
          className="unit-button_1 min-w-[70px] min-h-[70px] w-full ease-in-out active:translate-y-2 before:content-[''] before:-z-10 before:absolute  before:h-[8px] before:top-[36px] before:bg-lime-600 before:left-[1px] before:w-[100%] active:before:bg-transparent after:content-[''] after:absolute after:bg-lime-500 after:-z-10 after:right-[-1px] after:top-[5.5px] after:bottom-0 after:w-[100%] after:h-[57px] after:rounded-[50%/50%] after:shadow-unit_btn after:shadow-lime-600  active:after:shadow-none "
          aria-label="lesson"
        >
          <div className="svg-place absolute left-9 -translate-x-2/4 -translate-y-2/4 ">
            <LuuqadIconLocked width={70} />
          </div>
        </button>
      </div>
      {/* btn end */}
      {/* btn start*/}
      <div
        className="unit-button-wrapper_2 relative top-[25px] left-[-40px]"
        role="button"
        tabIndex={0}
      >
        <button
          className="unit-button_2  min-w-[70px] min-h-[70px] w-full ease-in-out active:translate-y-2 before:content-[''] before:-z-10 before:absolute  before:h-[8px] before:top-[36px] before:bg-lime-600 before:left-[1px] before:w-[100%] active:before:bg-transparent after:content-[''] after:absolute after:bg-lime-500 after:-z-10 after:right-[-1px] after:top-[5.5px] after:bottom-0 after:w-[100%] after:h-[57px] after:rounded-[50%/50%] after:shadow-unit_btn after:shadow-lime-600  active:after:shadow-none "
          aria-label="lesson"
        >
          <div className="svg-place absolute left-9 -translate-x-2/4 -translate-y-2/4 ">
            <LuuqadIconLocked width={70} />
          </div>
        </button>
      </div>
      {/* btn end */}

      {/* btn start*/}
      <div
        className="unit-button-wrapper_3 relative top-[25px] left-[-80px]"
        role="button"
        tabIndex={0}
      >
        <button
          className="unit-button_3  w-[100px] h-[100px] "
          aria-label="lesson"
        >
          <span>
            <Image
              src={"/images/treasure.webp"}
              width={100}
              height={100}
              alt="treasure"
            />
          </span>
        </button>
      </div>
      {/* btn end */}

      {/* btn start*/}
      <div
        className="unit-button-wrapper_4 relative top-[30px] left-[-57px] "
        role="button"
        tabIndex={0}
      >
        <button
          className="unit-button_4 min-w-[70px] min-h-[70px] w-full ease-in-out active:translate-y-2 before:content-[''] before:-z-10 before:absolute  before:h-[8px] before:top-[36px] before:bg-lime-600 before:left-[1px] before:w-[100%] active:before:bg-transparent after:content-[''] after:absolute after:bg-lime-500 after:-z-10 after:right-[-1px] after:top-[5.5px] after:bottom-0 after:w-[100%] after:h-[57px] after:rounded-[50%/50%] after:shadow-unit_btn after:shadow-lime-600  active:after:shadow-none  "
          aria-label="lesson"
        >
          <div className="svg-place absolute left-9 -translate-x-2/4 -translate-y-2/4 ">
            <LuuqadIconLocked width={70} />
          </div>
        </button>
      </div>
      {/* btn end */}

      {/* btn start*/}
      <div
        className="unit-button-wrapper_5 relative top-[40px] left-[-10px]"
        role="button"
        tabIndex={0}
      >
        <button
          className="unit-button_5  min-w-[70px] min-h-[70px] w-full ease-in-out active:translate-y-2 before:content-[''] before:-z-10 before:absolute  before:h-[8px] before:top-[36px] before:bg-lime-600 before:left-[1px] before:w-[100%] active:before:bg-transparent after:content-[''] after:absolute after:bg-lime-500 after:-z-10 after:right-[-1px] after:top-[5.5px] after:bottom-0 after:w-[100%] after:h-[57px] after:rounded-[50%/50%] after:shadow-unit_btn after:shadow-lime-600  active:after:shadow-none  "
          aria-label="lesson"
        >
          <div className="svg-place absolute left-9 -translate-x-2/4 -translate-y-2/4 ">
            <LuuqadIconLocked width={70} />
          </div>
        </button>
      </div>
      {/* btn end */}
      {/* btn start*/}
      {/* <div
        className="unit-button-wrapper_6 relative top-[0.06px] left-[20px]"
        role="button"
        tabIndex={0}
      >
        <button
          className="unit-button_one  w-[4.375rem] h-[4.063rem] ease-in-out active:translate-y-2 before:content-[''] before:-z-10 before:absolute  before:h-[8px] before:top-[30px] before:bg-lime-600 before:left-0 before:w-[100%] active:before:bg-transparent after:content-[''] after:absolute after:bg-lime-500 after:-z-10 after:right-0 after:top-0 after:bottom-0 after:w-[100%] after:h-[57px] after:rounded-[50%/50%] after:shadow-unit_btn after:shadow-lime-600  active:after:shadow-none "
          aria-label="lesson"
        ></button>
      </div> */}
      {/* btn end */}
    </div>
  )
}

export default UnitTimeLine_1
