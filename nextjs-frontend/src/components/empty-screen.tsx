import { UseChatHelpers } from 'ai/react'

import { Button } from '../components/ui/button'

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

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Welcome to LLM Chatbot!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          Hi there! Ask questions!
        </p>
     
      </div>
    </div>
  )
}
