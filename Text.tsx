import Image from "next/image";

export default function Text () {
return (
<>
<section>
        <div className="md:w-[1920px] py-[103px] px-[220px] top-[92px] bg-[#043873] text-white flex items-center">
            <div className="w-[656px] h-[361px]">
                <div className="w-[656px] h-[238px]">
                    <h2 className="font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6">Get More Done with whitespace</h2>
                    <p className="font-normal text-lg leading-[30px] tracking-[-0.-2em]">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                    <br />
                    <button className="w-[219px] h-[63px] rounded-lg px-[20px] grid py-[20px] mt-5 bg-[#4F9CF9] transition-transform duration-300 hover:scale-105 hover:bg-gray-700">Try Whitespace Free →  </button>
                </div>
            </div>
            <div className="w-[824px] h-[549px] bg-[#C4DEFD] transition-transform duration-300 hover:scale-105"> </div>
        </div>
        </section>


</>
)
}