import { render,screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollower=()=>{
    return (
        <Router>
            <FollowersList />
        </Router>
    )
}

describe("Tests for follower list",()=>{
    it('render atleast one follower',async () => {
        render(<MockFollower/>)
        const divElement=await screen.findByTestId(/follower-item-0/i)
        expect(divElement).toBeInTheDocument()
      })
    //   it('render all follower items',async () => {
    //     render(<MockFollower/>)
    //     const divElements=await screen.findAllByTestId(/follower-item/i)
    //     expect(divElements.length).toBe(5)
    //   })
})