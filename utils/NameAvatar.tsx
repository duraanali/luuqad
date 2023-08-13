import React from "react"

const generateRandomColor = () => {
  const colors = ["#ff4b4b", "#ce82ff", "#ff9600"]
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  return randomColor
}

const NameAvatar = ({
  name,
  width,
  height,
  fontSize,
}: {
  name: string
  width: string
  height: string
  fontSize: string
}) => {
  // Get the first letter of the name
  const initial = name.charAt(0).toUpperCase()

  // Generate a random background color
  const backgroundColor = generateRandomColor()

  // Define a style for the circle
  const circleStyle = {
    width,
    height,
    fontSize,
    backgroundColor,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "bold",
  }

  return <div style={circleStyle}>{initial}</div>
}

export default NameAvatar
