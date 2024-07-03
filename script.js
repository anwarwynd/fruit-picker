const fruit = document.querySelector("#fruit");

const message = document.querySelector("#message");

const fruits = ["apple", "orange", "grape", "papaya", "watermelon"];

for (let index = 0; index < fruits.length; index++) {
  fruit.innerHTML +=
    "<option value='" + fruits[index] + "'>" + fruits[index] + "</option>";
  // <option value="apple">apple</option>
}

function sendMessage() {
  const name = document.querySelector("#name").value;
  if (name && fruit.value !== "nothing") {
    message.innerHTML = name + "! " + fruit.value + " is your favourite fruit";

  } else if (!name) {
    alert("please enter your sweet name");
  } else if (fruit.value === "nothing") {
    alert("please select a fruit");
  } else alert("something went wrong!");
}
