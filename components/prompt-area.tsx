import { ArrowRightIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import Button from "./button";

export interface PromptAreaProps {
  send?: boolean
  next?: boolean
  onSend?: () => void
  onNext?: () => void
  setPrompt?: (value: any) => any
}

export default function PromptArea({ send, next, onNext, onSend, setPrompt }: PromptAreaProps) {
  send = send ?? true
  next = next ?? false
  return (
    <div className="flex w-full h-full bg-[#EBEBDB] rounded-lg p-2 text-sm">
      <div className="flex flex-col w-full h-full gap-2">
        <div className="flex flex-grow-[1] w-full">
          components
        </div>
        <div className="flex flex-grow-[10] w-full h-full">
          <textarea
            className="w-full h-full bg-white rounded-lg p-2 focus:outline-none"
            onChange={(event) => setPrompt?.(event.target.value)}
          />
        </div>
        <div className="w-full flex-grow-[3] flex justify-end gap-2">
          {send && (
            <Button color="skyblue" onClick={onSend}>
              <PaperPlaneIcon className="w-4 h-4 mr-2"/> Send
            </Button>
          )}
          {next && (
            <Button color="#FC6262" onClick={onNext}>
              <ArrowRightIcon className="w-4 h-4 mr-2"/> Next
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}