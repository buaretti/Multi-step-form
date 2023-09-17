function resetStyles() {
  const arcade = document.getElementById("arcade");
  const advanced = document.getElementById("advanced");
  const pro = document.getElementById("pro");

  arcade.style.borderColor = "hsl(229, 24%, 87%)"; // Cor da borda padrão
  arcade.style.backgroundColor = "white"; // Cor de fundo padrão

  advanced.style.borderColor = "hsl(229, 24%, 87%)"; // Cor da borda padrão
  advanced.style.backgroundColor = "white"; // Cor de fundo padrão

  pro.style.borderColor = "hsl(229, 24%, 87%)"; // Cor da borda padrão
  pro.style.backgroundColor = "white"; // Cor de fundo padrão
}

function arcadeClick() {
  resetStyles();

  const arcade = document.getElementById("arcade");
  arcade.style.borderColor = "hsl(243, 100%, 62%)";
  arcade.style.backgroundColor = "hsl(231, 100%, 99%)";
}

function advancedClick() {
  resetStyles();

  const advanced = document.getElementById("advanced");
  advanced.style.borderColor = "hsl(243, 100%, 62%)";
  advanced.style.backgroundColor = "hsl(231, 100%, 99%)";
}

function proClick() {
  resetStyles();

  const pro = document.getElementById("pro");
  pro.style.borderColor = "hsl(243, 100%, 62%)";
  pro.style.backgroundColor = "hsl(231, 100%, 99%)";
}

document.addEventListener("DOMContentLoaded", function () {
  var range = document.getElementById("range");
  var m = document.getElementById("m");
  var y = document.getElementById("y");
  var arcadeMonth = document.getElementById("arcademonth");
  var advancedMonth = document.getElementById("advancedmonth");
  var proMonth = document.getElementById("promonth");

  function setColors() {
    if (range.value == 0) {
      m.style.color = "hsl(213, 96%, 18%)";
      y.style.color = "hsl(231, 11%, 63%)";

      arcadeMonth.textContent = "$9/mo";
      advancedMonth.textContent = "$12/mo";
      proMonth.textContent = "$15/mo";
    } else if (range.value == 1) {
      m.style.color = "hsl(231, 11%, 63%)";
      y.style.color = "hsl(213, 96%, 18%)";
      arcadeMonth.textContent = "$90/yr";
      advancedMonth.textContent = "$120/yr";
      proMonth.textContent = "$150/yr";
    }
  }

  setColors();

  range.addEventListener("input", function () {
    setColors();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var range = document.getElementById("range");
  var monthsfree = document.querySelectorAll(".monthsfree");

  function setDisplay() {
    if (range.value == 0) {
      monthsfree.forEach(function (element) {
        element.style.display = "none";
      });
    } else if (range.value == 1) {
      monthsfree.forEach(function (element) {
        element.style.display = "block";
      });
    }
  }

  setDisplay();

  range.addEventListener("input", function () {
    setDisplay();
  });
});

const path = window.location.pathname;

const match = path.match(/page(\d+)\.html/);

if (match) {
  const currentPage = parseInt(match[1], 10);
  
  const circles = document.querySelectorAll(".circle");
  circles.forEach((circle, index) => {
    if (index + 1 === currentPage) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  
  console.log("Página atual: " + currentPage);
} else {
  console.log("Página não encontrada ou não possui um número.");
}
