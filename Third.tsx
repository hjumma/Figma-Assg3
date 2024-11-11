import Image from "next/image";

export default function Third() {
  return (
    <>
      <section>
        <div className="flex justify-center items-center mt-[300px] gap-[100px]">
                   <div className="w-[1480px] h-[661px] ml-10">
            <Image
              src="/assest/Diag.png" 
              alt="M logo"
              width={1480}
              height={661}
              className="transition-transform duration-300 hover:scale-90" 
            />
        
          </div>
        </div>
      </section>
    </>
  );
}
