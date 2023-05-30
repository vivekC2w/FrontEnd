const perPage = 5;
let currentPage = 1;

function fetchIssues(page) {
  const apiUrl = `https://api.github.com/repositories/1296269/issues?page=${page}&per_page=${perPage}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      displayIssues(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function displayIssues(issues) {
  const issueContainer = document.getElementById("issue_container");
  issueContainer.innerHTML = "";

  issues.forEach((issue) => {
    const issueName = issue.title;
    const listItem = document.createElement("li");
    listItem.textContent = issueName;
    issueContainer.appendChild(listItem);
  });
}

function updatePageIndicator() {
  const pageIndicator = document.getElementById("page_indicator");
  pageIndicator.textContent = `Page number ${currentPage}`;
}

function loadNextPage() {
  currentPage++;
  updatePageIndicator();
  fetchIssues(currentPage);
}

function loadPreviousPage() {
  if (currentPage > 1) {
    currentPage--;
    updatePageIndicator();
    fetchIssues(currentPage);
  }
}

document.getElementById("load_next").addEventListener("click", loadNextPage);
document
  .getElementById("load_prev")
  .addEventListener("click", loadPreviousPage);

// Initial page load
fetchIssues(currentPage);
