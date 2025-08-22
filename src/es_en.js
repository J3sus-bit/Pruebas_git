const content_git = {
  es: [
    {
      title: "Ver versión de Git",
      description: "Comprobar la versión instalada de Git en tu sistema.",
      items: ["git --version", "git -v"],
    },
    {
      title: "Panel de ayuda",
      description: "Accede a la ayuda de Git y sus comandos.",
      items: ["git -h", "git --help"],
    },
    {
      title: "Configuración inicial",
      description:
        "Configura tu nombre y correo para poder realizar commits correctamente.",
      items: [
        'git config --global user.name "Tu Nombre"',
        'git config --global user.email "correo@ejemplo.com"',
      ],
    },
    {
      title: "Inicializar repositorio",
      description:
        "Crea un repositorio local para controlar versiones y cambios de tu proyecto.",
      items: [
        "git init",
        "Esto generará una carpeta oculta .git donde se almacenará el historial de cambios",
      ],
    },
    {
      title: "Rama principal",
      description:
        "La rama principal por defecto se llamaba 'master', aunque ahora suele ser 'main'. Puede renombrarse si es necesario.",
      items: ['git branch -m "nuevo-nombre"'],
    },
    {
      title: "Estado de archivos",
      description: "Revisar cambios y preparar archivos para commit.",
      items: [
        "git status - Muestra el estado de los archivos y cambios pendientes",
        "git add <archivo> - Añade un archivo específico al área de staging",
      ],
    },
    {
      title: "Commit",
      description:
        "Registrar los cambios en el repositorio con un mensaje descriptivo.",
      items: [
        "git commit - Abre el editor para escribir el mensaje del commit",
        'git commit -m "Mensaje descriptivo" - Crea el commit directamente sin abrir el editor',
      ],
    },
    {
      title: "Historial de cambios",
      description: "Ver el historial de commits de tu proyecto.",
      items: [
        "git log - Muestra todos los commits con autor y fecha",
        "git log --graph - Visualiza ramas y merges de forma gráfica",
        "git log --pretty=oneline - Versión resumida de los commits",
        "git log --decorate --all --oneline - Resumen con detalles de ramas y etiquetas",
      ],
    },
    {
      title: "Restaurar archivos",
      description:
        "Recuperar versiones anteriores de archivos o descartar cambios.",
      items: [
        "git checkout <archivo> - Restaurar un archivo a la última versión confirmada",
        "git reset <archivo> - Quitar un archivo del área de staging",
        "git checkout <archivo o commit> - Restaurar un archivo a un commit específico",
        "git checkout HEAD - Volver a la versión actual del último commit",
      ],
    },
    {
      title: "Alias y archivo gitignore",
      description:
        "Simplificar comandos frecuentes y excluir archivos del control de versiones.",
      items: [
        'git config --global alias.<nombre> "<comando>" - Crear alias de comandos',
        "touch .gitignore (Linux/Mac) o ni .gitignore (Windows) - Crear archivo para excluir archivos/carpetas",
      ],
    },
    {
      title: "Comparar cambios",
      description:
        "Ver diferencias entre archivos modificados y el último commit.",
      items: ["git diff"],
    },
    {
      title: "Git reflog",
      description:
        "Muestra todas las referencias de commits, incluso después de reset o cambios de rama.",
      items: ["git reflog"],
    },
    {
      title: "Git reset --hard",
      description:
        "Restablece los archivos y commits a un estado anterior, borrando los cambios posteriores.",
      items: ["git reset --hard <commit>"],
    },
    {
      title: "Agregar todos los archivos",
      description:
        "Añade todos los archivos modificados al área de staging en un solo comando.",
      items: ["git add ."],
    },
    {
      title: "Git tag",
      description:
        "Asignar nombres o referencias a versiones específicas de commits.",
      items: [
        'git tag "<nombre-del-tag>" - Crear un tag',
        "git tag - Listar todos los tags existentes",
        'git checkout tags/"<nombre-del-tag>" - Navegar a una versión específica mediante tag',
      ],
    },
    {
      title: "Git branch",
      description: "Crear, listar y eliminar ramas en tu repositorio.",
      items: [
        'git branch "<nombre-de-la-rama>" - Crear una nueva rama',
        "git branch - Listar todas las ramas",
        'git branch -d "<nombre-de-la-rama>" - Eliminar una rama',
      ],
    },
    {
      title: "Git switch",
      description:
        "Cambiar entre ramas y moverse al último commit de la rama seleccionada.",
      items: ['git switch "<nombre-de-la-rama>"'],
    },
    {
      title: "Repositorios remotos",
      description:
        "Trabajar con repositorios online requiere sincronizar ramas locales y remotas correctamente.",
      items: [
        "Al usar un repositorio remoto, se recomienda descargar (pull) la rama deseada antes de trabajar, o usar git checkout para cambiar a la rama correspondiente",
      ],
    },
    {
      title: "Git merge",
      description:
        "Combinar cambios de una rama en la rama actual. Pueden aparecer conflictos si se modificaron las mismas líneas.",
      items: ['git merge "<rama>"'],
    },
    {
      title: "Git stash",
      description:
        "Guardar temporalmente cambios no confirmados para recuperarlos más tarde.",
      items: [
        "git stash - Guardar cambios temporales",
        "git stash list - Mostrar stashes pendientes",
        "git stash drop - Eliminar stashes innecesarios",
      ],
    },
    {
      title: "Git diff",
      description:
        "Revisar diferencias entre archivos y commits para detectar errores o cambios pendientes.",
      items: ["git diff"],
    },
  ],
  en: [
    {
      title: "Check Git Version",
      description: "Verify the installed version of Git on your system.",
      items: ["git --version", "git -v"],
    },
    {
      title: "Help Panel",
      description: "Access Git's help and command information.",
      items: ["git -h", "git --help"],
    },
    {
      title: "Initial Configuration",
      description: "Set your name and email to enable proper commits.",
      items: [
        'git config --global user.name "Your Name"',
        'git config --global user.email "email@example.com"',
      ],
    },
    {
      title: "Initialize Repository",
      description:
        "Create a local repository to track changes in your project.",
      items: [
        "git init",
        "This will create a hidden .git folder where the history of changes is stored",
      ],
    },
    {
      title: "Main Branch",
      description:
        "The default main branch used to be 'master', now usually 'main'. It can be renamed if needed.",
      items: ['git branch -m "new-name"'],
    },
    {
      title: "File Status",
      description: "Check file changes and prepare files for commit.",
      items: [
        "git status - Shows the status of files and pending changes",
        "git add <file> - Add a specific file to the staging area",
      ],
    },
    {
      title: "Commit",
      description:
        "Record changes to the repository with a descriptive message.",
      items: [
        "git commit - Opens the editor to write the commit message",
        'git commit -m "Descriptive message" - Creates the commit directly without opening the editor',
      ],
    },
    {
      title: "Change History",
      description: "View the commit history of your project.",
      items: [
        "git log - Shows all commits with author and date",
        "git log --graph - Visualizes branches and merges graphically",
        "git log --pretty=oneline - Compact view of commits",
        "git log --decorate --all --oneline - Summary with branch and tag details",
      ],
    },
    {
      title: "Restore Files",
      description: "Recover previous versions of files or discard changes.",
      items: [
        "git checkout <file> - Restore a file to the last committed version",
        "git reset <file> - Remove a file from the staging area",
        "git checkout <file or commit> - Restore a file to a specific commit",
        "git checkout HEAD - Return the file to the current version of the last commit",
      ],
    },
    {
      title: "Alias and gitignore",
      description:
        "Simplify frequent commands and exclude files from version control.",
      items: [
        'git config --global alias.<name> "<command>" - Create a command alias',
        "touch .gitignore (Linux/Mac) or ni .gitignore (Windows) - Create a file to exclude files/folders",
      ],
    },
    {
      title: "Compare Changes",
      description:
        "View differences between modified files and the last commit.",
      items: ["git diff"],
    },
    {
      title: "Git Reflog",
      description:
        "Shows all commit references, even after resets or branch changes.",
      items: ["git reflog"],
    },
    {
      title: "Git Reset --hard",
      description:
        "Resets files and commits to a previous state, removing later changes.",
      items: ["git reset --hard <commit>"],
    },
    {
      title: "Add All Files",
      description:
        "Add all modified files to the staging area with a single command.",
      items: ["git add ."],
    },
    {
      title: "Git Tag",
      description: "Assign names or references to specific commit versions.",
      items: [
        'git tag "<tag-name>" - Create a tag',
        "git tag - List all existing tags",
        'git checkout tags/"<tag-name>" - Switch to a specific version using a tag',
      ],
    },
    {
      title: "Git Branch",
      description: "Create, list, and delete branches in your repository.",
      items: [
        'git branch "<branch-name>" - Create a new branch',
        "git branch - List all branches",
        'git branch -d "<branch-name>" - Delete a branch',
      ],
    },
    {
      title: "Git Switch",
      description:
        "Move between branches and navigate to the last commit of the selected branch.",
      items: ['git switch "<branch-name>"'],
    },
    {
      title: "Remote Repositories",
      description:
        "Working with online repositories requires proper synchronization of local and remote branches.",
      items: [
        "When using a remote repository, it is recommended to pull the desired branch before working, or use git checkout to switch to the correct branch",
      ],
    },
    {
      title: "Git Merge",
      description:
        "Combine changes from one branch into the current branch. Conflicts may occur if the same lines were modified.",
      items: ['git merge "<branch>"'],
    },
    {
      title: "Git Stash",
      description:
        "Temporarily save uncommitted changes to retrieve them later.",
      items: [
        "git stash - Save temporary changes",
        "git stash list - Show pending stashes",
        "git stash drop - Delete unnecessary stashes",
      ],
    },
    {
      title: "Git Diff",
      description:
        "Review differences between files and commits to detect errors or pending changes.",
      items: ["git diff"],
    },
  ],
};

const content_github = {
  es: [
    {
      title: "Git remote add",
      description:
        "Vincula tu repositorio local con un repositorio remoto en GitHub.",
      items: [
        'git remote add origin "URL_del_repositorio" - Configura un repositorio remoto por primera vez.',
        'git remote set-url origin "URL_del_repositorio" - Actualiza la URL del repositorio remoto existente.',
        "git remote remove origin - Elimina el repositorio remoto configurado.",
      ],
    },
    {
      title: "Git push",
      description: "Envía los cambios locales al repositorio remoto.",
      items: [
        'git push -u origin "rama" - Sube tus cambios a la rama especificada y establece la rama remota por defecto.',
        "git push origin main --force - Sobrescribe el historial remoto con tus cambios locales (usar con precaución).",
        'git push origin HEAD:"nombre_rama" - Fuerza la subida de los cambios de la rama actual a la rama remota indicada.',
      ],
    },
    {
      title: "Git pull",
      description:
        "Incorpora los cambios realizados en el repositorio remoto a tu repositorio local.",
      items: [
        "git pull origin main - Trae los cambios de la rama remota indicada y los fusiona con tu rama local.",
        "git config pull.rebase false - Configura Git para usar merge en lugar de rebase al hacer pull.",
        "git pull origin main --allow-unrelated-histories - Permite fusionar repositorios con historiales diferentes.",
      ],
    },
    {
      title: "Git clone",
      description: "Crea una copia local de un repositorio remoto.",
      items: [
        'git clone "URL_del_repositorio" - Descarga todo el repositorio y su historial de commits.',
      ],
    },
    {
      title: "Fork",
      description:
        "Crea una copia independiente de un repositorio de otro usuario, permitiéndote trabajar sobre tu propia versión.",
      items: [
        "Al realizar un fork, puedes elegir la rama desde la cual clonar el repositorio original.",
      ],
    },
    {
      title: "Pull request",
      description:
        "Solicita la integración de tus cambios desde tu repositorio (fork) al repositorio original.",
      items: [
        "El pull request debe ser revisado y aprobado por los mantenedores del repositorio original.",
        "Una vez aprobado, se realiza un merge para integrar los cambios.",
      ],
    },
    {
      title: "Sincronizar un fork",
      description:
        "Mantiene tu fork actualizado con los cambios del repositorio original.",
      items: [
        "Se puede observar en la parte superior del repositorio los cambios recientes del original.",
        "Se recomienda usar la opción 'update branch' o hacer un pull desde el repositorio original para mantener tu fork actualizado.",
      ],
    },
  ],

  en: [
    {
      title: "Git remote add",
      description:
        "Link your local repository with a remote repository on GitHub.",
      items: [
        'git remote add origin "repository_URL" - Set up a remote repository for the first time.',
        'git remote set-url origin "repository_URL" - Update the URL of an existing remote repository.',
        "git remote remove origin - Remove the configured remote repository.",
      ],
    },
    {
      title: "Git push",
      description: "Send local changes to the remote repository.",
      items: [
        'git push -u origin "branch" - Push your changes to the specified branch and set the default remote branch.',
        "git push origin main --force - Overwrite the remote history with your local changes (use with caution).",
        'git push origin HEAD:"branch_name" - Force push the current branch changes to the specified remote branch.',
      ],
    },
    {
      title: "Git pull",
      description:
        "Incorporate changes from the remote repository into your local repository.",
      items: [
        "git pull origin main - Fetch changes from the specified remote branch and merge them into your local branch.",
        "git config pull.rebase false - Configure Git to use merge instead of rebase when pulling.",
        "git pull origin main --allow-unrelated-histories - Allow merging repositories with unrelated histories.",
      ],
    },
    {
      title: "Git clone",
      description: "Create a local copy of a remote repository.",
      items: [
        'git clone "repository_URL" - Download the entire repository and its commit history.',
      ],
    },
    {
      title: "Fork",
      description:
        "Create an independent copy of another user's repository, allowing you to work on your own version.",
      items: [
        "When performing a fork, you can choose the branch from which to clone the original repository.",
      ],
    },
    {
      title: "Pull request",
      description:
        "Request the integration of your changes from your forked repository into the original repository.",
      items: [
        "The pull request must be reviewed and approved by the maintainers of the original repository.",
        "Once approved, a merge is performed to integrate the changes.",
      ],
    },
    {
      title: "Synchronize a fork",
      description:
        "Keep your fork up to date with changes from the original repository.",
      items: [
        "Recent changes from the original repository can be seen at the top of your fork.",
        "It is recommended to use the 'update branch' option or pull from the original repository to keep your fork updated.",
      ],
    },
  ],
};
