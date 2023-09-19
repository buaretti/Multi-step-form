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

// Mapeie "index.html" para "page1.html"
const match = path.match(/(page(\d+)\.html|index\.html)/);

if (match) {
  const currentPage = parseInt(match[2] || 1, 10); // Use 1 se não houver correspondência

  if (currentPage === 5 || path.endsWith("page5.html")) {
    currentPage = 4;
  }

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
const checkbox1 = document.querySelector(
  ".custom-checkbox1 input[type='checkbox']"
);
const divOnService = document.getElementById("onservice");

const checkbox2 = document.querySelector(
  ".custom-checkbox2 input[type='checkbox']"
);
const divStorage = document.getElementById("storage");

const checkbox3 = document.querySelector(
  ".custom-checkbox3 input[type='checkbox']"
);
const divProfile = document.getElementById("profile");

// Adicionando eventos de clique para os checkboxes
checkbox1.addEventListener("click", function () {
  toggleCheckboxStyles(
    this,
    divOnService,
    "hsl(243, 100%, 62%)",
    "hsl(231, 100%, 99%)"
  );
});

checkbox2.addEventListener("click", function () {
  toggleCheckboxStyles(
    this,
    divStorage,
    "hsl(243, 100%, 62%)",
    "hsl(231, 100%, 99%)"
  );
});

checkbox3.addEventListener("click", function () {
  toggleCheckboxStyles(
    this,
    divProfile,
    "hsl(243, 100%, 62%)",
    "hsl(231, 100%, 99%)"
  );
});

document.addEventListener("DOMContentLoaded", function () {
  var range = document.getElementById("range"); // Seu controle deslizante de range na Page 2
  var page3Elements = {
    // Elementos de texto na Page 3
    onservicem: document.getElementById("onservicem"),
    storagem: document.getElementById("storagem"),
    profilem: document.getElementById("profilem"),
  };

  // Função para atualizar os elementos de texto na Page 3 com base no valor do range
  function updatePage3Text() {
    var rangeValue = parseFloat(range.value);

    if (rangeValue === 0) {
      // Se o range for 0
      page3Elements.onservicem.textContent = "$1/mo"; // Atualize o texto de #onservicem
      page3Elements.storagem.textContent = "$2/mo"; // Atualize o texto de #storagem
      page3Elements.profilem.textContent = "$2/mo"; // Atualize o texto de #profilem
    } else if (rangeValue === 1) {
      // Se o range for 1
      page3Elements.onservicem.textContent = "+$10/yr"; // Atualize o texto de #onservicem
      page3Elements.storagem.textContent = "+$20/yr"; // Atualize o texto de #storagem
      page3Elements.profilem.textContent = "+$20/yr"; // Atualize o texto de #profilem
    }
  }

  // Adicione um ouvinte de evento ao controle deslizante de range
  range.addEventListener("input", updatePage3Text);

  // Chame a função inicialmente para definir os valores corretos na inicialização
  updatePage3Text();
});
