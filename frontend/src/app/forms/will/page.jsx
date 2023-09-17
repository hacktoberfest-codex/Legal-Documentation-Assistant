"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useState } from "react";

export default function Page() {
  const [witnesses, setWitnesses] = useState([{ name: "", age: "" }]);
  const [executors, setExecutors] = useState([{ name: "", age: "" }]);
  const [beneficiaries, setBeneficiaries] = useState([{ name: "", age: "" }]);

  const addEntry = (setType, stateSetter) => {
    stateSetter((prev) => [...prev, { name: "", age: "" }]);
  };

  const removeEntry = (setType, index, stateSetter) => {
    if (index > 0) {
      stateSetter((prev) => prev.filter((_, i) => i !== index));
    }
  };
  const handleInputChange = (setType, index, event, stateSetter) => {
    stateSetter((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, [event.target.name]: event.target.value }
          : item
      )
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <form className="grid gap-8 text-[#22668D]" onSubmit={handleSubmit}>
      <h1 className="text-center font-semibold text-3xl">Will Intake Form</h1>
      <div className="space-y-2">
        <h3 className="text-sm">Personal Details: </h3>
        <div className="flex gap-4">
          <Input
            type="text"
            placeholder="Name"
            className="bg-[#8ECDDD]/50 w-3/4"
          />
          <Input
            type="text"
            placeholder="Age"
            className="bg-[#8ECDDD]/50 w-1/4"
          />
        </div>
        <Input type="text" placeholder="Address" className="bg-[#8ECDDD]/50" />
        <div className="flex gap-4">
          <Input
            type="text"
            placeholder="District"
            className="bg-[#8ECDDD]/50"
          />
          <Input type="text" placeholder="State" className="bg-[#8ECDDD]/50" />
          <Input
            type="text"
            placeholder="Country"
            className="bg-[#8ECDDD]/50"
          />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm">Witness Details: </h3>
        {witnesses.map((witness, index) => (
          <div key={index} className="space-y-2 pb-4">
            <Input
              type="text"
              name="name"
              value={witness.name}
              onChange={(event) =>
                handleInputChange("witnesses", index, event, setWitnesses)
              }
              placeholder="Witness Name"
              className="bg-[#8ECDDD]/50"
            />
            <Input
              type="text"
              placeholder="Executor Address"
              className="bg-[#8ECDDD]/50"
            />
            {index > 0 && ( // Only show delete button for index > 0
              <button
                type="button"
                onClick={() => removeEntry("witnesses", index, setWitnesses)}
                className="text-red-500"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => addEntry("witnesses", setWitnesses)}
          size="sm"
          className="text-[#22668D]"
        >
          + Add Witness
        </button>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm">Executor Details: </h3>
        {executors.map((executor, index) => (
          <div key={index} className="space-y-2 pb-4">
            <Input
              type="text"
              name="name"
              value={executor.name}
              onChange={(event) =>
                handleInputChange("executors", index, event, setExecutors)
              }
              placeholder="Executor Name"
              className="bg-[#8ECDDD]/50"
            />
            <Input
              type="text"
              placeholder="Executor Address"
              className="bg-[#8ECDDD]/50"
            />
            {index > 0 && (
            <button
              type="button"
              onClick={() => removeEntry("executors", index, setExecutors)}
              className="text-red-500"
            >
              Remove
            </button>
            )}
          </div>
        ))}
        {executors.length < 2 && (
        <button
          type="button"
          onClick={() => addEntry("executors", setExecutors)}
          size="sm"
          className="text-[#22668D]"
        >
          + Add Alternate Executor
        </button>
        )}
      </div>

      <div className="space-y-2">
        <h3 className="text-sm">Beneficiary Details: </h3>
        {beneficiaries.map((beneficiary, index) => (
          <div key={index} className="space-y-2 pb-4">
            <Input
              type="text"
              name="name"
              value={beneficiary.name}
              onChange={(event) =>
                handleInputChange(
                  "beneficiaries",
                  index,
                  event,
                  setBeneficiaries
                )
              }
              placeholder="Beneficiary Name"
              className="bg-[#8ECDDD]/50"
            />
            <Input
              type="text"
              placeholder="Beneficiary Address"
              className="bg-[#8ECDDD]/50"
            />
            <Input
              type="text"
              placeholder="Benefits"
              className="bg-[#8ECDDD]/50"
            />
            {index > 0 && (
            <button
              type="button"
              onClick={() =>
                removeEntry("beneficiaries", index, setBeneficiaries)
              }
              className="text-red-500"
            >
              Remove
            </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => addEntry("beneficiaries", setBeneficiaries)}
          size="sm"
          className="text-[#22668D]"
        >
          + Add Beneficiary
        </button>
      </div>

      <Button
        size="sm"
        type="submit"
        className="w-fit mx-auto bg-[#8ECDDD] hover-bg-[#8ECDDD]/70"
      >
        Generate
      </Button>
    </form>
  );
}
