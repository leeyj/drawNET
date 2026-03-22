import { state } from '../state.js';
import { markDirty } from '../persistence.js';
import { t } from '../i18n.js';

/**
 * ui/header.js - Logic for the application header (Project Name, Search, etc.)
 */
export function initHeader() {
    const titleEl = document.getElementById('project-title');
    if (!titleEl) return;

    // Set initial title from state
    titleEl.innerText = state.projectName || t('untitled_project');

    // Direct editing by clicking
    titleEl.addEventListener('click', () => {
        const currentName = state.projectName || titleEl.innerText;
        const newName = prompt(t('rename_project_prompt'), currentName);
        
        if (newName && newName.trim() !== "" && newName !== currentName) {
            state.projectName = newName.trim();
            titleEl.innerText = state.projectName;
            markDirty();
            
            // Log for context
            console.log(`Project renamed to: ${state.projectName}`);
        }
    });

    // Hover effect class (optional, but good for UX)
    titleEl.style.cursor = 'pointer';
    titleEl.title = t('rename_project_tooltip');
}
