"use client"
import React from "react"

interface Props {
  signOut: any
  callbackUrl: string
}

const SideBar = ({ signOut, callbackUrl }: Props) => {
  return (
    <div>
      <ul className="inline-block w-auto space-y-2">
        <li className="flex flex-row items-center w-full px-4 py-3 pb-4 text-base font-bold tracking-widest text-blue-400 bg-blue-100 border-2 border-blue-200 rounded-lg cursor-pointer ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="26"
            height="26"
            fill="rgb(34 197 94)">
            <path d="m15.635,12.43c0,1.277-1.917,3.491-3.301,4.598-.119.095-.28.096-.399,0-1.384-1.107-3.3-3.322-3.3-4.598,0-.789.561-1.43,1.25-1.43.622,0,1.25.374,1.25,1.209,0,.552.447,1,1,1s1-.448,1-1c0-.893.674-1.209,1.25-1.209.689,0,1.25.642,1.25,1.43Zm8.365-2.707v9.276c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5v-9.276c0-1.665.824-3.214,2.203-4.145L9.203.855c1.699-1.146,3.895-1.146,5.594,0l7,4.724c1.379.931,2.203,2.48,2.203,4.145Zm-6.365,2.707c0-1.892-1.458-3.43-3.25-3.43-.89,0-1.675.318-2.25.852-.575-.533-1.36-.852-2.25-.852-1.792,0-3.25,1.539-3.25,3.43,0,2.307,2.649,5.038,4.05,6.16.427.342.938.512,1.45.512s1.022-.171,1.449-.512c1.401-1.121,4.051-3.851,4.051-6.16Z" />
          </svg>
          <span className="pt-2 pl-3 c-xl:hidden ">LEARN</span>
        </li>
        <li className="flex flex-row items-center w-full px-4 py-3 pb-4 text-base font-bold tracking-widest text-green-500 transition-colors duration-200 rounded-lg cursor-pointer hover:bg-green-100 hover:text-green-600 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="26"
            height="26"
            fill="rgb(34 197 94)">
            <path d="m19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-1,6v11.09c0,.854-.551,1.59-1.371,1.831-.821.236-1.681-.08-2.144-.799l-6.486-10.88v10.758c0,.553-.448,1-1,1s-1-.447-1-1V6.911c0-.854.551-1.59,1.371-1.832.817-.24,1.681.08,2.144.799l6.486,10.88V6c0-.552.448-1,1-1s1,.448,1,1Z" />
          </svg>
          <span className="pt-2 pl-3 c-xl:hidden">LETTERS</span>
        </li>
        <li className="flex flex-row items-center w-full px-4 py-3 pb-4 text-base font-bold tracking-widest text-green-500 transition-colors duration-200 rounded-lg cursor-pointer hover:bg-green-100 hover:text-green-600 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            viewBox="0 0 24 24"
            width="26"
            height="26"
            fill="rgb(34 197 94)">
            <path d="m22.942 6.837-2.182-2.183.947-.947a1 1 0 1 0 -1.414-1.414l-.947.947-2.183-2.182a3.7 3.7 0 0 0 -5.105 0 3.609 3.609 0 0 0 0 5.106l2.182 2.182-5.894 5.894-2.183-2.182a3.7 3.7 0 0 0 -5.105 0 3.609 3.609 0 0 0 0 5.106l2.182 2.182-.947.947a1 1 0 1 0 1.414 1.414l.947-.947 2.183 2.182a3.609 3.609 0 0 0 5.105 0 3.608 3.608 0 0 0 0-5.105l-2.182-2.182 5.9-5.895 2.182 2.182a3.609 3.609 0 0 0 5.105 0 3.608 3.608 0 0 0 0-5.105z" />
          </svg>
          <span className="pt-2 pl-3 c-xl:hidden">PRACTICE</span>
        </li>
        <li className="flex flex-row items-center w-full px-4 py-3 pb-4 text-base font-bold tracking-widest text-green-500 transition-colors duration-200 rounded-lg cursor-pointer hover:bg-green-100 hover:text-green-600 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="26"
            height="26"
            fill="rgb(34 197 94)">
            <path d="M15.091,15.997c6.571-.033,8.909-3.513,8.909-6.497,0-1.677-1.188-3.08-2.765-3.419,.136-.386,.254-.741,.333-1.01,.353-1.193,.125-2.453-.626-3.458-.766-1.024-1.937-1.612-3.214-1.612H6.271c-1.277,0-2.449,.588-3.215,1.612-.751,1.005-.979,2.266-.626,3.458,.08,.269,.197,.624,.334,1.011-1.577,.339-2.764,1.742-2.764,3.419,0,2.984,2.339,6.464,8.909,6.497,.056,.302,.091,.61,.091,.924v3.079c0,1.826-1.536,1.992-2,2h-1c-.553,0-1,.447-1,1s.447,1,1,1h12c.553,0,1-.447,1-1s-.447-1-1-1h-.992c-.472-.008-2.008-.174-2.008-2v-3.08c0-.313,.035-.621,.091-.923Zm5.361-8.007c.017,0,.031,.01,.048,.01,.827,0,1.5,.673,1.5,1.5,0,2.034-1.609,4.197-6.036,4.47,.221-.299,.474-.576,.762-.821,1.739-1.478,2.933-3.453,3.726-5.159ZM2,9.5c0-.827,.673-1.5,1.5-1.5,.017,0,.031-.009,.047-.01,.794,1.706,1.988,3.681,3.727,5.159,.288,.245,.541,.521,.762,.821-4.427-.273-6.036-2.436-6.036-4.47Zm7.792,.263c-.264-.182-.375-.518-.27-.822l.519-1.606-1.366-1c-.327-.24-.398-.699-.158-1.026,.138-.188,.358-.3,.591-.3h1.681l.511-1.593c.129-.387,.547-.595,.934-.466,.22,.073,.393,.246,.466,.466l.51,1.593h1.681c.405,0,.734,.328,.734,.734,0,.235-.112,.455-.301,.593l-1.366,1,.519,1.606c.124,.386-.088,.8-.475,.925-.224,.072-.469,.032-.659-.107l-1.343-.988-1.344,.987c-.256,.191-.606,.192-.864,.004Z" />
          </svg>
          <span className="pt-2 pl-3 c-xl:hidden">LEADERBOARD</span>
        </li>
        <li className="flex flex-row items-center w-full px-4 py-3 pb-4 text-base font-bold tracking-widest text-green-500 transition-colors duration-200 rounded-lg cursor-pointer hover:bg-green-100 hover:text-green-600 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Bold"
            viewBox="0 0 24 24"
            width="26"
            height="26"
            fill="rgb(34 197 94)">
            <path d="M18.5,0H5.5A5.506,5.506,0,0,0,0,5.5v13A5.506,5.506,0,0,0,5.5,24h13A5.506,5.506,0,0,0,24,18.5V5.5A5.506,5.506,0,0,0,18.5,0ZM21,18.5A2.5,2.5,0,0,1,18.5,21H18V20A6,6,0,0,0,6,20v1H5.5A2.5,2.5,0,0,1,3,18.5V5.5A2.5,2.5,0,0,1,5.5,3h13A2.5,2.5,0,0,1,21,5.5Z" />
            <circle cx="12" cy="8.5" r="3.5" />
          </svg>
          <span className="pt-2 pl-3 c-xl:hidden">PROFILE</span>
        </li>
        <li className="flex flex-row items-center w-full px-4 py-3 pb-4 text-base font-bold tracking-widest text-green-500 transition-colors duration-200 rounded-lg cursor-pointer hover:bg-green-100 hover:text-green-600 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="26"
            height="26"
            fill="rgb(34 197 94)">
            <path d="M21,12a9.143,9.143,0,0,0-.15-1.645L23.893,8.6l-3-5.2L17.849,5.159A9,9,0,0,0,15,3.513V0H9V3.513A9,9,0,0,0,6.151,5.159L3.107,3.4l-3,5.2L3.15,10.355a9.1,9.1,0,0,0,0,3.29L.107,15.4l3,5.2,3.044-1.758A9,9,0,0,0,9,20.487V24h6V20.487a9,9,0,0,0,2.849-1.646L20.893,20.6l3-5.2L20.85,13.645A9.143,9.143,0,0,0,21,12Zm-6,0a3,3,0,1,1-3-3A3,3,0,0,1,15,12Z" />
          </svg>
          <span className="pt-2 pl-3 c-xl:hidden">SETTINGS</span>
        </li>
        <li
          onClick={() => signOut({ callbackUrl: callbackUrl })}
          className="flex flex-row items-center w-full px-4 py-3 pb-4 text-base font-bold tracking-widest text-green-500 transition-colors duration-200 rounded-lg cursor-pointer hover:bg-green-100 hover:text-green-600 
        ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1 "
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="26"
            height="26"
            fill="rgb(34 197 94)">
            <path d="m24,12.5c0,.828-.671,1.5-1.5,1.5h-1.5c-1.221,0-2.37-.649-2.999-1.695l-.552-.917-1.332,3.247,2.614,1.486c1.091.62,1.769,1.786,1.769,3.042v3.337c0,.828-.671,1.5-1.5,1.5s-1.5-.672-1.5-1.5v-3.337c0-.18-.097-.346-.252-.435l-4.081-2.322c-1.498-.947-2.073-2.749-1.428-4.322l1.265-3.084h-1.268c-.19,0-.362.105-.447.276l-1.447,2.895c-.371.741-1.271,1.041-2.013.671-.741-.371-1.041-1.271-.671-2.013l1.447-2.895c.597-1.193,1.796-1.935,3.13-1.935h3.993c1.221,0,2.37.649,3,1.695l1.843,3.062c.091.151.251.242.428.242h1.5c.829,0,1.5.672,1.5,1.5Zm-12.442,4.351c-.771-.309-1.642.066-1.95.835-.077.191-.259.314-.464.314h-4.143c-.552,0-1-.448-1-1s.448-1,1-1h.826c.111-1.253.174-2.595.174-4C6,5.373,4.657,0,3,0S0,5.373,0,12s1.343,12,3,12c.76,0,1.453-1.134,1.981-3h4.162c1.439,0,2.715-.863,3.25-2.199.308-.77-.066-1.643-.835-1.95Zm6.442-11.851c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5Z" />
          </svg>
          <span className="pt-2 pl-3 c-xl:hidden">LOGOUT</span>
        </li>
      </ul>
    </div>
  )
}

export default SideBar
