const lis = document.querySelectorAll("li");

lis.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("selected");
  });

  element.addEventListener("dblclick", () => {
    element.classList.toggle("hidden");
  });
});
