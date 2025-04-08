import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getFinalPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  const FinalPrice = useSelector(getFinalPrice);

  if (!totalCartQuantity) return;

  return (
    <div
      className="flex items-center justify-between bg-stone-700 text-stone-200 text-sm uppercase px-4 py-4
    sm:px-6 md:text-base"
    >
      <p
        className="text-stone-300 font-semibold 
      space-x-4 sm:space-x-6"
      >
        <span>{totalCartQuantity} pizzas</span>
        <span>${FinalPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
