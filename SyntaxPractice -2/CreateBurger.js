import { BreadUpper } from "./BurgerComponents/BreadUpper/BreadUpper";
import { BreadLower } from "./BurgerComponents/BreadLower/BreadLower";
import { BurgerComponentsConst } from "./Resources";
import { Cheese } from "./BurgerComponents/Cheese/cheese";
import { Lettuce } from "./BurgerComponents/Lettuce/Lettuce";
import { Tomatoes } from "./BurgerComponents/Tomatoes/Tomatoes";

function CreateBurger(props) {
  const BurgerStack = props.burgerStack.map((item) => {
    switch (item) {
      case BurgerComponentsConst.LETTUCE:
        return <Lettuce />;
      case BurgerComponentsConst.CHEESE:
        return <Cheese />;
      case BurgerComponentsConst.TOMATOES:
        return <Tomatoes />;
      default:
        return null;
    }
  });
  return (
    <div style={{ padding: "10% 25%" }}>
      <BreadUpper />
      {BurgerStack}
      <BreadLower />
    </div>
  );
}

export default CreateBurger;
