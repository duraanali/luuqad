import ProfileAddFriends from "@/components/learn/profile/ProfileAddFriends"
import { render, screen } from "@testing-library/react"
describe("it should have text content all the Dom", () => {
  // Suite implementation goes here...
  it("should contain the text Add Friends", () => {
    // const { rerender } = render(<ProfileAddFriends SetModelIsOpen={() => true} />)
    // rerender(<ProfileAddFriends SetModelIsOpen={() => false} />)
    render(<ProfileAddFriends SetModelIsOpen={() => true} />)
    const innerText = screen.getByText(/Add Friends/i)

    expect(innerText).toBeInTheDocument()
  })
  it("should contain the text Find friends", () => {
    // const { rerender } = render(<ProfileAddFriends SetModelIsOpen={() => true} />)
    // rerender(<ProfileAddFriends SetModelIsOpen={() => false} />)
    render(<ProfileAddFriends SetModelIsOpen={() => true} />)

    const innerText = screen.getByText(/Find friends/i)

    expect(innerText).toBeInTheDocument()
  })
  it("should contain the text Invite Friends", () => {
    // const { rerender } = render(<ProfileAddFriends SetModelIsOpen={() => true} />)
    // rerender(<ProfileAddFriends SetModelIsOpen={() => false} />)
    render(<ProfileAddFriends SetModelIsOpen={() => true} />)

    const innerText = screen.getByText(/Invite Friends/i)

    expect(innerText).toBeInTheDocument()
  })
  it("should contain the text Connect to Facebook", () => {
    // const { rerender } = render(<ProfileAddFriends SetModelIsOpen={() => true} />)
    // rerender(<ProfileAddFriends SetModelIsOpen={() => false} />)
    render(<ProfileAddFriends SetModelIsOpen={() => true} />)

    const innerText = screen.getByText(/Connect to Facebook/i)

    expect(innerText).toBeInTheDocument()
  })
})
