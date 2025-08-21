import React, { useState, useMemo } from 'react';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const commands = useMemo(() => [
    {
      category: 'Configuración y Versión',
      items: [
        { cmd: 'Git --version', desc: 'Para visualizar la versión actual. Porque, ¿quién no quiere saber qué tan viejo es su Git?' },
        { cmd: 'Git -v', desc: 'Para visualizar la versión actual.' },
        { cmd: 'Git -h', desc: 'Para visualizar el panel de ayuda. ¡Como si alguna vez lo leyéramos!' },
        { cmd: 'Git --help', desc: 'Para visualizar el panel de ayuda.' },
        { cmd: 'Git config --global user.name "nombre"', desc: 'Configuración inicial de control mediante usuario y email. ¡Importante! Si no haces esto, Git pensará que eres un fantasma.' },
        { cmd: 'Git config --global user.email "correo"', desc: 'Configuración inicial de control mediante usuario y email.' },
      ],
    },
    {
      category: 'Inicialización y Ramas',
      items: [
        { cmd: 'Git init', desc: 'Inicializa Git en un repositorio raíz. ¡Prepárate para la magia (y una carpeta oculta)!' },
        { cmd: 'Git branch -m "nombre nuevo"', desc: 'Renombra la rama principal. Porque "master" es tan del siglo pasado.' },
      ],
    },
    {
      category: 'Control de Cambios (¡La parte divertida!)',
      items: [
        { cmd: 'Git status', desc: 'Nos muestra los últimos cambios. ¡Tu chismoso personal de archivos!' },
        { cmd: 'Git add', desc: 'Prepara los archivos antes de subirlos al repositorio. Como el precalentamiento antes de un maratón.' },
        { cmd: 'Git commit', desc: 'Sube los archivos al repositorio. ¡Pero cuidado, te abrirá un bloc de notas para que escribas tu novela!' },
        { cmd: 'Git commit -m "comentario de los cambios realizados"', desc: 'La versión para los que no tienen tiempo para novelas.' },
      ],
    },
    {
      category: 'Historial y Viajes en el Tiempo',
      items: [
        { cmd: 'Git log', desc: 'Muestra el historial de cambios. ¡Tu máquina del tiempo personal!' },
        { cmd: 'Git log --graph', desc: 'Visualiza las ramas. Porque a veces, la vida es un árbol.' },
        { cmd: '--pretty=oneline', desc: 'Para que tu log se vea bonito y ordenado. ¡No queremos un desastre visual!' },
        { cmd: '--decorate --all --oneline', desc: 'Para que tu log se vea bonito y ordenado.' },
        { cmd: 'Git checkout "nombre del archivo"', desc: 'Vuelve al fichero más reciente. ¡Como si nunca hubieras metido la pata!' },
        { cmd: 'Git reset', desc: 'Regresa todos los ficheros a una versión anterior. ¡El botón de "deshacer" de la vida real!' },
      ],
    },
    {
      category: 'Trucos de Magia (y Comandos Útiles)',
      items: [
        { cmd: 'Git config --global alias.nombre_del_alias "su funcion"', desc: 'Guarda una función para llamarla cuando sea necesario. ¡Sé el mago de Git!' },
        { cmd: '.gitignore', desc: 'Aísla carpetas o archivos que no quieres cargar al repositorio. ¡Porque no todo el mundo necesita ver tus archivos temporales!' },
        { cmd: 'touch .gitignore', desc: 'Aísla carpetas o archivos que no quieres cargar al repositorio.' },
        { cmd: 'Git diff', desc: 'Nos da una comparación en una vista previa. ¡Para que veas lo que hiciste (y lo que no debiste hacer)!' },
        { cmd: 'Git checkout (nombre del archivo o código de versión)', desc: 'Restaura a una versión previa. ¡Tu salvavidas cuando todo parece perdido!' },
        { cmd: 'Git checkout HEAD', desc: 'Declara la versión en la que te encuentras como la principal. ¡El "aquí me quedo" de Git!' },
      ],
    },
  ], []);

  const allCommandItems = useMemo(() => commands.flatMap(cat => cat.items), [commands]);

  const filteredSuggestions = useMemo(() => {
    if (!searchTerm) return [];
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const uniqueSuggestions = new Set();
    allCommandItems.forEach(item => {
      if (item.cmd.toLowerCase().includes(lowerCaseSearchTerm)) {
        uniqueSuggestions.add(item.cmd);
      } else if (item.desc.toLowerCase().includes(lowerCaseSearchTerm)) {
        uniqueSuggestions.add(item.cmd); // Suggest the command itself
      }
    });
    return Array.from(uniqueSuggestions).slice(0, 5); // Limit to 5 suggestions
  }, [searchTerm, allCommandItems]);

  const filteredCommands = useMemo(() => {
    return commands
      .map((category) => ({
        ...category,
        items: category.items.filter(
          (item) =>
            item.cmd.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.desc.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      }))
      .filter((category) => category.items.length > 0);
  }, [searchTerm, commands]);

  const handleSelectSuggestion = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-2xl p-8">
        <header className="mb-8 border-b border-gray-700 pb-6">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2">
            Comandos Git: Tu Guía Definitiva (o al menos, la que te pasé)
          </h1>
          <p className="text-gray-400 text-lg">
            <span className="font-semibold">martes, 5 de agosto de 2025</span> | 15:11
          </p>
        </header>

        <div className="mb-8 relative">
          <input
            type="text"
            placeholder="Busca tu comando... si es que lo recuerdas"
            className="w-full p-4 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 100)} // Delay to allow click on suggestion
          />
          {showSuggestions && filteredSuggestions.length > 0 && (
            <ul className="absolute z-10 w-full bg-gray-700 border border-gray-600 rounded-lg mt-1 max-h-60 overflow-y-auto shadow-lg">
              {filteredSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="p-3 hover:bg-gray-600 cursor-pointer text-gray-200"
                  onMouseDown={() => handleSelectSuggestion(suggestion)} // Use onMouseDown to trigger before onBlur
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>

        <section className="space-y-8">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((category, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-inner">
                <h2 className="text-2xl font-bold text-purple-300 mb-4">
                  {category.category}
                </h2>
                <ul className="list-disc list-inside space-y-3 text-gray-300">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <span className="font-mono bg-gray-600 px-2 py-1 rounded text-sm">{item.cmd}</span>: {item.desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-400 text-lg p-8 bg-gray-700 rounded-lg shadow-inner">
              <p>¡Vaya! Parece que ese comando no existe... o tu ortografía necesita un "git reset --hard".</p>
            </div>
          )}
        </section>

        <footer className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-500 text-sm">
          <p>
            Hecho con amor (y mucho sarcasmo) por tu IA favorita.
          </p>
        </footer>
      </div>
    </div>
  );
}