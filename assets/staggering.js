const showSelectedProducts = () => {
  const products = document.querySelectorAll(
    ".selected-products .staggering-selected-product"
  );

  for (let i = 0; i < products.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = products[i].getBoundingClientRect().top;
    const offset = 50;
    console.log(windowHeight, elementTop);

    if (elementTop < windowHeight - offset) {
      products[i].classList.add("is-shown");
    } else {
      products[i].classList.remove("is-shown");
    }
  }
};

window.addEventListener("scroll", showSelectedProducts);
