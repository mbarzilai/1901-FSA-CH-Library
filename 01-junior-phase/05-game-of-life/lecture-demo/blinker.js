const addBlinker = (text) => {
  const newBlinker = document.createElement("h1")
  newBlinker.innerText = text
  newBlinker.style.border = "5px solid red"

  setInterval(function() {
    newBlinker.classList.toggle('blinker-on')
  }, 1000)

  // newBlinker.addEventListener('click', function() {
  //   this.classList.toggle('blinker-on')
  // })

  // document.getElementsByTagName('body')[0].addEventListener('click', function(event) {
  //   console.log('event target', event.target)
  //   console.log('this body', this)
  // })

  const item = document.getElementById('item')
  item.appendChild(newBlinker)

}
// addBlinker('first item')

// const addDay = (day) => {
//   addBlinker(day)
// }
const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
days.forEach(addBlinker)
