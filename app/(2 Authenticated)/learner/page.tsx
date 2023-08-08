import TimeLine from "./TimeLine"
import Wigget from "./Wigget"

type Props = {}

const page = (props: Props) => {
  return (
    <div className=' unit-middle-container-learn  c-max-md:flex-col-reverse c-max-md:pl-[0px]  flex gap-0 justify-center '>
      <TimeLine />

      <Wigget />
    </div>
  )
}

export default page
