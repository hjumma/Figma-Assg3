import Image from "next/image";

export default function Seven() {
  return (
    <>
      <section>
        <div className="md:w-[1922px] h-[538px] top-[4654px] py-[140px] px-[220px] pl-[220px] mt-[40px] bottom-[140px] grid place-items-center gap-[100px]">
          <h1 className="w-[1482px] h-[87px] font-inter font-bold text-[72px] leading-[87.14px] tracking-tight grid place-items-center text-[#212529]">
            Our sponsors
          </h1>
          <div className="w-[1482px] h-[71px] flex justify-between">
            {/* used css method for image */}
            <div className="image-container" style={{ width: "55.47px", height: "68px" }}>
              <Image
                src="/assest/Apple.png"  
                alt="Apple logo"
                width={55.47}  
                height={68}  
                layout="responsive"  
                objectFit="contain"  
                className="transition-transform duration-300 hover:scale-150"  
              />
            </div>

           
            <Image
              src="/assest/M.png"  
              alt="M logo"
              width={287}
              height={62}
              className="flex gap-4 transition-transform duration-300 hover:scale-150"
            />
            <Image
              src="/assest/Group.png"  
              alt="Group logo"
              width={280}
              height={71}
              className="flex gap-4 transition-transform duration-300 hover:scale-125"
            />
            <Image
              src="/assest/G.png"  
              alt="G logo"
              width={211}
              height={69.81}
              className="flex gap-4 transition-transform duration-300 hover:scale-125"
            />
          </div>
        </div>
      </section>
    </>
  );
}
