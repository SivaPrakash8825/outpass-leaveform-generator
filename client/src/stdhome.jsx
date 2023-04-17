import axios from "axios";
import Stddetails from "./components/stddetails";
import Stdnav from "./components/stdnav";
import Stdmenubar from "./components/stdsidebar";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Stdhome() {
  const history = useNavigate();
  const [open, setopen] = useState(false);
  function navopen(val) {
    setopen(val);
  }
  useEffect(() => {
    async function checkcook() {
      const val = await axios.get("http://localhost:3030/login/cookdata", {
        withCredentials: true,
      });

      const data = val.data;
      if (data !== "student") {
        history("/");
      }
    }
    checkcook();
  }, []);
  return (
    <>
      <div className="w-screen h-screen  overflow-y-scroll bg-blue-200">
        {open ? <Stdmenubar navopen={navopen} /> : <Stdnav navopen={navopen} />}

        <Stddetails />
      </div>
    </>
  );
}
