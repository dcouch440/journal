console.log('top', performance.now())
document.addEventListener('DOMContentLoaded', (...arg) => {
  console.log('DOM', arg, performance.now())
})
$(document).ready((...arg) => {
  console.log('J-Query', arg, performance.now())
})