





export default function Header({step}){
    return(   <div className="flex flex-col ">
            <div className="flex gap-2 items-center mb-2">
              <div className="bg-[#65139B] rounded-md text-white text-xl w-7 text-center">
                {step}
              </div>
              <p className="text-text-title text-xl font-normal">
                مشخصات دستگاه
              </p>
            </div>
            <div className="bg-[#DADAED] rounded-lg w-full h-2 mb-2">
              <div
                className="bg-[#65139B] rounded-lg h-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
            <div>
              <p className="text-xs text-text-tertiary font-normal mb-5">
                مرحله {step} از 3
              </p>
            </div>
            <p className="text-text-title font-normal text-xs">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
          </div>)
}