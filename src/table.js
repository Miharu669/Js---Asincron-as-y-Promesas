import { fetchData } from "./async.js";

export function createTableRow(todo) {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${todo.title}</td>
    <td>${todo.priority}</td>
    <td>${todo.isDone ? "Sí" : "No"}</td>
  `;

  return row;
}

export async function loadData() {
  try {
    const data = await fetchData("/src/data.json");
    const tableBody = document.querySelector("#todo-table tbody");

    if (tableBody) {
      tableBody.innerHTML = "";
      data.results.forEach((todo) => {
        const row = createTableRow(todo);
        tableBody.appendChild(row);
      });
    } else {
      console.error("No se encontró el elemento tbody en la tabla.");
    }
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
}
