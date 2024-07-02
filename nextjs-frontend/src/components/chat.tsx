'use client'

import { useRouter } from 'next/navigation'
import { useChat, type Message } from 'ai/react'
import { cn } from '../lib/utils'
import { Dialog } from './ui/dialog'
import { ChatList } from './chat-list'
import { ChatScrollAnchor } from './chat-scroll-anchor'
import { EmptyScreen } from './empty-screen'
import { ChatPanel } from './chat-panel'

export interface ChatProps extends React.ComponentProps<'div'> {
  initialMessages?: Message[]
  id?: string
}

export function Chat({ id, initialMessages }: ChatProps) {
  const router = useRouter()
  const { messages, append, reload, stop, isLoading, input, setInput } = useChat({
    initialMessages,
    id,
    body: {
      id,
     
    },
    onResponse(response) {
      if (response.status === 401) {
        console.error(response.statusText)
      }
    },
    onError() {
      console.error('Error occured')
    },
    onFinish() {
   
    } 
  })

  return (
    <>
      <div className={cn('pb-[200px] pt-4 md:pt-10')}>
        {messages.length ? (
          <>
            <ChatList messages={messages} />
            <ChatScrollAnchor trackVisibility={isLoading} />
          </>
        ) : (
          <>
            <EmptyScreen setInput={setInput} />
          </>
        )}
      </div>
      <ChatPanel
        id={id}
        isLoading={isLoading}
        stop={stop}
        append={append}
        reload={reload}
        messages={messages}
        input={input}
        setInput={setInput}
      />
      <Dialog>
        
      </Dialog>
    </>
  )
}