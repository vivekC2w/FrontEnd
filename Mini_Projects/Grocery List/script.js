function calcTotal() {
  const rows = document.querySelectorAll("tbody tr");
  let sum = 0;
  for (let i = 0; i < rows.length; i++) {
    const price = parseFloat(
      rows[i].querySelector('[data-ns-test="price"]').textContent
    );
    sum += price;
  }
  const grandTotalRow = document.querySelector('[data-ns-test="grandTotal"]');
  if (grandTotalRow) {
    grandTotalRow.textContent = sum;
  } else {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td>Grand Total</td><td data-ns-test="grandTotal">${sum}</td>`;
    document.querySelector("tbody").appendChild(newRow);
  }
}
