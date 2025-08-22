const main = document.getElementById("content");
const languageSelect = document.getElementById("languageSelect");
const searchInput = document.getElementById("searchInput");

// Función para renderizar contenido
function renderContent(lang) {
  main.innerHTML = "";
  content[lang].forEach((section) => {
    const sectionEl = document.createElement("section");
    sectionEl.className = "bg-white p-5 rounded-2xl shadow-md mb-4";

    let html = `<h2 class="text-xl font-semibold text-blue-600">${section.title}</h2>`;
    if (section.description) {
      html += `<p class="text-sm text-gray-600 mt-2 mb-2">${section.description}</p>`;
    }
    html += '<ul class="list-disc pl-6 mt-2 space-y-1">';
    section.items.forEach((item) => {
      html += `<li><code class="bg-gray-200 px-2 py-1 rounded">${item}</code></li>`;
    });
    html += "</ul>";

    sectionEl.innerHTML = html;
    main.appendChild(sectionEl);
  });

  filterSections(); // Mantener filtro activo después de cambiar idioma
}

// Función para filtrar secciones
function filterSections() {
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
