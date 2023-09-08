import { render,screen } from "@testing-library/react";
import Header from "../Header";

it('should text if header title passed as prop exists in the heading element',async () => {
  render(<Header title="To Do" />)
  const headingElement=screen.getByText(/to do/i)
  expect(headingElement).toBeInTheDocument()
})

it('should test heading component is present',async () => {
    render(<Header title="To Do" />)
    const headingElement=screen.getByRole("heading")
    expect(headingElement).toBeInTheDocument()
})

it('should fetch heading component by id and check if it is present',async () => {
    render(<Header title="To Do" />)
    const headingElement=screen.getByTestId(/header1/i)
    expect(headingElement).toBeInTheDocument()
})

//queryBy
it('should query heading component and check if title header1 is not present',async () => {
    render(<Header title="To Do" />)
    const headingElement=screen.queryByText(/header1/i) //test will not fail here as opposed to getBy or findBy
    expect(headingElement).not.toBeInTheDocument()
})

it('should test if exactly 1 heading component is present',async () => {
    render(<Header title="To Do" />)
    const headingElement=screen.getAllByRole("heading")
    expect(headingElement.length).toBe(1)
})