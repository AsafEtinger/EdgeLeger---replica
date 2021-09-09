const pics = document.querySelector(".business-pic");

pics.addEventListener("click", function (e) {
  let currentPic = e.target.id;
  console.log(currentPic);
  const newClass = document.querySelector(`#${currentPic}`);
  newClass.classList.toggle("full-pic");
});
