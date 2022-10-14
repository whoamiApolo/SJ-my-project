const btnToTop = document.getElementById('backToTop')

btnToTop.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
})