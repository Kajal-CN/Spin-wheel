let wheel = document.querySelector(".wheel");
let spinButton = document.querySelector(".spinButton");
let result = document.getElementById("result");
let isSpinning = false;
let spinCount = 0;

spinButton.addEventListener("click", spin);
let isFirstSpinAfterRefresh = true;

function spin() {
  if (isSpinning) return;
  isSpinning = true;

  let rotationCount = 0;
  let targetRotation = isFirstSpinAfterRefresh ? 360 + 165 : Math.floor(Math.random() * 360) + 1080; // Target rotation is set to 45 degrees for the first spin after refresh, and random for subsequent spins
  let rotationSpeed = 10; // Speed of rotation (smaller value for slower rotation)

  let rotateInterval = setInterval(function () {
    if (rotationCount >= targetRotation) {
      clearInterval(rotateInterval);
      isSpinning = false;

      if (isFirstSpinAfterRefresh) {
        displayTryAgainMessage();
      } else {
        displayCouponPrize();
      }
      isFirstSpinAfterRefresh = false;
      return;
    }

    rotationCount += rotationSpeed;
    wheel.style.transform = `rotate(${rotationCount}deg)`;
  }, 10);

   //Hide the message box
   //result.innerHTML ="";

    // Hide the result
  result.style.display = "none";
}


  
  function displayTryAgainMessage() {
      // Show the result
  result.style.display = "block";

    let messageBox = document.createElement("div");
    messageBox.classList.add("message-box");
  
    let emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.innerText = "😔";
  
    let message = document.createElement("div");
    message.classList.add("message");
    message.innerText = "Better Luck Next Time You should Try again";
  
    messageBox.appendChild(emoji);
    messageBox.appendChild(message);
  
    result.innerHTML = "";
    result.appendChild(messageBox);
  }
  
  function displayCouponPrize() {

        // Show the result
  result.style.display = "block";

    let numbers = document.querySelectorAll(".number");
    let winningNumberIndex = Math.floor(Math.random() * numbers.length);
    let winningNumber = numbers[winningNumberIndex].innerText;
  
    if (winningNumber === "Better Luck Next Time") {
      displayTryAgainMessage();
    } else {
      let messageBox = document.createElement("div");
      messageBox.classList.add("message-box");
  
      let emoji = document.createElement("div");
      emoji.classList.add("emoji");
      emoji.innerText = "🎊🎉🥳😃🥳🎉🎊";
  
      let message = document.createElement("div");
      message.classList.add("message");
      message.innerText = `Congratulations! You won This  `;  
  
      messageBox.appendChild(emoji);
      messageBox.appendChild(message);
  
      result.innerHTML = "";
      result.appendChild(messageBox);
    }
  }
   
  // Hide the result initially
result.style.display = "none";





