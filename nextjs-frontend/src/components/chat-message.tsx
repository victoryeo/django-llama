// Inspired by Chatbot-UI and modified to fit the needs of this project
// @see https://github.com/mckaywrigley/chatbot-ui/blob/main/components/Chat/ChatMessage.tsx

import { Message } from 'ai'

import { cn } from '../lib/utils'
import { IconOpenAI, IconUser } from '../components/ui/icons'
import { ChatMessageActions } from '../components/chat-message-actions'

export interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message, ...props }: ChatMessageProps) {
  return (
    <div
      className={cn('group relative mb-4 flex items-start md:-ml-12')}
      {...props}
    >
      <div
        className={cn(
          'flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border shadow',
          'bg-background'
        )}
      >
        <IconUser />
      </div>
      <div className="flex-1 px-1 ml-4 space-y-2 overflow-hidden">

        <ChatMessageActions message={message} />
      </div>
    </div>
  )
}
