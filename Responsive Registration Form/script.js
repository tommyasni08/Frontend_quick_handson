const form = document.querySelector("form"),
  nextBtn = form.querySelector(".nextBtn"),
  backBtn = form.querySelector(".backBtn"),
  allInput = form.querySelectorAll(".first input");

nextBtn.addEventListener("click", () => {
  for (let input of allInput) {
    if (input.value != "") {
      form.classList.add("secActive");
    } else {
      form.classList.remove("secActive");
      return;
    }
  }

  // allInput.forEach((input) => {
  //   console.log(input.value);
  //   if (input.value != "") {
  //     form.classList.add("secActive");
  //   } else {
  //     form.classList.remove("secActive");
  //     return;
  //   }
  // });
});

backBtn.addEventListener("click", () => {
  form.classList.remove("secActive");
});
