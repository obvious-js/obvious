// @ts-ignore
import { render, fireEvent, screen, cleanup } from '@testing-library/vue'
import { HooksProducer, producer } from './apps/producer'
import { HooksConsumer, consumer } from './apps/consumer'
import { registerApp } from 'rallie'
import { Warnings } from '@rallie/core'

registerApp(producer)
  .onActivate(() => {
    render(HooksProducer)
  })
  .onDestroy(() => {
    cleanup()
    producer.setState(state => { state.count = 0 })
    producer.setState(state => { state.isDarkTheme = true })
  })

registerApp(consumer)
  .relyOn(['producer'])
  .onActivate((containerId) => {
    render(HooksConsumer, {
      container: document.getElementById(containerId)
    })
  })
  .onDestroy(() => {
    cleanup()
  })
describe('Test Vue hooks', () => {
  beforeEach(async () => {
    await consumer.activate(consumer.name, 'consumer')
  })

  afterEach(async () => {
    await consumer.destroy(consumer.name)
    await consumer.destroy(producer.name)
  })

  test('#case1: modify state directly', async () => {
    const addCountBtn = await screen.findByText('add count')
    const count = await screen.findByTestId('count')
    expect(count.innerHTML).toEqual('0')
    await fireEvent.click(addCountBtn)
    await fireEvent.click(addCountBtn)
    await fireEvent.click(addCountBtn)
    expect(count.innerHTML).toEqual('3')
  })

  test('#case2: modify state by unicaster', async () => {
    console.log = jest.fn()
    const printThemeBtn = await screen.findByText('print theme')
    fireEvent.click(printThemeBtn) // log dark
    const producerContainer = await screen.findByTestId('producer-container')
    const consumerContainer = await screen.findByTestId('consumer-container')
    expect(producerContainer.style.backgroundColor).toEqual('black')
    expect(consumerContainer.style.backgroundColor).toEqual('black')
    const toggleThemeBtn = await screen.findByText('toggle theme')
    await fireEvent.click(toggleThemeBtn)
    expect(producerContainer.style.backgroundColor).toEqual('white')
    expect(consumerContainer.style.backgroundColor).toEqual('white')
    await fireEvent.click(printThemeBtn) // log light
    expect(console.log).toBeCalledTimes(2)
    expect(console.log).toBeCalledWith('dark')
    expect(console.log).toBeCalledWith('light')
  })

  test('#case3: test events', async () => {
    console.log = jest.fn()
    console.warn = jest.fn()
    const printThemeBtn = await screen.findByText('print theme')
    fireEvent.click(printThemeBtn) // log dark
    const toggleThemeBtn = await screen.findByText('toggle theme')
    fireEvent.click(toggleThemeBtn)
    fireEvent.click(printThemeBtn) // log light
    cleanup()
    producer.events.printTheme()
    expect(() => {
      producer.methods.toggleTheme()
    }).toThrowError()
    expect(console.log).toBeCalledTimes(2)
    expect(console.log).toBeCalledWith('dark')
    expect(console.log).toBeCalledWith('light')
    expect(console.warn).toBeCalledWith(Warnings.emptyBroadcastEvents('printTheme'))
  })
})