<script setup lang="ts">
import type { ChatCreateResponse } from '~/server/api/chat/create.post';

const prompt = ref('')

const accessToken = useState<string | undefined>('access-token');

function getPeriod(): "morning" | "afternoon" | "evening" {
  const now = new Date();
  const hours = now.getHours();
  if (hours < 12) return "morning";
  if (hours < 18) return "afternoon";
  return "evening";
}

async function start() {
  const data = await $fetch<ChatCreateResponse>('/api/chat/create', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken.value}`
    },
    body: {
      prompt: prompt.value,
    },
  })
  navigateTo(`/chat/${data.chat_id}?new=true`)
}
</script>

<template>
  <div class="flex flex-col w-full h-full pt-48">
    <div class="text-4xl flex flex-row gap-5 self-center font-blod">
      {{ `Good ${getPeriod()}, let's get started!` }}
    </div>
    <div class="w-full h-72 px-56 py-10">
      <div class="w-full h-full mx-auto max-w-[900px]">
        <PromptArea v-model="prompt" @send="start" />
      </div>
    </div>
  </div>
</template>
