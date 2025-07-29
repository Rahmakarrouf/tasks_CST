const data = ['1', '1', '3', '4', '5', '6', '7'];

const container = document.getElementById('dataContainer');

data.map((val, idx) => {
    const element = document.createElement('p');
    element.textContent = `Number: ${val}`;
    element.classList.add(idx % 2 ? 'odd' : 'even');
    container.appendChild(element);
});
