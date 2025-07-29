const tbls = document.getElementsByTagName("table");
const t2 = tbls[1];
const firstLink = t2.querySelector("a");

firstLink.href = "https://studyzone.org";
firstLink.textContent = "Study Zone";

const pics = document.getElementsByTagName("img");
const imgLast = pics.item(pics.length - 1);
imgLast.style.border = "2px solid teal";

function alertCheckedCheckboxes() {
  const formBox = document.getElementById("userData");
  const marked = formBox.querySelectorAll("input[type='checkbox']:checked");
  let selected = [];
  marked.forEach((checkbox) => {
    selected.push(checkbox.value);
  });
  alert("Chosen values: " + selected.join(" - "));
}

const divExample = document.querySelector("#example");
if (divExample) {
  divExample.style.backgroundColor = "#ffe0b3";
}
