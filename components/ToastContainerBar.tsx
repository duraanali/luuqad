"use client"

import React from "react"
import { ToastContainer } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

function ToastContainerBar() {
  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export default ToastContainerBar
