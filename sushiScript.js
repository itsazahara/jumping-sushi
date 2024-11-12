function bounceSushi() {
  const sushi = document.querySelector('.sushi');
  const shadow = document.querySelector('.shadow');

  sushi.classList.add('bounce');
  shadow.classList.add('bounce');

  sushi.addEventListener('animationend', () => {
      sushi.classList.remove('bounce');
      shadow.classList.remove('bounce');
  }, { once: true });
}
