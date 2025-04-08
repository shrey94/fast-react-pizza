import { useSelector } from "react-redux";

function UserName() {


  const username = useSelector((state)=>state.user.username);

  if (!username) return;

  return <div className=" hidden text-sm font-semibold md:block">SHREY</div>;
}

export default UserName;
