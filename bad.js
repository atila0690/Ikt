const products = [
    {
      name: "Product 1",
      price: 10000,
      image: "https://cdn.discordapp.com/attachments/1088384919157350481/1103031398320840854/pelda.png"
    },
    {
      name: "Product 2",
      price: 20000,
      image: "https://cdn.discordapp.com/attachments/1088384919157350481/1103031398320840854/pelda.png"
    },
    {
      name: "Product 3",
      price: 30000,
      image: "https://cdn.discordapp.com/attachments/1088384919157350481/1103031398320840854/pelda.png"
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
