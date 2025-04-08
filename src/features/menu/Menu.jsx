import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  return (
    <ul className="divide-y divide-stone-400 p-1">
      {menu.map((pizza) => (
        // <li>
        <MenuItem pizza={pizza} key={pizza.id} />
        // </li>
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
