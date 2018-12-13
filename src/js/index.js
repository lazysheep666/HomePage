import run from './RandomStr'
import '../style/index.styl'

let isRunning = false

const init = (id, tarStr) => {
  listen(id, tarStr)
  play(id, tarStr)
}

function listen(id, tarStr) {
  document.getElementById(id).addEventListener('click', function() {
    if (isRunning) {
      return
    }
    play(id, tarStr)
  })
}

function play(id, tarStr) {
  isRunning = true
  const head = document.getElementById(id)
  const colors = '#66CCFF #FFFF00 #9999FF #006666 #0080FF #53C5B9 #00FFCC #99FFFF #EE0000 #363636 #EE82EE'.split(' ')
  let str = ''
  for (const ch of tarStr) {
    str += '<span></span>'
  }
  head.innerHTML = str
  const history = run(tarStr).history
  history.forEach((text, i) => {
    setTimeout(function() {
      let j = 0
      for (const ch of text) {
        head.children[j].innerText = ch
        if (ch !== tarStr[j]) {
          let colorIndex = Math.floor(Math.random() * colors.length)
          head.children[j].style.color = colors[colorIndex]
        } else {
          head.children[j].style.color = '#2c3e50'
        }
        j++
      }
      if (++i === history.length) {
        isRunning = false
      }
    }, i * 40)
  })
}

init('title', 'LazySheep')
