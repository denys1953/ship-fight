let playerDesk = document.querySelector('#playerDesk')
let scores = document.querySelector('#par')
let score = 70
let block
let count = 0;
for (var i = 0; i < 100; i++) {
   block = document.createElement('div')
   block.classList.add('block')
   block.innerHTML = ''
   playerDesk.append(block)
}
let blocks = document.getElementsByClassName('block')
let actives = document.getElementsByClassName('active')
while (count < 20) {
   let randNum = Math.floor(Math.random() * blocks.length)
   if (blocks[randNum].classList.contains('active')) {
      continue
   } else {
      blocks[randNum].classList.add('active')
      count++
   }
}
for (let i = 0; i < blocks.length; i++) {
   blocks[i].addEventListener('click', () => {
      if (count > 0 && score > 0) {
         if (blocks[i].classList.contains('active') && blocks[i].innerHTML !== '<img src="https://avatanplus.com/files/resources/original/5968a2c8f2ed115d40bbe123.png" alt="">') { 
            blocks[i].innerHTML = '<img src="https://avatanplus.com/files/resources/original/5968a2c8f2ed115d40bbe123.png" alt="">'
            count--
            console.log(count)
            score--
         } else if (!blocks[i].classList.contains('active') && blocks[i].innerHTML !== '˙') {
            blocks[i].innerHTML = '&#729;'
            console.log(count)
            score--
         }
         scores.innerHTML = `Попыток осталось: ${score}`
      } 
      if (count === 0){
         scores.innerHTML = 'Вы выиграли!'
         return
      }
   })
}
// for (let i = 0; i < blocks.length; i++) {
//    blocks[i].innerHTML = i
//    if (blocks[i].classList.contains('active')) count++
// }
console.log(count)

