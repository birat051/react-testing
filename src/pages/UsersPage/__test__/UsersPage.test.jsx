import {render,screen,fireEvent} from "@testing-library/react"
import UsersPage from ".."


describe("Tests to check for user list in Users page",()=>{
    test("should render user list items",async ()=>{
        render(<UsersPage/>)
        const listElements=await screen.findAllByRole("listitem")
        expect(listElements).toHaveLength(3)
    })
})