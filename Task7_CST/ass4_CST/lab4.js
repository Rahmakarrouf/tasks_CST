const data = [
  { id: "201", name: "Sara Ali", age: 19 },
  { id: "202", name: "Youssef Karim", age: 23 },
  { id: "203", name: "Layla Samir", age: 20 },
  { id: "204", name: "Tariq Mahmoud", age: 22 },
  { id: "205", name: "Dina Hassan", age: 21 },
  { id: "206", name: "Amir Fathy", age: 24 },
];

const dropdown = document.querySelector("#studentSelect");

for (const student of data) {
  const optionEl = document.createElement("option");
  optionEl.value = student.id;
  optionEl.textContent = student.id;
  dropdown.appendChild(optionEl);
}

dropdown.addEventListener("change", e => {
  const selectedId = e.target.value;
  const info = document.querySelector("#studentData");
  const stu = data.find(item => item.id === selectedId);

  info.innerHTML = stu ? `
    <p>Name: <strong>${stu.name}</strong></p>
    <p>Age: <strong>${stu.age}</strong></p>
  ` : "";
});
