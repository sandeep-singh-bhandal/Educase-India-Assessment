const User = () => {
  return (
    <section className="flex justify-center items-center w-screen h-screen">
      <div className="flex flex-col justify-between border-2 border-[#EBEBEB] hover:border-[#6C25FF] transition-all duration-300 w-96 h-full bg-[#F7F8F9]">
        <div className="border-b-2 border-[#D8D8D8] border-dashed">
          <h1 className="text-[18px] bg-white py-4 px-3 text-[#1d2226] mb-2 font-[400]">
            Account Settings
          </h1>
          <div className="w-fit flex p-4 gap-4">
            <div className="relative">
              <img
                src="/dp.png"
                alt="display_picture"
                className="h-auto w-20"
              />
              <img
                src="/cam.svg"
                alt="cam"
                className="h-auto w-5 absolute right-0 top-14"
              />
            </div>
            <div>
              <h1 className="font-[600] text-[#1d2226] text-[14px]">
                Marry Doe
              </h1>
              <p className="text-[#1D2226] font-[400] text-[14px]">
                marry@gmail.com
              </p>
            </div>
          </div>
          <p className="p-4 text-[#1D2226] font-[400] text-[14px] ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed error
            perspiciatis consequuntur pariatur volup.
          </p>
        </div>
        <div className="w-full h-8 border-t-2 border-dashed border-[#d8d8d8]">
             
        </div>
      </div>
    </section>
  );
};

export default User;
