import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;
  console.log(item);

  return (
    <li className="py-2">
      <div className="flex items-center justify-between gap-3 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm italic p-1">
        {isLoadingIngredients
          ? "loading ingredients...."
          : ingredients.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;
