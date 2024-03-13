import { LOGO_URL } from "../utils/constants";


const imgstyle = {
    border: "1px solid black",
  };
const Search = () => (
    <div className="search" style={imgstyle}>
      <h3>Search</h3>
    </div>
  );

export const Header = () => {
    return (
      <div className="header">
        <div className="logo">
          <img
            className="logoimage"
            src= {LOGO_URL}
            alt="logo"
          />
        </div>
        <Search />
        <div className="list">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };