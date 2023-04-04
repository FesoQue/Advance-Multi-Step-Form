"use client";

const Nav = () => {
  return (
    <header className="min-h-[200px] bg-bg-mobile bg-cover bg-center">
      <div className="flex justify-center space-x-6 pt-10">
        <div>
          <button className=" grid h-[40px] w-[40px] place-items-center rounded-full bg-light-blue font-semibold ">
            1
          </button>
        </div>
        <div>
          <button className=" grid h-[40px] w-[40px] place-items-center rounded-full border-2 border-white font-semibold text-white ">
            2
          </button>
        </div>
        <div>
          <button className=" grid h-[40px] w-[40px] place-items-center rounded-full border-2 border-white font-semibold text-white ">
            3
          </button>
        </div>
        <div>
          <button className=" grid h-[40px] w-[40px] place-items-center rounded-full border-2 border-white font-semibold text-white ">
            4
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
