export default function Stddetails() {
  return (
    <div className="w-[100%]  h-[calc(100%)] grid place-content-center">
      <div className="w-[370px] h-auto bg-[rgba(0,0,0,0.1)] rounded-[12px] py-[20px] px-[40px] shadow-2xl sm:w-[800px]">
        <div className="w-full grid gap-4 grid-cols-1 sm:grid-cols-2">
          <div className="">
            <label htmlFor="from"> from </label>
            <br />
            <input
              type="text"
              id="from"
              className="forminput"
              placeholder="dd/mm/yyyy"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="to"> to </label>
            <input
              type="text"
              className="forminput"
              htmlFor="to"
              placeholder="dd/mm/yyyy"
            />
          </div>
          <div className="">
            <label htmlFor="state"> state </label>
            <input
              type="text"
              className="forminput"
              id="state"
              placeholder="state name"
            />
          </div>
          <div className="">
            <label htmlFor="city"> city </label>
            <input
              type="text"
              className="forminput"
              id="city"
              placeholder="city name"
            />
          </div>
          <div className="">
            <label htmlFor="phone">
              phone number<span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              className="forminput"
              id="phone"
              placeholder="phone"
            />
          </div>
          <div className="">
            <label htmlFor=""> parent number </label>
            <input
              type="text"
              className="forminput"
              id="parent"
              placeholder="parent number"
            />
          </div>
        </div>

        <div className="w-full text-center mt-[10px]">
          <input
            type="text"
            placeholder="--city--"
            className="w-[50%] text-center rounded-[12px] pointer-events-none"
          />
        </div>
        <div className="w-full mt-[10px]">
          <label htmlFor="reason">Reason for leave</label>
          <textarea
            name=""
            id="reason"
            className="w-full outline-none px-[10px] py-[2px] border border-[black] h-[40px] rounded-[8px] resize-none"></textarea>
        </div>
        <div className="flex gap-[3px] mt-[8px]">
          <input type="checkbox" />
          <span className="flex flex-nowrap">
            check if you have taken permission from your parent
          </span>
        </div>
        <div className="w-full mt-[10px] text-center">
          <button
            type="submit"
            className="w-[30%] py-[5px] hover:bg-green-600 transition-all active:bg-emerald-400 rounded-[12px] text-white bg-green-800">
            submit
          </button>
        </div>
      </div>
    </div>
  );
}
