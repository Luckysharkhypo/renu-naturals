const staggeringEffect = () => {
  const selectedProducts = document.querySelectorAll(
    ".selected-products .staggering-effect"
  );

  for (let i = 0; i < selectedProducts.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = selectedProducts[i].getBoundingClientRect().top;
    const offset = 50;

    if (elementTop < windowHeight - offset) {
      selectedProducts[i].classList.add("is-shown");
    } else {
      selectedProducts[i].classList.remove("is-shown");
    }
  }

  const storeProduct = document.querySelectorAll(
    ".our-store .staggering-effect"
  );

  for (let i = 0; i < storeProduct.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = storeProduct[i].getBoundingClientRect().top;
    const offset = 50;

    if (elementTop < windowHeight - offset) {
      storeProduct[i].classList.add("is-shown");
    } else {
      storeProduct[i].classList.remove("is-shown");
    }
  }
};

window.addEventListener("scroll", staggeringEffect);
