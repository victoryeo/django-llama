'use client'

import { type Message } from 'ai'

import { Button } from './ui/button'
import { IconCheck, IconCopy } from './ui/icons'
import { cn } from '../lib/utils'

interface ChatMessageActionsProps extends React.ComponentProps<'div'> {
  message: Message
}

export function ChatMessageActions({
  message,
  className,
  ...props
}: ChatMessageActionsProps) {


  return (
    <div
      className={cn(
        'flex items-center justify-end transition-opacity group-hover:opacity-100 md:absolute md:-right-10 md:-top-2 md:opacity-0',
        className
      )}
      {...props}
    >
      <Button variant="ghost" size="icon" >
        <IconCheck />
        <span className="sr-only">Copy message</span>
      </Button>
    </div>
  )
}
