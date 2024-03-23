import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import '@testing-library/jest-dom';


describe("should test contact componenet",()=>{


it("testing if the component is loaded or not",()=>{
    render(<Contact/>)
    const heading=screen.getByRole("heading")
    expect(heading).toBeInTheDocument()
})

it("testing if there is any text called submit",()=>{
    render(<Contact/>)
    const submit=screen.getByText("Submit")
    expect(submit).toBeInTheDocument()
})

it("testing if there is one or more  textfield ",()=>{
    render(<Contact/>)
    const inputs=screen.getAllByRole("textbox")
    inputs.forEach(input=>{
        expect(input).toBeInTheDocument()
    })
})

test("testing if there is a textfield called name ",()=>{
    render(<Contact/>)
    const input=screen.getByPlaceholderText("Name")
    expect(input).toBeInTheDocument()
})

test("testing if there is a textfield called name ",()=>{
    render(<Contact/>)
    const input=screen.getAllByRole("textbox")
    expect(input.length).toBe(2)
})
})