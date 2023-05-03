const products = [
    {
      name: "Product 1",
      price: 2400,
      image: "https://behir.hu/web/content/media/2020/08/bundas_kenyer-800x450.jpg"
    },
    {
      name: "Product 2",
      price: 1800,
      image: "https://www.glutenmentesetrend.hu/wp-content/uploads/vaddisznoporkolt-glutenmentes-galuskaval-920x425.jpg"
    },
    {
      name: "Product 3",
      price: 2900,
      image: "https://kep.cdn.indexvas.hu/1/0/1589/15893/158937/15893795_15f3f0db0f9ba4ddd69a72b997b6ac09_wm.jpg"
    }
  ];


const link = document.getElementById("link");
const image = document.getElementById("image");

link.addEventListener("click", function() {
  window.location.href = "Shop.html";
});

image.addEventListener("click", function(event) {
  event.stopPropagation();
});
