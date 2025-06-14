<script setup lang="ts">
import type { Context, GetChatResponse, StepBranch } from '@/types'
import { Whiteboard } from '@/utils/whiteboard'
import { useComposer, NEW_CHAT } from './composer'

const nextAvailablity = ref(false)
const messages = ref<Context>([])
const branches = ref<StepBranch[]>([])
const whiteboard = new Whiteboard()
const currentPage = ref<number>(1)
const currentStep = ref<string | null>(null)
const prompt = ref<string>('')
const client = useLogtoClient();
const accessToken = useState<string | undefined>('access-token');

const route = useRoute()
const router = useRouter()

const data = await $fetch<GetChatResponse>('/api/chat/get', {
  headers: {
    'Authorization': `Bearer ${accessToken.value}`
  },
  method: 'POST',
  body: {
    chat_id: route.params.id,
  }
})
branches.value.push(...data.branches)
messages.value.push(...data.context)
currentStep.value = 
  data.context[data.context.length - 1] ?
    data.context[data.context.length - 1].step ?? null :
    null

const composer = useComposer({
  pageId: currentPage as Ref<number>,
  chatId: route.params.id as string,
  messages,
  branches,
  nextAvailablity,
  token: accessToken,
})
provide('composer', composer)

const handleNext = () => {
  composer(whiteboard, currentStep.value!)
}
const handleSend = () => {
  composer(whiteboard, currentStep.value!, prompt.value)
}
const handleSwitch = (direction: 'previous' | 'next') => {
  if (direction === 'previous') {
    if (currentPage.value! <= 1) return
    currentPage.value = currentPage.value! - 1
  } else {
    if (currentPage.value! >= whiteboard.getPageCount()) return
    currentPage.value = currentPage.value! + 1
  }
}

const newParam = route.query.new

if (newParam) {
  composer(whiteboard, currentStep.value!, NEW_CHAT)
  router.replace({ query: { ...route.query, new: undefined } });
}
</script>

<template>
  <div class="flex w-full gap-2 h-full">
    <div class="flex flex-col h-full w-2/3 gap-y-2">
      <div class="flex flex-3/4 max-h-3/4 min-h-3/4 h-3/4 bg-gray-100 rounded-lg">
        <Board :whiteboard="whiteboard" :page-id="currentPage.toString()" @switch="handleSwitch" />
      </div>
      <div class="flex flex-1/4 h-full bg-gray-100 rounded-lg">
        <div class="relative w-full">
          <Timeline :branches="branches" />
        </div>
      </div>
    </div>
    <div class="flex flex-col w-1/3 gap-y-2 bg-gray-100 rounded-lg p-4">
      <div class="flex flex-1 overflow-y-auto scroll-smooth" ref={messagesContainerRef}>
        <div class="size-full">
          <div v-for="(message, index) in messages" :key="index">
            <ToolBox v-if="message.role === 'processor'" :content="message.content"
              :is-loading="message.isLoading ?? false" />
            <MessageBox v-else :avatar="'https://picsum.photos/200/300'" :role="message.role"
              :content="message.content" />
          </div>
        </div>
      </div>
      <div class="h-[200px] w-full">
        <PromptArea @next="handleNext" @send="handleSend" :next="nextAvailablity" v-model="prompt"/>
      </div>
    </div>
  </div>
</template>