// acordeão

const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.accordion-body');
        body.classList.toggle('active');
    })
})


//checkbox

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const fd = new FormData(form);

  let check = [];
  document.querySelectorAll('[type="checkbox"]').forEach(item => {
    if (item.checked === true) {
      check.push(item.value);
    }
  })

  fd.append('check', JSON.stringify(check));

  console.log(Object.fromEntries(fd)); 
  
  console.log(Array.from(fd));
});