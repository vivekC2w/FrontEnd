// Assuming these are the async functions representing the APIs
function createOrder() {
  return new Promise((resolve) => {
    // Simulating API call
    setTimeout(() => {
      const orderId = "12345"; // Dummy orderId
      resolve(orderId);
    }, 1000);
  });
}

function proceedToPayment(orderId) {
  return new Promise((resolve) => {
    // Simulating API call
    setTimeout(() => {
      const paymentInfo = {
        orderId: orderId,
        paymentId: "67890", // Dummy paymentId
      };
      resolve(paymentInfo);
    }, 1000);
  });
}

function showOrderSummary(paymentInfo) {
  return new Promise((resolve) => {
    // Simulating API call
    setTimeout(() => {
      const orderSummary = {
        orderId: paymentInfo.orderId,
        paymentId: paymentInfo.paymentId,
        totalAmount: 100, // Dummy totalAmount
      };
      resolve(orderSummary);
    }, 1000);
  });
}

function updateWalletBalance(orderSummary) {
  return new Promise((resolve) => {
    // Simulating API call
    setTimeout(() => {
      const walletBalance = 500; // Dummy wallet balance
      resolve(walletBalance);
    }, 1000);
  });
}

// Creating the promise chain
createOrder()
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then((orderSummary) => updateWalletBalance(orderSummary))
  .then((walletBalance) => {
    console.log("Wallet balance updated:", walletBalance);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
