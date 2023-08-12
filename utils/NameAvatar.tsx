import React from "react"

const generateRandomColor = () => {
  const colors = ["#ff4b4b", "#ce82ff", "#ff9600"]
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  return randomColor
}

const NameAvatar = ({ name }: { name: string }) => {
  // Get the first letter of the name
  const initial = name.charAt(0).toUpperCase()

  // Generate a random background color
  const backgroundColor = generateRandomColor()

  // Define a style for the circle
  const circleStyle = {
    width: "48px",
    height: "48px",
    backgroundColor,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white", // Set the text color to white for better visibility
    fontWeight: "bold",
  }

  return <div style={circleStyle}>{initial}</div>
}

export default NameAvatar
