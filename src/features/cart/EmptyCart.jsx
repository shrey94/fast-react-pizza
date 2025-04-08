// import { Link } from 'react-router-dom';
import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="p-2">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="font-semibold p-2">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
