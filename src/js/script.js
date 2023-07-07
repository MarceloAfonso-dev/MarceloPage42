var bannerItems = document.querySelectorAll(".banner-item");
var currentIndex = 0;

function changeBannerItem() {
  bannerItems[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % bannerItems.length;
  bannerItems[currentIndex].classList.add("active");
}

// Chame a função changeBannerItem a cada 3 segundos (ajuste o intervalo conforme necessário)
setInterval(changeBannerItem, 3000);