import Body from "../components/body";
import MOCK_DATA from "../mocks/resTaurantList.json"
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render,screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import {act} from "react-dom/test-utils" 



jest.mock('axios')
it("should test the search bar",async ()=>{
        axios.get.mockResolvedValue({data:MOCK_DATA})
        await act(async ()=>{
            render(
            <BrowserRouter>
            <Body/>
            </BrowserRouter>
            )
        })
        const beforesearch=screen.getAllByTestId("resCard")
        expect(beforesearch.length).toBe(20)
        const searching=screen.getByRole("button",{name:"Search"})
        const input=screen.getByPlaceholderText("search")
        fireEvent.change(input,{target:{value:"burger"}})
        fireEvent.click(searching)
        const aftersearch=screen.getAllByTestId("resCard")

        // expect(searching).toBeInTheDocument()
        expect(aftersearch.length).toBe(5)
})