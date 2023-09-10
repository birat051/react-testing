import { render,screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter as Router } from "react-router-dom";

const MockFooter=({numberOfIncompleteTasks})=>{
    return (
        <Router>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
        </Router>
    )
}

describe("Tests for todo footer",()=>{
    it('should render the correct number of todo tasks',() => {
        render(<MockFooter numberOfIncompleteTasks={5} />)
        const paragraphElement=screen.getByText(/5 tasks left/i)
        expect(paragraphElement).toBeInTheDocument()
      })
      
      it('should render the "task" when number of todo task is 1',() => {
          render(<MockFooter numberOfIncompleteTasks={1} />)
          const paragraphElement=screen.getByText(/1 task left/i)
          expect(paragraphElement).toBeInTheDocument()
      })
      
      it('should render the "tasks" when number of todo task is more than 1',() => {
          render(<MockFooter numberOfIncompleteTasks={2} />)
          const paragraphElement=screen.getByTestId('para')
          expect(paragraphElement).toHaveTextContent("2 tasks left")
      })
      
      it('should render the "task" when number of todo task is 1 in the paragraph value',() => {
          render(<MockFooter numberOfIncompleteTasks={1} />)
          const paragraphElement=screen.getByTestId('para')
          expect(paragraphElement.textContent).toBe("1 task left")
      })
})

