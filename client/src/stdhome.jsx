import Stddetails from "./components/stddetails";
import Stdnav from "./components/stdnav";
export default function Stdhome() {
  return (
    <>
      <div className="w-screen h-screen  overflow-y-scroll bg-blue-200">
        <Stdnav />
        <Stddetails />
      </div>
    </>
  );
}
