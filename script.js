// Configuração da navegação e títulos das páginas
const navItems = document.querySelectorAll(".nav-item");
const pageTitle = document.querySelector(".page-title");
const pageTitles = {
  home: "Página Inicial",
  documentos: "Meus Documentos",
  notificacoes: "Notificações",
  perfil: "Meu Perfil",
};

// Adiciona evento de clique para cada item da navegação
navItems.forEach(item => {
  item.addEventListener("click", function () {
    // Remove a classe 'active' de todos os itens
    navItems.forEach(nav => nav.classList.remove("active"));
    // Adiciona a classe 'active' ao item clicado
    this.classList.add("active");
    // Atualiza o título da página baseado no item clicado
    const pageName = this.getAttribute("data-page");
    pageTitle.textContent = pageTitles[pageName];
  });
});

// Configuração do modal de adicionar arquivo
const addButton = document.getElementById("addButton");
const fileModal = document.getElementById("fileModal");
const chooseFileBtn = document.getElementById("chooseFileBtn");

// Abre o modal quando o botão de adicionar é clicado
addButton.addEventListener("click", () => {
  fileModal.classList.add("active");
});

// Fecha o modal quando clica fora dele
fileModal.addEventListener("click", event => {
  if (event.target === fileModal) {
    fileModal.classList.remove("active");
  }
});

// Manipula o clique no botão de escolher arquivo
chooseFileBtn.addEventListener("click", () => {
  alert("Selecionando um arquivo...");
  fileModal.classList.remove("active");
});