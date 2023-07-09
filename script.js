document.addEventListener('DOMContentLoaded', () => {
  const entities = [
    {
      img: './img/completed-projects__img1.jpg',
      details:
      {
        city: 'Rostov-on-Don <br> LCD admiral',
        repairTime: '3.5 months',
        apartmentArea: '81 m2',
        repairCost: 'Upon request'
      }
    },
    {
      img: './img/completed-projects__img2.jpg',
      details:
      {
        city: 'Sochi <br> Thieves',
        repairTime: '4 months',
        apartmentArea: '105 m2',
        repairCost: 'Upon request'
      }
    },
    {
      img: './img/completed-projects__img3.jpg',
      details:
      {
        city: 'Rostov-on-Don <br> Patriotic',
        repairTime: '3 months',
        apartmentArea: '93 m2',
        repairCost: 'Upon request'
      }
    }
  ]

  const img = document.querySelector('.completed-projects__img-desktop')

  const setEntity = (index) => {
    img.style.backgroundImage = `url(${entities[index].img})`
  }

  const setDetails = index => {
    details[0].innerHTML = entities[index].details.city
    details[1].textContent = entities[index].details.repairTime
    details[2].textContent = entities[index].details.apartmentArea
    details[3].textContent = entities[index].details.repairCost
  }

  const prev = document.querySelector('.prev')
  const next = document.querySelector('.next')
  const circles = document.querySelectorAll('.completed-projects__circle')
  const listItems = document.querySelectorAll('.completed-projects__list-item')
  const details = document.querySelectorAll('.completed-projects__span')

  let currentIndex = 0

  prev.addEventListener('click', () => {
    setEntity(currentIndex === 0 ? entities.length - 1 : currentIndex - 1)
    setDetails(currentIndex === 0 ? entities.length - 1 : currentIndex - 1)
    circles[currentIndex].classList.remove('active')
    listItems[currentIndex].classList.remove('list-item_active')
    currentIndex = currentIndex === 0 ? entities.length - 1 : currentIndex - 1
    circles[currentIndex].classList.add('active')
    listItems[currentIndex].classList.add('list-item_active')
  })
  next.addEventListener('click', () => {
    setEntity(currentIndex === entities.length - 1 ? 0 : currentIndex + 1)
    setDetails(currentIndex === entities.length - 1 ? 0 : currentIndex + 1)
    circles[currentIndex].classList.remove('active')
    listItems[currentIndex].classList.remove('list-item_active')
    currentIndex = currentIndex === entities.length - 1 ? 0 : currentIndex + 1
    circles[currentIndex].classList.add('active')
    listItems[currentIndex].classList.add('list-item_active')
  })

  listItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      setEntity(index)
      setDetails(index)
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
      setDetails(index)
      circles[currentIndex].classList.remove('active')
      listItems[currentIndex].classList.remove('list-item_active')
      currentIndex = index
      circles[currentIndex].classList.add('active')
      listItems[currentIndex].classList.add('list-item_active')
    })
  })
})
