let selectedCount = 0;

function toggleColor(id) {
    const box = document.getElementById(id);
    if (selectedCount < 4 || box.style.backgroundColor === 'green') {
        if (box.style.backgroundColor === 'green')
         {
            box.style.backgroundColor = '#0307121A'; // Reset to original color
            selectedCount--;
        } 
        else {
            box.style.backgroundColor = 'green'; // Change to green
            selectedCount++;
        }
    }
    if (selectedCount >= 4) {
      alert("You can only select up to 4 seats.");
      return;
  }
}

// ---------------seat count decrease---------------------//

function decreaseSeatCount() {
  var spanElement = document.getElementById("seatCount");
  var currentCount = parseInt(spanElement.textContent);

  if (currentCount > 0) {
      currentCount--;
      spanElement.textContent = currentCount;
  } else {
      alert("Seat count cannot be negative.");
  }
}

// -------------seat count increase---------------------//

function increaseSeatCount() {
  var seatCountSpan = document.getElementById("seat-Count");
  var currentSeatCount = parseInt(seatCountSpan.textContent);
  var newSeatCount = currentSeatCount + 1;
  seatCountSpan.textContent = newSeatCount;
}

// ---------------sum of price ---------------------------//
var seatPrice = 550;
var selectedSeats = 0;
var totalPrice = 0;

function addSeatPrice(seatButton) {
    if (selectedSeats >= 4) {
        alert("You have already selected 4 seats.");
        return;
    }
    totalPrice += seatPrice;
    selectedSeats++;
    document.getElementById("totalPrice").textContent = totalPrice;
    seatButton.disabled = true;
}

function calculateTotal() {
    alert("Total price for 4 seats: $" + totalPrice);
}


// ---------------success -------------------------//
function toggleSection() {
  var section = document.getElementById("hiddenSection");
  
  if (section.style.display === "none") {
      section.style.display = "block";
  } else {
      section.style.display = "none";
  }
}
