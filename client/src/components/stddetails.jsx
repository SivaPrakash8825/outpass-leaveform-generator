export default function Stddetails() {
  return (
    <div class="w-[100%]  h-[calc(100%)] grid place-content-center">
      <div class="w-[370px] h-auto bg-[rgba(0,0,0,0.1)] rounded-[12px] py-[20px] px-[40px] shadow-2xl sm:w-[800px]">
        <div class="w-full grid gap-4 grid-cols-1 sm:grid-cols-2">
          <div class="">
            <label for="from"> from </label>
            <br />
            <input
              type="text"
              id="from"
              class="forminput"
              placeholder="dd/mm/yyyy"
            />
          </div>
          <div class="flex flex-col">
            <label for="to"> to </label>
            <input
              type="text"
              class="forminput"
              for="to"
              placeholder="dd/mm/yyyy"
            />
          </div>
          <div class="">
            <label for="state"> state </label>
            <input
              type="text"
              class="forminput"
              id="state"
              placeholder="state name"
            />
          </div>
          <div class="">
            <label for="city"> city </label>
            <input
              type="text"
              class="forminput"
              id="city"
              placeholder="city name"
            />
          </div>
          <div class="">
            <label for="phone">
              phone number<span class="text-red-500"> *</span>
            </label>
            <input
              type="text"
              class="forminput"
              id="phone"
              placeholder="phone"
            />
          </div>
          <div class="">
            <label for=""> parent number </label>
            <input
              type="text"
              class="forminput"
              id="parent"
              placeholder="parent number"
            />
          </div>
        </div>

        <div class="w-full text-center mt-[10px]">
          <input
            type="text"
            placeholder="--city--"
            class="w-[50%] text-center rounded-[12px] pointer-events-none"
          />
        </div>
        <div class="w-full mt-[10px]">
          <label for="reason">Reason for leave</label>
          <textarea
            name=""
            id="reason"
            class="w-full outline-none px-[10px] py-[2px] border border-[black] h-[40px] rounded-[8px] resize-none"></textarea>
        </div>
        <div class="flex gap-[3px] mt-[8px]">
          <input type="checkbox" />
          <span class="flex flex-nowrap">
            check if you have taken permission from your parent
          </span>
        </div>
        <div class="w-full mt-[10px] text-center">
          <button
            type="submit"
            class="w-[30%] py-[5px] hover:bg-green-600 transition-all active:bg-emerald-400 rounded-[12px] text-white bg-green-800">
            submit
          </button>
        </div>
      </div>
    </div>
  );
}
