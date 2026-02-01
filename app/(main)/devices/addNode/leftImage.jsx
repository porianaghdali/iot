import Image from "next/image";

export default function LeftImage() {
  return (
    <div className="hidden w-2/5 h-full bg-[#250544] xl:grid">
      <Image
        src="/images/test.png"
        width={583}
        height={466}
        className="h-full"
        alt=""
      />
      <div className="px-[12%] py-[7%]  flex flex-col gap-8">
        <p className="text-white font-bold text-xl text-center">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم{" "}
        </p>
        <p className="text-white font-normal text-xl text-center">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است
        </p>
      </div>
    </div>
  );
}
