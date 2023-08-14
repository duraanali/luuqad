import { Fragment, useCallback, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import type { Unit, Section, SectionType } from "@/utils/units"
import SectionToolTip from "./SectionToolTip"
import HoverLabel from "./HoverLabel"
import UnitHeader from "./UnitHeader"
import { units } from "@/utils/units"
import {
  LessonCompletionSvg0,
  LessonCompletionSvg1,
  LessonCompletionSvg2,
  LessonCompletionSvg3,
} from "@/components/SVGs"
import {
  ActiveBookSvg,
  ActiveDumbbellSvg,
  ActiveTreasureSvg,
  ActiveTrophySvg,
  CheckmarkSvg,
  FastForwardSvg,
  GoldenBookSvg,
  GoldenDumbbellSvg,
  GoldenTreasureSvg,
  GoldenTrophySvg,
  LockSvg,
  LockedBookSvg,
  LockedDumbbellSvg,
  LockedTreasureSvg,
  LockedTrophySvg,
  StarSvg,
} from "@/components/SVGs"

type SectionStatus = "LOCKED" | "ACTIVE" | "COMPLETE"

const sectionStatus = (
  section: Section,
  unitsCompleted: number,
): SectionStatus => {
  const unitsPerSection = 2
  const sectionsCompleted = Math.floor(unitsCompleted / unitsPerSection)
  const sections = units.flatMap((unit: any) => unit.sections)
  const sectionIndex = sections.findIndex((t) => t === section)

  if (sectionIndex < sectionsCompleted) {
    return "COMPLETE"
  }
  if (sectionIndex > sectionsCompleted) {
    return "LOCKED"
  }
  return "ACTIVE"
}

const UnitCompletionSvg = ({
  unitsCompleted,
  status,
  style = {},
}: {
  unitsCompleted: number
  status: SectionStatus
  style?: React.HTMLAttributes<SVGElement>["style"]
}) => {
  if (status !== "ACTIVE") {
    return null
  }
  switch (unitsCompleted % 4) {
    case 0:
      return <LessonCompletionSvg0 style={style} />
    case 1:
      return <LessonCompletionSvg1 style={style} />
    case 2:
      return <LessonCompletionSvg2 style={style} />
    case 3:
      return <LessonCompletionSvg3 style={style} />
    default:
      return null
  }
}

const tileLeftClassNames = [
  "left-0",
  "left-[-45px]",
  "left-[-70px]",
  "left-[-45px]",
  "left-0",
  "left-[45px]",
  "left-[70px]",
  "left-[45px]",
] as const

type TileLeftClassName = (typeof tileLeftClassNames)[number]

const getTileLeftClassName = ({
  index,
  unitNumber,
  tilesLength,
}: {
  index: number
  unitNumber: number
  tilesLength: number
}): TileLeftClassName => {
  if (index >= tilesLength - 1) {
    return "left-0"
  }

  const classNames =
    unitNumber % 2 === 1
      ? tileLeftClassNames
      : [...tileLeftClassNames.slice(4), ...tileLeftClassNames.slice(0, 4)]

  return classNames[index % classNames.length] ?? "left-0"
}

const SectionIcon = ({
  sectionType,
  status,
}: {
  sectionType: SectionType
  status: SectionStatus
  // eslint-disable-next-line no-undef
}): React.ReactNode => {
  switch (sectionType) {
    case "star":
      return status === "COMPLETE" ? (
        <CheckmarkSvg />
      ) : status === "ACTIVE" ? (
        <StarSvg />
      ) : (
        <LockSvg />
      )
    case "book":
      return status === "COMPLETE" ? (
        <GoldenBookSvg />
      ) : status === "ACTIVE" ? (
        <ActiveBookSvg />
      ) : (
        <LockedBookSvg />
      )
    case "dumbbell":
      return status === "COMPLETE" ? (
        <GoldenDumbbellSvg />
      ) : status === "ACTIVE" ? (
        <ActiveDumbbellSvg />
      ) : (
        <LockedDumbbellSvg />
      )
    case "fast-forward":
      return status === "COMPLETE" ? (
        <CheckmarkSvg />
      ) : status === "ACTIVE" ? (
        <StarSvg />
      ) : (
        <FastForwardSvg />
      )
    case "treasure":
      return status === "COMPLETE" ? (
        <GoldenTreasureSvg />
      ) : status === "ACTIVE" ? (
        <ActiveTreasureSvg />
      ) : (
        <LockedTreasureSvg />
      )
    case "trophy":
      return status === "COMPLETE" ? (
        <GoldenTrophySvg />
      ) : status === "ACTIVE" ? (
        <ActiveTrophySvg />
      ) : (
        <LockedTrophySvg />
      )
  }
}

const getTileColors = ({
  sectionType,
  status,
  defaultColors,
}: {
  sectionType: SectionType
  status: SectionStatus
  defaultColors: `border-${string} bg-${string}`
}): `border-${string} bg-${string}` => {
  switch (status) {
    case "LOCKED":
      if (sectionType === "fast-forward") return defaultColors
      return "border-[#b7b7b7] bg-[#e5e5e5]"
    case "COMPLETE":
      return "border-yellow-500 bg-yellow-400"
    case "ACTIVE":
      return defaultColors
  }
}

const UnitSection = ({ unit }: { unit: Unit }): React.ReactNode => {
  const router = useRouter()

  const [selectedTile, setSelectedTile] = useState<null | number>(null)

  useEffect(() => {
    const unselectTile = () => setSelectedTile(null)
    window.addEventListener("scroll", unselectTile)
    return () => window.removeEventListener("scroll", unselectTile)
  }, [])

  const closeTooltip = useCallback(() => setSelectedTile(null), [])

  const [unitsCompleted] = useState(0)

  return (
    <>
      <UnitHeader
        unitNumber={unit.unitNumber}
        description={unit.description}
        backgroundColor={unit.backgroundColor}
        borderColor={unit.borderColor}
      />
      <div className='relative mt-[20px] mb-8 flex max-w-2xl flex-col items-center gap-4'>
        {unit.sections.map((section: any, i: any): React.ReactNode => {
          const status = sectionStatus(section, unitsCompleted)
          return (
            <Fragment key={i}>
              {(() => {
                switch (section.type) {
                  case "star":
                  case "book":
                  case "dumbbell":
                  case "trophy":
                  case "fast-forward":
                    if (section.type === "trophy" && status === "COMPLETE") {
                      return (
                        <div className='relative'>
                          <SectionIcon
                            sectionType={section.type}
                            status={status}
                          />
                          <div className='absolute top-6 left-0 right-0 flex justify-center text-lg font-bold text-yellow-700'>
                            {unit.unitNumber}
                          </div>
                        </div>
                      )
                    }
                    return (
                      <div
                        className={[
                          "relative -mb-4 h-[93px] w-[98px]",
                          getTileLeftClassName({
                            index: i,
                            unitNumber: unit.unitNumber,
                            tilesLength: unit.sections.length,
                          }),
                        ].join(" ")}>
                        {section.type === "fast-forward" &&
                        status === "LOCKED" ? (
                          <HoverLabel
                            text='Jump here?'
                            textColor={unit.textColor}
                          />
                        ) : selectedTile !== i && status === "ACTIVE" ? (
                          <HoverLabel text='Start' textColor={unit.textColor} />
                        ) : null}
                        <UnitCompletionSvg
                          unitsCompleted={unitsCompleted}
                          status={status}
                        />
                        <button
                          className={[
                            "absolute m-3 rounded-full border-b-8 p-4",
                            getTileColors({
                              sectionType: section.type,
                              status,
                              defaultColors: `${unit.borderColor} ${unit.backgroundColor}`,
                            }),
                          ].join(" ")}
                          onClick={() => {
                            if (
                              section.type === "fast-forward" &&
                              status === "LOCKED"
                            ) {
                              void router.push(
                                `/lesson?fast-forward=${unit.unitNumber}`,
                              )
                              return
                            }
                            setSelectedTile(i)
                          }}>
                          <SectionIcon
                            sectionType={section.type}
                            status={status}
                          />
                          <span className='sr-only'>Show Section</span>
                        </button>
                      </div>
                    )
                  case "treasure":
                    return (
                      <div
                        className={[
                          "relative -mb-4",
                          getTileLeftClassName({
                            index: i,
                            unitNumber: unit.unitNumber,
                            tilesLength: unit.sections.length,
                          }),
                        ].join(" ")}
                        role='button'
                        tabIndex={status === "ACTIVE" ? 0 : undefined}
                        aria-hidden={status !== "ACTIVE"}
                        aria-label={
                          status === "ACTIVE" ? "Collect reward" : ""
                        }>
                        {status === "ACTIVE" && (
                          <HoverLabel text='Open' textColor='text-yellow-400' />
                        )}
                        <SectionIcon
                          sectionType={section.type}
                          status={status}
                        />
                      </div>
                    )
                }
              })()}
              <SectionToolTip
                units={units}
                selectedTile={selectedTile}
                index={i}
                section_id={section.id}
                unitNumber={unit.unitNumber}
                tilesLength={unit.sections.length}
                description={(() => {
                  switch (section.type) {
                    case "book":
                    case "dumbbell":
                    case "star":
                      return section.title
                    case "fast-forward":
                      return status === "LOCKED" ? "Jump here?" : section.title
                    case "trophy":
                      return `Unit ${unit.unitNumber} review`
                    case "treasure":
                      return ""
                  }
                })()}
                status={status}
                closeTooltip={closeTooltip}
              />
            </Fragment>
          )
        })}
      </div>
    </>
  )
}

export default UnitSection
