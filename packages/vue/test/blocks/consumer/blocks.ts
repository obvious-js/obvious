import { createBlock } from '@rallie/block'

export const consumer = createBlock('consumer')
export const producer = consumer.connect<{
  state: {
    count: number
    isDarkTheme: boolean
  }
  events: {
    printTheme: () => void
  }
  methods: {
    toggleTheme: () => void
  }
}>('producer')