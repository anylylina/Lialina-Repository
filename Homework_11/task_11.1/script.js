function createPythagorasTable(size) {
  let table = document.createElement("table");

  for (let i = 0; i <= size; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j <= size; j++) {
      let cell;

      if (i === 0 && j === 0) {
        cell = document.createElement("th");
      } else if (i === 0) {
        cell = document.createElement("th");
        cell.textContent = j;
      } else if (j === 0) {
        cell = document.createElement("th");
        cell.textContent = i;
      } else {
        cell = document.createElement("td");
        cell.textContent = i * j;
      }
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  document.getElementById("table-container").appendChild(table);
}

createPythagorasTable(10);
