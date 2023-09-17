import Image from "next/image";

export default function layout({children}) {
  return (
    <div className="grid place-items-center mt-10">
      <div className="flex items-center gap-3">
        <Image src="/logo.png" alt="logo" width={52} height={52} className="" />
        <h1 className="text-3xl font-semibold text-[#22668D]">
          Welcome to LegallyFit
        </h1>
      </div>
      <div className="w-96 md:w-[40rem] bg-[#FFFADD] p-4 rounded-2xl mt-6 flex flex-col py-12 justify-center items-center gap-6">
        {children}
      </div>
    </div>
  );
}
