const imgsAll = document.images;
console.log("Images using document.images:");
for (const img of imgsAll) {
  console.log(img);
}

const imgsSpecial = document.querySelectorAll("img.img2");
console.log("Images with .img2 class:");
for (const i of imgsSpecial) {
  console.log(i);
}

const dropdownCities = document.getElementById("cityDropdown");
console.log("Dropdown options:");
if (dropdownCities) {
  for (const option of dropdownCities.options) {
    console.log(`${option.text} (${option.value})`);
  }
}

const allTables = document.getElementsByTagName("table");
const second = allTables[1];
console.log("Second table - all rows:");
for (const row of second.rows) {
  console.log(row);
}

const blueElements = document.getElementsByClassName("fontBlue");
console.log("Blue class elements:");
for (const elem of blueElements) {
  console.log(elem);
}
