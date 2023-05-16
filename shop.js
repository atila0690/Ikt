function filterCategory(category) {
  const productList = document.getElementById('product-list');
  const productItems = productList.getElementsByClassName('product-item');

  for (let i = 0; i < productItems.length; i++) {
    const item = productItems[i];
    const itemCategory = item.classList[1]; 

    if (category === 'all' || itemCategory === category) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  }

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
