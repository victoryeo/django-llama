import { UseChatHelpers } from 'ai/react'

import { Button } from '../components/ui/button'
import { IconArrowRight } from '../components/ui/icons'

const exampleMessages = [
  {
    heading: 'Explain technical concepts',
    message: `What is inbound and outbound marketing?`
  },
  {
    heading: 'Draft blog post title',
    message: `Generate four title options for a blog post title about [INSERT TOPICS HERE], use the following keywords in the title [INSERT KEYWORDS].`
  },
  {
    heading: 'Teach me something today',
    message: `Could you please teach me a concept today in 100 words or less? Share insights on its significance, key strategies, and practical applications. I'm eager to grasp a comprehensive understanding that extends beyond the basics. Your guidance will greatly aid in expanding my knowledge. Thank you for imparting valuable insights!`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Welcome to LLM Chatbot!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          Hi there! Ask questions!
        </p>
        <p className="leading-normal text-muted-foreground">
          You can start a conversation here or try the following examples:
        </p>
        <div className="mt-2 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              size="super"
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>     
      </div>
    </div>
  )
}
