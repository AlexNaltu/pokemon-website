import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-[#EB4904] w-full flex justify-center">
      <Link href="/" className="p-4 ">
        <Image src="/logo.png" alt="/" width={250} height={250} />
      </Link>
    </div>
  );
}
