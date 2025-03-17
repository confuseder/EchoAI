import { ArrowRightIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import Button from "./button";

export interface PromptAreaProps {
  send?: boolean
  next?: boolean
}

export default function PromptArea({ send, next }: PromptAreaProps) {
  send = send ?? true
  next = next ?? false
  return (
    <div className="flex w-full h-full bg-[#EBEBDB] rounded-lg p-5">
      <div className="flex flex-col w-full h-full gap-4">
        <div className="flex-1 w-full">
          <textarea className="w-full h-full bg-white rounded-lg p-2 focus:outline-none" />
        </div>
        <div className="w-full flex justify-end gap-2">
          {send && (
            <Button color="skyblue">
              <PaperPlaneIcon className="w-4 h-4 mr-2"/> Send
            </Button>
          )}
          {next && (
            <Button color="#FC6262">
              <ArrowRightIcon className="w-4 h-4 mr-2"/> Next
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}