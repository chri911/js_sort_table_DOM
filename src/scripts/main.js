'use strict';

const table = document.querySelectorAll('table tbody tr');
const tbody = document.querySelector('table tbody');
const thead = document.querySelectorAll('table thead th');
const rows = [...table];

const convert = (string) => {
  return Number(string.replace(/[$,]/g, ''));
};

thead.forEach((title, index) => title.addEventListener('click', () => {
  const sorted = rows.sort(
    (currentRow, nextRow) => {
      return convert(rows[0].cells[index].innerText) > 0
        ? convert(currentRow.cells[index].innerText)
        - convert(nextRow.cells[index].innerText)
        : currentRow.cells[index].innerText.localeCompare(
          nextRow.cells[index].innerText);
    });

  tbody.append(...sorted);
}));
