import Image from "next/image";

export default function Sixth() {
  return (
    <section className="w-[1920px] h-[574px] px-[220px] py-[140px] bg-[#043873]">
      <div className="heading w-[1481px] h-[294px] flex items-center flex-col gap-[60px]">
        {/* Text Section */}
        <div className="text w-[1064px] h-[171px] text-white text-center">
          <h1 className="w-[1064px] h-[87px] font-bold text-7xl leading-[87.14px] tracking-[-2%] mb-6">
            Your work, everywhere you are
          </h1>
          <p className="w-[1064px] h-[60px] text-lg leading-[30px] tracking-[-2%] mb-6">
            Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
          </p>
        </div>

        {/* Button */}
        <button className="w-[195px] h-[63px] rounded-lg py-[20px] px-[40px] mt-[80px] bg-[#4F9CF9] transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
          <p className="w-[91px] h-[23px] font-inter font-medium text-[16px] leading-[23px] tracking-tight text-[#FFFFFF] ml-4">
            Try Taskey→
          </p>
        </button>
      </div>
    </section>
  );
}
