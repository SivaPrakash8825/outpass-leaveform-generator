import axios from "axios";
import Stddetails from "./components/stddetails";
import Stdnav from "./components/stdnav";
import Stdmenubar from "./components/stdsidebar";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApprovalForm from "./components/ApprovalForm";
import Stdacceptedpage from "./components/stdacceptedpage";
export default function Stdhome() {
  const history = useNavigate();
  const [open, setopen] = useState(false);
  const [page, setpage] = useState("outpass");
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
  function selectpage(val) {
    setpage(val);
  }
  return (
    <>
      <div className="w-screen h-screen  overflow-y-scroll bg-blue-200">
        {open ? (
          <Stdmenubar navopen={navopen} selectpage={selectpage} />
        ) : (
          <Stdnav navopen={navopen} selectpage={selectpage} />
        )}

        {page == "outpass" || page == "leaveform" ? (
          <Stddetails />
        ) : page == "accepted" ? (
          <Stdacceptedpage req={"acceptRequest"} />
        ) : (
          <Stdacceptedpage req={"removeRequest"} />
        )}
      </div>
    </>
  );
}
