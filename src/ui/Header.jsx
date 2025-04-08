import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <header
      className="flex items-center justify-between bg-yellow-400 uppercase px-4 py-3 
    border-b-8 border-stone-200 sm:px-6"
    >
      <Link to="/" className="tracking-[3px]">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
