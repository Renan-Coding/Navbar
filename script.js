// Navegação
const navItems = document.querySelectorAll(".nav-item");
const pageTitle = document.querySelector(".page-title");
const pageTitles = {
  home: "Página Inicial",
  documentos: "Meus Documentos",
  notificacoes: "Notificações",
  perfil: "Meu Perfil",
};
navItems.forEach(item => {
  item.addEventListener("click", function () {
    navItems.forEach(nav => nav.classList.remove("active"));
    this.classList.add("active");
    const pageName = this.getAttribute("data-page");
    pageTitle.textContent = pageTitles[pageName];
  });
});

// Modal de adicionar arquivo
const addButton = document.getElementById("addButton");
const fileModal = document.getElementById("fileModal");
const chooseFileBtn = document.getElementById("chooseFileBtn");

addButton.addEventListener("click", () => {
  fileModal.classList.add("active");
});

fileModal.addEventListener("click", event => {
  if (event.target === fileModal) {
    fileModal.classList.remove("active");
  }
});

chooseFileBtn.addEventListener("click", () => {
  alert("Selecionando um arquivo...");
  fileModal.classList.remove("active");
});