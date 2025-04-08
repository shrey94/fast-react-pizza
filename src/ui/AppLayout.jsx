import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loading from "./Loading";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  console.log(navigation);
  return (
    <div
      className="grid-rows-[auto_1fr_auto] grid h-screen
     bg-slate-200"
    >
      {isLoading && <Loading />}
      {/* {true && <Loading />} */}
      <Header />
      <div className="overflow-scroll">
        <main className=" max-w-3xl mx-auto">
          {/* <h1>Content</h1> */}
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
