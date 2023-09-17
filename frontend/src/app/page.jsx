"use client";

import Image from "next/image";
import card from "@/data/card";
import { Svg } from "@/components/Svg";
import Header from "@/components/Header";
import { useState } from "react";
import { LuLoader2 } from "react-icons/lu";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allData, setData] = useState();

  const searchHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/generate-prompt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
        body: JSON.stringify({ prompt }), // Send values directly
      });

      const data = await res.text();

      setLoading(false);
      if (data.status == "error") return console.log(data.error);
      setIsSearch(true);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
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
          <p className="pt-2">
            Your AI-Powered Legal Companion for Simplified Documentation in
            Bharat
          </p>
        </div>

        <div className="rounded-lg shadow-md overflow-hidden w-96 md:w-[40rem] bg-[#FFFADD] py-2">
          <form
            onSubmit={searchHandler}
            className="flex items-center text-[#22668D]"
          >
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your issue here"
              className="w-full h-fit py2 px-4 outline-none bg-transparent resize-none overflow-hidden placeholder:translate-y-3"
            />

            <div className="pr-2 flex">
              <button type="submit" className={`${loading && "hidden"} ${!prompt && "pointer-events-none"}`}>
                <Svg.Search className="py-1.5" />
              </button>
              <LuLoader2
                className={`${!loading && "hidden"} animate-spin text-3xl`}
              />
            </div>
          </form>
          <div className={`${!isSearch && "hidden"}`}>
            <hr className="h-0.5 bg-[#8ECDDD]" />
            <div className="h-96 p-4 text-[#22668D]">{allData}</div>
          </div>
        </div>

        <div className={`${isSearch && "hidden"}`}>
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
    </>
  );
}
