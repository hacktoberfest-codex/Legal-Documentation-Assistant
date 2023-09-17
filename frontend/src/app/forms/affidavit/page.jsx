'use client'
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function Page() {
  return (
      <form className="grid gap-8 text-[#22668D]">
        <h1 className="text-center font-semibold text-3xl">Affidavit Intake Form</h1>
        <div className="space-y-2">
          <h3 className="text-sm">Personal Details: </h3>
          <div className="flex gap-4">
            <Input type="text" placeholder="Name" className="bg-[#8ECDDD]/50 w-3/5" />
            <Input type="text" placeholder="Age" className="bg-[#8ECDDD]/50 w-1/5" />
            <Input type="text" placeholder="Gender" className="bg-[#8ECDDD]/50 w-1/5" />
          </div>
          <Input type="text" placeholder="Address" className="bg-[#8ECDDD]/50" />
          <div className="flex gap-4">
            <Input type="text" placeholder="Post Office" className="bg-[#8ECDDD]/50" />
            <Input type="text" placeholder="District" className="bg-[#8ECDDD]/50" />
            <Input type="text" placeholder="State" className="bg-[#8ECDDD]/50" />
            <Input type="text" placeholder="Country" className="bg-[#8ECDDD]/50" />
          </div>
          <textarea type="text" placeholder="Purpose" className="w-full bg-[#8ECDDD]/50 px-3 py-2 text-sm rounded-md" />
          <div className="flex gap-4">
          {/* <Input type="text" placeholder="Type" className="bg-[#8ECDDD]/50 w-1/3" /> */}
          <div className="bg-[#8ECDDD]/50 w-1/3 rounded-md px-6">
            <select id="type" className="bg-transparent w-full h-full">
              <option disabled>Type</option>
              <option value="aadhaar">Aadhaar Card</option>
              <option value="pan">PAN Card</option>
              <option value="voterid">Voter ID Card</option>
            </select>
          </div>
          <Input type="text" placeholder="Legal ID Detail" className="bg-[#8ECDDD]/50 w-2/3" />
          </div>
        </div>


        <div className="space-y-2">
          <h3 className="text-sm">Court Info</h3>
          <div className="flex gap-4">
            <Input type="text" placeholder="Court where Affidavit is Filed" className="bg-[#8ECDDD]/50" />
            <Input type="text" placeholder="Magistrate Name" className="bg-[#8ECDDD]/50" />
          </div>
        </div>

        <Button size="sm" type="submit" className="w-fit mx-auto bg-[#8ECDDD] hover:bg-[#8ECDDD]/70">Generate</Button>
      </form>
      )
}
