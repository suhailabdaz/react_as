import { Header } from "../header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { render,screen } from "@testing-library/react";
import '@testing-library/jest-dom';


it("should render header component with cart is 0",()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
    </BrowserRouter>
    )
    const login=screen.getByText("Cart (0)")
    expect(login).toBeInTheDocument()
})

it("should render header component with cart count (regex)",()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
    </BrowserRouter>
    )
    const login=screen.getByText(/Cart/)
    expect(login).toBeInTheDocument()
})


//fireEvent from @testing-library/react can be used to simulate an event like click ...../