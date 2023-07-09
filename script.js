document.addEventListener('DOMContentLoaded', () => {
  const entities = [
    {
      img: './img/completed-projects__img1.jpg'
    },
    {
      img: './img/completed-projects__img2.jpg'
    },
    {
      img: './img/completed-projects__img3.jpg'
    }
  ]

  const img = document.querySelector('.completed-projects__img-desktop')

  const setEntity = (index) => {
    console.log(entities)
    console.log('index')
    console.log(index)
    console.log(entities[index])
    img.style.backgroundImage = `url(${entities[index].img})`
    console.log(img)
  }

  const prev = document.querySelector('.prev')
  const next = document.querySelector('.next')
  const circles = document.querySelectorAll('.completed-projects__circle')
  const listItems = document.querySelectorAll('.completed-projects__list-item')
  let currentIndex = 0

  prev.addEventListener('click', () => {
    setEntity(currentIndex === 0 ? entities.length - 1 : currentIndex - 1)
    circles[currentIndex].classList.remove('active')
    listItems[currentIndex].classList.remove('list-item_active')
    currentIndex = currentIndex === 0 ? entities.length - 1 : currentIndex - 1
    console.log(circles[currentIndex - 1])
    circles[currentIndex].classList.add('active')
    listItems[currentIndex].classList.add('list-item_active')
  })
  next.addEventListener('click', () => {
    setEntity(currentIndex === entities.length - 1 ? 0 : currentIndex + 1)
    circles[currentIndex].classList.remove('active')
    listItems[currentIndex].classList.remove('list-item_active')
    currentIndex = currentIndex === entities.length - 1 ? 0 : currentIndex + 1
    circles[currentIndex].classList.add('active')
    listItems[currentIndex].classList.add('list-item_active')
  })

  listItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      setEntity(index)
      circles[currentIndex].classList.remove('active')
      listItems[currentIndex].classList.remove('list-item_active')
      currentIndex = index
      circles[currentIndex].classList.add('active')
      listItems[currentIndex].classList.add('list-item_active')
    })
  })

  circles.forEach((item, index) => {
    item.addEventListener('click', () => {
      setEntity(index)
      circles[currentIndex].classList.remove('active')
      listItems[currentIndex].classList.remove('list-item_active')
      currentIndex = index
      circles[currentIndex].classList.add('active')
      listItems[currentIndex].classList.add('list-item_active')
    })
  })
})
