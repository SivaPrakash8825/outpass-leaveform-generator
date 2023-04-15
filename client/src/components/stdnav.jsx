import { BiLogOutCircle } from "react-icons/bi";

export default function Stdnav() {
  return (
    <>
      <nav>
        <ul className="w-[100%] h-[70px] relative text-white capitalize opacity-[0.7] bg-blue-400 flex justify-around items-center ">
          <li className="border-b-[4px] p-[5px] pb-[20px] pt-[20px] border-b-white">
            <a href="">outpass</a>
          </li>
          <li>
            <a href="">leaveForm</a>
          </li>
          <li className="absolute right-[10px] sm:right-[50px]">
            <span className="flex items-center">
              <BiLogOutCircle />
              logout
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
}
