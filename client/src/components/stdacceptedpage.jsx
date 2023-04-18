import axios from "axios";
import ApprovalForm from "./ApprovalForm";
import { useEffect, useState } from "react";
export default function Stdacceptedpage(props) {
  let list = "";
  const { req } = props;

  let [data, setdata] = useState([]);
  async function getEmailid() {
    const val = await axios.get("http://localhost:3030/getEmailid", {
      withCredentials: true,
    });
    const data = val.data;
    console.log(data);
    getData(data);
  }

  async function getData(data) {
    const val = await axios.post(
      `http://localhost:3030/${req}`,
      {
        rollno: data,
      },
      {
        withCredentials: true,
      }
    );

    list = val.data;
    setdata([list]);
  }

  useEffect(() => {
    getEmailid();
  }, [req]);
  let html;

  if (data.length <= 0) {
    html = (
      <div className="w-screen h-screen grid place-content-center">
        <h1 className=" text-blue-700 font-bold text-[20px]">NOT FOUND</h1>
      </div>
    );
  } else {
    html = data.map((val, i) => {
      return (
        <div key={val}>
          <ApprovalForm data={val.data} />
        </div>
      );
    });
  }

  return (
    <>
      <nav className="w-100%  bg-[#82c7e4] flex justify-between items-center"></nav>

      {html}
    </>
  );
}
