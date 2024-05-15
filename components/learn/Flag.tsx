import type { StaticImageData } from "next/image"
import _flagsSvg from "../../public/svg/flags.svg"
import type { Language } from "@/utils/languages"

const flagsSvg = _flagsSvg as StaticImageData

export const Flag = ({
  language,
  width = 84,
}: {
  language: Language
  width?: number
}) => {
  const height = width * (19.3171 / 24)
  return (
    <svg viewBox='0 0 82 66' style={{ height, width }}>
      <image
        height={flagsSvg.height}
        href={flagsSvg.src}
        width={flagsSvg.width}></image>
    </svg>
  )
}
