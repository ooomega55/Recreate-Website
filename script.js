function clearName() {
  if (
    document.getElementById("nameField").value == "Your Name"
  ) {
    document.getElementById("nameField").value = "";
  }
}

function resetName() {
  if (document.getElementById("nameField").value == "") {
    document.getElementById("nameField").value = "Your Name";
  }
}

function clearPhone() {
  if (
    document.getElementById("phoneField").value == "Your Title"
  ) {
    document.getElementById("phoneField").value = "";
  }
}

function resetPhone() {
  if (
    document.getElementById("phoneField").value == ""
  ) {
    document.getElementById("phoneField").value = "Your Title";
  }
}

function clearWeb() {
  if (
    document.getElementById("webField").value == "Your Comment"
  ) {
    document.getElementById("webField").value = "";
  }
}

function resetWeb() {
  if (
    document.getElementById("webField").value == ""
  ) {
    document.getElementById("webField").value = "Your Comment";
  }
}

function alertThanks() {
  alert('Thank you for the info');
}