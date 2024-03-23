import { Rescard } from "../components/resCard";
import { BrowserRouter } from "react-router-dom";
import { render,screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/restaurantCard.json"
import '@testing-library/jest-dom';


// it("should check whether prop.name is coming or not",()=>{
//     render(
//         <BrowserRouter>
//             <Rescard resdata={MOCK_DATA} />
//         </BrowserRouter>
//     )

//     const data=screen.getAllByText(MOCK_DATA.resdata.info.name)

//     expect(data).toBeInTheDocument()
// })