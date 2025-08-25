const main = document.querySelector("main"); //Trae el id del contenedor actual
const languageSelect = document.getElementById("languageSelect");
const searchInput = document.getElementById("searchInput");

// Función para renderizar contenido
function renderContent(lang) {
  main.innerHTML = "";

  // Llama al id del contenerdor para poder usarlo en la funcion
  const content = main.id === "content_git" ? content_git : content_github;

  content[lang].forEach((section) => {
    const sectionEl = document.createElement("section");
    sectionEl.className = "bg-white p-5 rounded-2xl shadow-md mb-4";

    // Configuracion de HTML
    const descriptionHtml = section.description
      ? `<p class="text-sm text-gray-600 mt-2 mb-2">${section.description}</p>`
      : "";

    const itemsHtml = section.items
      .map(
        (item) => `<li><code class="bg-gray-200 px-2 py-1 rounded">${item}</code></li>`
      )
      .join("");

    sectionEl.innerHTML = `
      <h2 class="text-xl font-semibold text-blue-600">${section.title}</h2>
      ${descriptionHtml}
      <ul class="list-disc pl-6 mt-2 space-y-1">
        ${itemsHtml}
      </ul>
    `;

    main.appendChild(sectionEl);
  });

  filterSections(); // Mantener filtro activo después de cambiar idioma
}

// Función para filtrar secciones
function filterSections() {
  // Llama al id del contenerdor para poder usarlo en la funcion
  const content = main.id === "content_git" ? content_git : content_github;
  const query = searchInput.value.toLowerCase();
  const sections = main.querySelectorAll("section");

  sections.forEach((section, index) => {
    const titleText = content[languageSelect.value][index].title.toLowerCase();
    section.style.display = titleText.includes(query) ? "block" : "none";
  });
}

// Eventos
languageSelect.addEventListener("change", (e) => renderContent(e.target.value));
searchInput.addEventListener("input", filterSections);

// Render inicial
renderContent("es");
