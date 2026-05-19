const switchers = document.querySelectorAll('.switcher');

switchers.forEach(btn => {
  btn.addEventListener('click', () => {

    const current = document.querySelector('.form-wrapper.is-active');
    const target = btn.parentElement;

    if (current === target) return;

    current.classList.add('is-leaving');

    setTimeout(() => {
      current.classList.remove('is-active', 'is-leaving');
      target.classList.add('is-active', 'is-entering');

      setTimeout(() => {
        target.classList.remove('is-entering');
      }, 300);

    }, 200);

  });
});
