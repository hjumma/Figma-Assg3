import Image from "next/image";

export  default function Footer () {
return (
<>
<section>
        <div className="md:w-[1920px] h-[461px] top-[5195px] left-1 py-[140px] px-[220px] bottom-[32px] bg-[#043873] grid gap-[200px] justify-between">
            <div className="w-[1480px] h-[289px]  gap-[100px] grid justify-between ">
                <div className="w-[1480px] h-[169px]  gap-[100px] flex justify">
                    
                    <div className="w-[295px] h-[169px] gap-[15px]">
                    <Image
              src="/assest/Logo.png"  
              alt="M logo"
              width={295}
              height={169}
              className="flex gap[15px] transition-transform"
            />
                        <p className="w-[240px] h-[120px] font-inter font-normal text-[18px] leading-[30px] tracking-tight text-[#F7F7EE]">whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                    </div>
                    
                    <div className="w-[295px] h-[127px] grid justify-between gap-[15px]">                    <p className="w-[68px] h-[22px] font-inter font-bold text-[18px] leading-[21.78px] tracking-tight text-[#FFFFFF]">Product</p>
                    <p className="w-[70px] h-[20px] font-inter font-normal text-[16px] leading-[20px] tracking-tight text-[#FFE492]">Overview</p>
                    <p className="w-[50px] h-[20px] font-inter font-normal text-[16px] leading-[20px] tracking-tight text-[#FFFF]">Pricing</p>
                    <p className="w-[177px] h-[20px] font-inter font-normal text-[16px] leading-[20px] tracking-tight text-[#FFFF]">Customer stories</p>
                    </div>  

                    <div className="w-[295px] h-[130px] grid justify-between gap-[16px]">
                    <p className="w-[91px] h-[22px] font-inter font-bold text-[18px] leading-[21.78px] tracking-tight text-[#FFFFFF]">Resources</p>
                    <p className="w-[33px] h-[20px] font-inter font-normal text-[16px] leading-[20px] tracking-tight text-[#FFFFFF]">Blog</p>
                    <p className="w-[128px] h-[20px] font-inter font-normal text-[16px] leading-[20px] tracking-tight text-[#FFFFFF]">Guides & tutorials</p>
                    <p className="w-[130px] h-[20px] font-inter font-normal text-[16px] leading-[20px] tracking-tight text-[#FFFFFF]">Help center</p>
                    </div>

                    <div className="w-[295px] h-[130px] grid justify-between gap-[16px]">
                    <p className="w-[83px] h-[22px] font-inter font-bold text-[18px] leading-[21.78px] tracking-tight text-[#FFFFFF]">Company</p>
                    <p className="w-[66px] h-[20px] font-inter font-normal text-[16px] leading-[20px] tracking-tight text-[#FFFFFF]">About us</p>
                    <p className="w-[62px] h-[20px] font-inter font-normal text-[16px] leading-[20px] tracking-tight text-[#FFFFFF]">Careers</p>
                    <p className="w-[99px] h-[20px] font-inter font-normal text-[16px] leading-[20px] tracking-tight text-[#FFFFFF]">Media Kit</p>
                    </div>
                
                </div>  

                    <div className="w-[1480px] h-[20px] grid justify-center">
                        <div className="w-[169px] h-[20px] gap-[60px]">
                            <p className="w-[169px] h-[20px] font-inter font-normal text-[16px] leading-[20px] tracking-tight text-[#FFFFFF] ">©2021 Whitepace LLC.</p>
                        </div>
                    </div>
           
            </div>
        </div>
        </section>
</>
)}