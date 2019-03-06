var lis= document.querySelectorAll('li')
for(var i = 0; i < lis.length; i++) {
lis[i].addEventListener('mouseover', function() {
  this.classList.add('selected')
})
lis[i].addEventListener('mouseout', function() {
  this.classList.remove('selected')
})
}

/*
lis[0].addEventListener('mouseover', function() {
  this.classList.add('selected')
})
lis[0].addEventListener('mouseout', function() {
  this.classList.remove('selected')
})

lis[1].addEventListener('mouseover', function() {
  this.classList.add('selected')
})
lis[1].addEventListener('mouseout', function() {
  this.classList.remove('selected')
})

lis[2].addEventListener('mouseover', function() {
  this.classList.add('selected')
})
lis[2].addEventListener('mouseout', function() {
  this.classList.remove('selected')
})
*/

for(var i = 0; i < lis.length; i++) {
  lis[i].addEventListener('click', function() {
    this.classList.toggle('done')
  })
}

/*
lis[0].addEventListener('click', function() {
  this.classList.toggle('done')
})

lis[1].addEventListener('click', function() {
  this.classList.toggle('done')
})

lis[2].addEventListener('click', function() {
  this.classList.toggle('done')
})

466 - 24 = 442
1572 / 2 = 786
*/