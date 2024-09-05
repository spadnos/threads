"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

function CreateThread({ createThread }: { createThread: () => void }) {
  const { toast } = useToast();
  return (
    <Button
      className=""
      onClick={async () => {
        createThread();
        toast({
          title: "Thread added.",
        });
      }}
    >
      Create Thread
    </Button>
  );
}
export default CreateThread;
