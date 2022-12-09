function toggleTableSkills() {
    var table = document.getElementById("tableSkills");
    var button = document.getElementById("toggleButtonSkills");
    if (table.style.display === "none") {
      table.style.display = "table";
      button.innerHTML = "-";
    } else {
      table.style.display = "none";
      button.innerHTML = "+";
    }
}

function toggleTableCertifications() {
  var table = document.getElementById("tableCertifications");
  var button = document.getElementById("toggleButtonCertifications");
  if (table.style.display === "none") {
    table.style.display = "table";
    button.innerHTML = "-";
  } else {
    table.style.display = "none";
    button.innerHTML = "+";
  }
}