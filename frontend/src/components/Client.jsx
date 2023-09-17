'use client'

export function TextArea() {
  return (
    <textarea
      type="text"
      placeholder="Describe your issue here"
    //   rows={1}
      className="w-full h-fit py2 px-4 outline-none bg-transparent text-[#22668D] resize-none overflow-hidden placeholder:translate-y-3"
    />
  );
}
