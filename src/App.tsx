import { FC } from "react";
import "./Style/index.scss";
import ListComponent from "./Components/ListComponent";
import CartComponent from "./Components/CartComponent";

const App: FC = () => {
  return (
    <div className="App">
      <div className="List-Container">
        <ListComponent />
      </div>
      <div className="Cart-Container">
        <CartComponent />
      </div>
    </div>
  );
};

export default App;
