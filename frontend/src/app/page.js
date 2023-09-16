import Image from "next/image";
import card from "@/data/card";
import { Svg } from "@/components/Svg";
import { TextArea } from "@/components/Client";

export default function Home() {
  return (
    <main className="flex flex-col items-center justifybetween gap-16 p-4">
      <div className="grid place-items-center text-[#22668D]">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="logo"
            width={52}
            height={52}
            className=""
          />
          <h1 className="text-3xl font-semibold">Welcome to LegallyFit</h1>
        </div>
        <p className="">
          Your AI-Powered Legal Companion for Simplified Documentation in Bharat
        </p>
      </div>

      <div className="rounded-lg shadow-md overflow-hidden w-96 md:w-[40rem] flex items-center bg-[#FFFADD] py-2">
        <TextArea />
        <button>
          <Svg.Search className="py-1.5 w-12" />
        </button>
      </div>

      <div className="">
        <p className="text-center text-[#22668D] pb-7 text-lg">
          Sevices we offer&nbsp;&gt;&gt;
        </p>
        <div className="grid grid-cols-3 gap-6">
          {card.map((data) => (
            <div
              key={data.title}
              className="w-64 bg-[#8ECDDD] rounded-lg p-4 text-sm"
            >
              <h1 className="font-semibold">{data.title}</h1>
              <p className="">- {data.subtle}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
