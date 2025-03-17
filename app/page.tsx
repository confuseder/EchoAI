'use client'

import PromptArea from "@/components/prompt-area";
import { CounterClockwiseClockIcon, GearIcon, PersonIcon } from "@radix-ui/react-icons";
import { useActionState, useState } from "react";

export function getPeriod(): 'morning' | 'afternoon' | 'evening' {
  const now = new Date();
  const hours = now.getHours();
  if (hours < 12) return 'morning';
  if (hours < 18) return 'afternoon';
  return 'evening';
}

export default function Home() {  
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full flex flex-row p-3">
        <div className="h-full w-16 flex flex-col justify-between p-3">
          <div>
            <CounterClockwiseClockIcon className="w-5 h-5 hover:cursor-pointer hover:text-gray-500"/>
          </div>
          <div className="flex flex-col gap-6 mt-auto">
            <GearIcon className="w-5 h-5 hover:cursor-pointer hover:text-gray-500"/>
            <PersonIcon className="w-5 h-5 hover:cursor-pointer hover:text-gray-500"/>
          </div>
        </div>
        <div className="flex-grow flex flex-col p-3 w-full pt-48">
          <div className="text-4xl flex self-center">Good { getPeriod() }, let's get started!</div>
          <div className="w-full px-56 py-10">
            <PromptArea next={true}/>
          </div>
        </div>
      </div>
    </div>
  );
}
