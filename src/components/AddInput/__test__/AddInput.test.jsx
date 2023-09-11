import {render,screen,fireEvent} from "@testing-library/react"
import AddInput from "../AddInput"

const mockSetToDo=jest.fn()

describe("Tests for Add input for Todo",()=>{
    test("should render input element",()=>{
        render(<AddInput todos={[]} setTodos={mockSetToDo}/>)
        const inputElement=screen.getByPlaceholderText("Add a new task here...")
        expect(inputElement).toBeInTheDocument()
    })
    test("should change input element value when new input value is typed",()=>{
        render(<AddInput todos={[]} setTodos={mockSetToDo}/>)
        const inputElement=screen.getByPlaceholderText("Add a new task here...")
        fireEvent.change(inputElement,{target: {value: "Get dog food"}})
        expect(inputElement.value).toBe("Get dog food")
    })
    test("input element value should be empty when Add button is clicked",()=>{
        render(<AddInput todos={[]} setTodos={mockSetToDo}/>)
        const inputElement=screen.getByPlaceholderText("Add a new task here...")
        const buttonElement=screen.getByRole("button",{name: /Add/i})
        fireEvent.change(inputElement,{target: {value: "Get dog food"}})
        fireEvent.click(buttonElement)
        expect(inputElement.value).toBe("")
    })
})