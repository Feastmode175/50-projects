const progress = document.querySelector('#progress');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1

next.addEventListener('click', () => {
  currentActive++

  if (currentActive > circles.length) {
    current = circles.length
  }

  update()
})

prev.addEventListener('click', () => {
  currentActive--

  if (currentActive < circles.length) {
    current = circles.length
  }

  update()
})

function update() {
  circles.forEach((circle, index) => {
    if(index < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')
  // the "-1's" in the line below create the math to get the bar to move only 33% on each click.
  progress.style.width = (actives.length - 1) / (circles.length) * 100 + '%'
}

//TODO: finish prev logic (guide time: 9:00)
