import CreateBurger from "./CreateBurger";
import { BurgerComponentsConst } from "./Resources";
import "./styles.css";


export default function App() {
  return (
    <div className="App">
      <CreateBurger
        burgerStack={[
          BurgerComponentsConst.LETTUCE,
          BurgerComponentsConst.TOMATOES,
          BurgerComponentsConst.CHEESE,
          BurgerComponentsConst.LETTUCE,
          BurgerComponentsConst.TOMATOES,
          BurgerComponentsConst.TOMATOES,
        ]}
      />

      {/* <BreadUpper/>
      <BreadLower/>
      <Cheese/>
      <Lettuce/>
      <Tomatoes/> */}
    </div>
  );
}
