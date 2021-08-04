import { fadeIn, fadeOut } from '../src/js/fade'

describe.each([
  { type: 'in', fade: fadeIn },
  { type: 'out', fade: fadeOut }
])('fade $type', ({ type, fade }) => {
  beforeEach(() => {
    jest.restoreAllMocks()

    jest.useFakeTimers()

    jest.spyOn(global, 'setTimeout')
  })
  it.each([
    { time: 2000, frames: 120 },
    { time: 3000, frames: 180 },
    { time: 4000, frames: 240 },
    { time: 500, frames: 30 },
    { time: 250, frames: 15 }
  ])(`should fade ${type} element over given time`, ({ time, frames }) => {
    const element = document.createElement('div')

    element.style.setProperty('opacity', type === 'in' ? '0' : '1')

    fade(element, time)

    jest.advanceTimersByTime(time)

    expect(element.style.getPropertyValue('opacity')).toEqual(type === 'in' ? '1' : '0')
    expect(setTimeout).toHaveBeenCalledTimes(frames)
  })
})
