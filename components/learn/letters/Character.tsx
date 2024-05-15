type Props = {}

const Character = (props: Props) => {
  // Example data from database which text has not uppercase default all text is uppercase
  // this is for if some text need to be lowercase by dymanic
  const NotUpperCase = "normal-case"
  return (
    <div className='text-center'>
      <button className='relative  uppercase min-w-[40px] w-full active:translate-y-[2px] active:translate-z-0 before:active:shadow-none before:content-[""] before:absolute before:shadow-border_b before:shadow-slate-200 before:border-2 before:-left-2 before:-right-2 before:-top-2 before:-bottom-2 before:rounded-2 '>
        <span className={`flex flex-col w-full items-center `} translate='no'>
          <span className={`h-6 text-slate-700 text-2xl font-medium `}>a</span>
          <span className={``}>eey</span>
          <div
            className='progress-bar overflow-hidden min-w-[40px] rounded-full '
            role={"progressbar"}
            aria-valuenow={20}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{
              width: "100%",
              height: "10px",
              backgroundColor: "rgb(239, 239, 239)",
            }}>
            <div
              className='rounded-full relative '
              style={{
                width: `${20}%`,
                height: "100%",
                backgroundColor: "rgb(250, 204, 21)",
              }}>
              <div
                className='absolute top-[3px] left-0 right-0 rounded-full'
                style={{
                  marginInline: "10px",
                  height: "0.4rem",
                  backgroundColor: "rgb(255, 211, 51)",
                }}></div>
            </div>
          </div>
        </span>
      </button>
    </div>
  )
}

export default Character
