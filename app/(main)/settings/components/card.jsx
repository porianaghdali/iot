import Image from "next/image";
import Link from "next/link";

export default function Card({ title, img, link }) {
  return (
    <Link href={link}>
      <div className="bg-background-box py-5 px-4 flex flex-col gap-2 justify-center items-center w-[200px] rounded-xs  ">
        <div className="rounded-full p-3 bg-background-modal-header w-fit">
          <Image src={img} alt={title} width={76} height={76} />
        </div>
        <p className="text-text-title text-base font-normal text-center">
          {title}
        </p>
      </div>
    </Link>
  );
}
