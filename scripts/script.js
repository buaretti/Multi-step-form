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

// Função para marcar/desmarcar o checkbox e aplicar os estilos correspondentes
function toggleCheckboxStyles(checkbox, div, borderColor, backgroundColor) {
  const isChecked = checkbox.checked;

  if (isChecked) {
    div.style.borderColor = borderColor;
    div.style.backgroundColor = backgroundColor;
  } else {
    div.style.borderColor = "hsl(229, 24%, 87%)"; // Cor da borda padrão
    div.style.backgroundColor = "white"; // Cor de fundo padrão
  }
}

// Selecionando os elementos do DOM
const checkbox1 = document.querySelector(".custom-checkbox1 input[type='checkbox']");
const divOnService = document.getElementById("onservice");

const checkbox2 = document.querySelector(".custom-checkbox2 input[type='checkbox']");
const divStorage = document.getElementById("storage");

const checkbox3 = document.querySelector(".custom-checkbox3 input[type='checkbox']");
const divProfile = document.getElementById("profile");

// Adicionando eventos de clique para os checkboxes
checkbox1.addEventListener("click", function () {
  toggleCheckboxStyles(this, divOnService, "hsl(243, 100%, 62%)", "hsl(231, 100%, 99%)");
});

checkbox2.addEventListener("click", function () {
  toggleCheckboxStyles(this, divStorage, "hsl(243, 100%, 62%)", "hsl(231, 100%, 99%)");
});

checkbox3.addEventListener("click", function () {
  toggleCheckboxStyles(this, divProfile, "hsl(243, 100%, 62%)", "hsl(231, 100%, 99%)");
});

document.addEventListener("DOMContentLoaded", function () {
  // Função para atualizar os elementos com base no valor do range
  function updateElementsBasedOnRange(rangeValue) {
    const onService = document.getElementById("onservice");
    const storage = document.getElementById("storage");
    const profile = document.getElementById("profile");

    if (rangeValue == 1) {
      document.getElementById("onservicem").textContent = "+$10/yr";
      document.getElementById("storagem").textContent = "+$20/yr";
      document.getElementById("profilem").textContent = "+$20/yr";
    } else {
      // Mantém o texto atual
      document.getElementById("onservicem").textContent = "+$1/mo";
      document.getElementById("storagem").textContent = "+$2/mo";
      document.getElementById("profilem").textContent = "+$2/mo";
    }
  }

  // Obtém o valor do range do localStorage
  const rangeValue = localStorage.getItem("rangeValue");

  if (rangeValue !== null) {
    // Atualiza os elementos com base no valor do range
    updateElementsBasedOnRange(rangeValue);
  }
});