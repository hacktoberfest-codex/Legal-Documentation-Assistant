"use client"
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useState } from "react";


export default function page() {

  return (
    <form className="grid gap-8 text-[#22668D] w-full">
      <h1 className="text-center font-semibold text-3xl">NDA Intake Form</h1>
      <div className="space-y-2">
        <h3 className="text-sm">Disclosure Details: </h3>
        <div className="flex gap-4">
          <Input type="text" placeholder="Name" className="bg-[#8ECDDD]/50 w-3/5" />
          <Input type="text" placeholder="Email Id" className="bg-[#8ECDDD]/50 w-2/5" />
        </div>
        <div className="flex gap-4">
          <Input type="text" placeholder="Company Name" className="bg-[#8ECDDD]/50 w-3/5" />
          <Input type="text" placeholder="Designation" className="bg-[#8ECDDD]/50 w-2/5" />
        </div>
        <Input type="text" placeholder="Address" className="bg-[#8ECDDD]/50" />

      </div>
      <div className="space-y-2">
        <h3 className="text-sm">Receivers Details: </h3>
        <div className="flex gap-4">
          <Input type="text" placeholder="Name" className="bg-[#8ECDDD]/50 w-3/5" />
          <Input type="text" placeholder="Email Id" className="bg-[#8ECDDD]/50 w-2/5" />
        </div>
        <div className="flex gap-4">
          <Input type="text" placeholder="Company Name" className="bg-[#8ECDDD]/50 w-3/5" />
          <Input type="text" placeholder="Designation" className="bg-[#8ECDDD]/50 w-2/5" />
        </div>
        <Input type="text" placeholder="Address" className="bg-[#8ECDDD]/50" />

      </div>
      <div>
        <h3 className="text-sm">Purpose: </h3>
        <textarea type="text" placeholder="Purpose of drafting a Non-Disclosure Agreement" className="w-full bg-[#8ECDDD]/50 px-3 py-2 text-sm rounded-md" />
      </div>



      <Button size="sm" type="submit" className="w-fit mx-auto bg-[#8ECDDD] hover:bg-[#8ECDDD]/70">Generate</Button>
    </form>
  )
}
