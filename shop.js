const navLinks = document.querySelectorAll('.shop nav ul li a');
const sections = document.querySelectorAll('.shop section');

// Add event listeners to nav links
navLinks.forEach(link => {
link.addEventListener('click', e => {
    e.preventDefault();

    // Remove active class from all links
    navLinks.forEach(link => link.classList.remove('active'));

    // Add active class to clicked link
    link.classList.add('active');

    // Hide all sections
    sections.forEach(section => section.style.display = 'none');

    // Show clicked section
    const target = link.getAttribute('href');
    const section = document.querySelector(target);
    section.style.display = 'block';
});
});

function filterCategory(category) {
    const productList = document.getElementById('product-list');
    const productItems = productList.querySelectorAll('.product-item');
    
    productItems.forEach(item => {
      if (category === 'all') {
        item.style.display = 'block';
      } else if (item.classList.contains(category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
    
    const categoryLinks = document.querySelectorAll('#categories a');
    categoryLinks.forEach(link => {
      if (link.classList.contains('active')) {
        link.classList.remove('active');
      }
      if (link.getAttribute('onclick').includes(category)) {
        link.classList.add('active');
      }
    });
  }
  