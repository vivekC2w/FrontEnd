let currentUser = {}; // Define currentUser object

// Function to make an API request to get a random user
async function getRandomUser() {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  return data.results[0];
}

// Function to display the user's info
function displayUserInfo(user) {
  const fullNameElement = document.getElementById("full-name");
  const userPhotoElement = document.getElementById("user-photo");
  const additionalInfoElement = document.getElementById("additional-info");
  const infoContentElement = document.getElementById("info-content");

  fullNameElement.textContent = `${user.name.first} ${user.name.last}`;
  userPhotoElement.src = user.picture.large;

  // Reset additional info
  additionalInfoElement.style.display = "none";
  infoContentElement.textContent = "";
}

// Function to display additional user info based on button click
function displayAdditionalInfo(event) {
  const attr = event.target.dataset.attr;
  const infoContentElement = document.getElementById("info-content");

  switch (attr) {
    case "age":
      infoContentElement.textContent = `Age: ${currentUser.dob.age}`;
      break;
    case "email":
      infoContentElement.textContent = `Email: ${currentUser.email}`;
      break;
    case "phone":
      infoContentElement.textContent = `Phone: ${currentUser.phone}`;
      break;
    default:
      break;
  }

  const additionalInfoElement = document.getElementById("additional-info");
  additionalInfoElement.style.display = "block";
}

// Function to handle the "New User" button click
async function handleGetUserClick() {
  const user = await getRandomUser();
  currentUser = user; // Update currentUser object
  displayUserInfo(user);
}

// Event listener for the "New User" button
document
  .getElementById("getUser")
  .addEventListener("click", handleGetUserClick);

// Event listeners for the additional info buttons
const buttons = document.querySelectorAll("button[data-attr]");
buttons.forEach((button) => {
  button.addEventListener("click", displayAdditionalInfo);
});

// Initial page load
handleGetUserClick();
