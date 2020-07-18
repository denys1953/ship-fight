let playerDesk = document.querySelector('#playerDesk')
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
// for (let i = 0; i < blocks.length; i++) {
//    blocks[i].innerHTML = i
//    if (blocks[i].classList.contains('active')) count++
// }
console.log(count)

