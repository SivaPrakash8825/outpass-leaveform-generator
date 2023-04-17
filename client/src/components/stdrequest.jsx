export default function StdRequest() {
  return (
    <>
      <div className="w-[100%] flex justify-center" id="requests">
        <div className="w-[80%] p-[20px] bg-[rgba(0,0,0,0.1)] rounded-[12px] mt-10 sm:w-[63%]">
          <div className="w-[100%]  flex items-center mt-10 sm:w-[100%]">
            <div className="min-w-[100px]  min-h-[100px] sm:min-w-[150px] sm:h-[150px] bg-cover bg-center bg-no-repeat bg-studentimg"></div>
            <div className="w-[100%]  flex ml-[20px] flex-col md:ml-[20px] sm:ml-[20px]">
              <div className="flex">
                <span>from:</span>
                <p>kamaraj college</p>
              </div>
              <div className="flex flex-wrap mt-[10px]">
                <span>to :</span>
                <p>sattur</p>
              </div>
              <div className="flex flex-wrap mt-[10px]">
                <span>name :</span>
                <p>vikram</p>
              </div>
              <div className="flex flex-wrap mt-[10px]">
                <span>rollno :</span>
                <p>21UAD052</p>
              </div>
              <div className="flex flex-wrap mt-[10px]">
                <span>city :</span>
                <p>sattur</p>
              </div>
              <div className="flex flex-wrap mt-[10px]">
                <span>phonenumber:</span>
                <p>45678987</p>
              </div>
              <div className="flex flex-wrap mt-[10px]">
                <span className=" font-bold underline">reason:</span>
                <p>
                  I'm going to kovilpatti.so, I need a one day leave on
                  (dd/mm/yyyy)
                </p>
              </div>
            </div>
          </div>
          <div className="w-[100%] mt-[20px] flex justify-around">
            <button className="w-[90px] border-2 border-[green] rounded-[8px] text-[green] hover:bg-[green] hover:text-[white]">
              approve
            </button>
            <button className="w-[90px] border-2 border-[red] rounded-[8px] text-[red] hover:bg-[red] hover:text-[white]">
              reject
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
