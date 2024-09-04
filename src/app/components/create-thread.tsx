"use client";

import { useToast } from "@/hooks/use-toast";

function CreateThread({ createThread }: { createThread: () => void }) {
  const { toast } = useToast();
  return (
    <button
      className="border-2 border-black rounded-md bg-slate-400 py-1 px-2"
      onClick={async () => {
        await createThread();
        toast({
          title: "Thread added.",
        });
      }}
    >
      Create Thread
    </button>
  );
}
export default CreateThread;
