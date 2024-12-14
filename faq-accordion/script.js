const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');

    const icon = item.querySelector('.toggle-icon');
    if (item.classList.contains('active')) {
      icon.src = './images/icon-minus.svg'; 
    } else {
      icon.src = './images/icon-plus.svg';
    }
  });
});