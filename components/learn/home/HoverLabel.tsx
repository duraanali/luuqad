import { useEffect, useRef, useState } from "react"

const HoverLabel = ({
  text,
  textColor,
}: {
  text: string
  textColor: `text-${string}`
}) => {
  const hoverElement = useRef<HTMLDivElement | null>(null)
  const [width, setWidth] = useState(72)

  useEffect(() => {
    setWidth(hoverElement.current?.clientWidth ?? width)
  }, [hoverElement.current?.clientWidth, width])

  return (
    <div
      className={`absolute z-10 w-max animate-bounce rounded-lg border-2 border-gray-200 bg-white py-2 px-3 font-bold uppercase ${textColor}`}
      style={{
        top: "-25%",
        left: `calc(50% - ${width / 2}px)`,
      }}
      ref={hoverElement}>
      {text}
      <div
        className='absolute h-3 w-3 rotate-45 border-b-2 border-r-2 border-gray-200 bg-white'
        style={{ left: "calc(50% - 8px)", bottom: "-8px" }}></div>
    </div>
  )
}

export default HoverLabel
