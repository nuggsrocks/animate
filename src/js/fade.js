export const fadeIn = (element, time) => {
  let opacity = 0

  const delta = 1000 / 60

  const frames = time / delta

  const fade = () => {
    opacity += 1 / frames

    if (opacity > 1) {
      element.style.setProperty('opacity', '1')
      return
    }

    element.style.setProperty('opacity', opacity.toString())

    setTimeout(fade, delta)
  }

  fade()
}


export const fadeOut = (element, time) => {
  let opacity = 1

  const delta = 1000 / 60

  const frames = time / delta

  const fade = () => {
    opacity -= 1 / frames

    if (opacity <= 0) {
      element.style.setProperty('opacity', '0')
      return
    }

    element.style.setProperty('opacity', opacity.toString())

    setTimeout(fade, delta)
  }

  fade()
}

