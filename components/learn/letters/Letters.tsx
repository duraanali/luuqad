import Character from "./Character"

type Props = {}

const Letters = (props: Props) => {
  return (
    <div className=' relative grid justify-center grid-cols-4 gap-6 p-5'>
      <Character />
      <Character />
      <Character />
      <Character />
    </div>
  )
}

export default Letters
