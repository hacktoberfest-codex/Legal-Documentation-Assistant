'use client'
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function page() {
  return (
      <form className="grid gap-8 text-[#22668D]">
        <h1 className="text-center font-semibold text-3xl ">Will Intake Form</h1>
        <div className="space-y-2">
          <h3 className="text-sm">Personal Details: </h3>
          <div className="flex gap-4">
            <Input type="text" placeholder="Name" className="bg-[#8ECDDD]/50 w-3/4" />
            <Input type="text" placeholder="Age" className="bg-[#8ECDDD]/50 w-1/4" />
          </div>
          <Input type="text" placeholder="Address" className="bg-[#8ECDDD]/50" />
          <div className="flex gap-4">
            <Input type="text" placeholder="District" className="bg-[#8ECDDD]/50" />
            <Input type="text" placeholder="State" className="bg-[#8ECDDD]/50" />
            <Input type="text" placeholder="Country" className="bg-[#8ECDDD]/50" />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm">Witness Details: </h3>
          <Input type="text" placeholder="Witness Name" className="bg-[#8ECDDD]/50" />
          <Input type="text" placeholder="Witness Address" className="bg-[#8ECDDD]/50" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-sm">Executor Details: </h3>
          <Input type="text" placeholder="Executor Name" className="bg-[#8ECDDD]/50" />
          <Input type="text" placeholder="Executor Address" className="bg-[#8ECDDD]/50" />
        </div>

        <div className="space-y-2">
          <h3 className="text-sm">Beneficiar Details: </h3>
          <Input type="text" placeholder="Beneficiar Name" className="bg-[#8ECDDD]/50" />
          <Input type="text" placeholder="Beneficiar Address" className="bg-[#8ECDDD]/50" />
          <Input type="text" placeholder="Benefits" className="bg-[#8ECDDD]/50" />
        </div>

        <Button size="sm" type="submit" className="w-fit mx-auto bg-[#8ECDDD] hover:bg-[#8ECDDD]/70">Generate</Button>
      </form>
      )
}
