import { render,screen,fireEvent } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter as Router } from "react-router-dom";

const MockToDo=()=>{
    return (
        <Router>
            <Todo />
        </Router>
    )
}

const addTask=(task)=>{
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    const buttonElement = screen.getByRole("button",{name: /Add/i})
    fireEvent.change(inputElement,{target:{value: task}})
    fireEvent.click(buttonElement)
}

describe("Tests for todo component functionality",()=>{
    test("check if todo is being added to todo list",()=>{
        render(<MockToDo />)
        addTask("Grocery Shopping")
        const divElement = screen.getByText(/Grocery Shopping/i)
        expect(divElement).toBeInTheDocument()
    })
    test("check if all the todo tasks added are present in the list",()=>{
        render(<MockToDo />)
        const tasks=["Grocery Shopping","Workout","Takeout dinner"]
        tasks.forEach((task)=>{
            addTask(task)
        })
        const divElements= screen.getAllByTestId("todocontainer")
        expect(divElements.length).toBe(3)
    })
    test("check if todo element does not completed class when initially added",()=>{
        render(<MockToDo />)
        addTask("Grocery Shopping")
        const divElement = screen.getByText(/Grocery Shopping/i)
        expect(divElement).not.toHaveClass("todo-item-active")
    })
    test("check if todo element has completed class when clicked on",()=>{
        render(<MockToDo />)
        addTask("Grocery Shopping")
        const divElement = screen.getByText(/Grocery Shopping/i)
        fireEvent.click(divElement)
        expect(divElement).toHaveClass("todo-item-active")
    })
})