import { state } from '../state.js';
import { t } from '../i18n.js';
import { logger } from '../utils/logger.js';

/**
 * handleNewProject - Clears the current graph and resets project meta
 */
export function handleNewProject() {
    if (!state.graph) return;
    
    if (confirm(t('confirm_new_project') || "Are you sure you want to start a new project?")) {
        state.graph.clearCells();
        
        // Reset Project Metadata in UI
        const projectTitle = document.getElementById('project-title');
        if (projectTitle) projectTitle.innerText = t('untitled_project');
        
        // Reset state
        state.projectName = t('untitled_project');
        state.layers = [
            { id: 'l1', name: 'Main Layer', visible: true, locked: false, color: '#3b82f6', type: 'standard' }
        ];
        
        // Sync UI
        if (projectTitle) projectTitle.innerText = state.projectName;
        
        state.activeLayerId = 'l1';
        state.selectionOrder = [];
        
        // Clear Persistence (Optional: could trigger immediate save of empty state)
        import('../persistence.js').then(m => {
            if (m.clearLastState) m.clearLastState();
            m.markDirty();
        });

        logger.high("New project created. Canvas cleared.");
    }
}

export function initSystemMenu() {
    const systemBtn = document.getElementById('system-menu-btn');
    const systemFlyout = document.getElementById('system-flyout');
    const studioBtn = document.getElementById('studio-btn');
    const newProjectBtn = document.getElementById('new-project');

    if (systemBtn && systemFlyout) {
        // Toggle Flyout
        systemBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isVisible = systemFlyout.style.display === 'flex';
            systemFlyout.style.display = isVisible ? 'none' : 'flex';
            systemBtn.classList.toggle('active', !isVisible);
        });

        // "New Project" Handler
        if (newProjectBtn) {
            newProjectBtn.addEventListener('click', () => {
                handleNewProject();
                systemFlyout.style.display = 'none';
                systemBtn.classList.remove('active');
            });
        }

        // "Object Studio" Handler
        if (studioBtn) {
            studioBtn.addEventListener('click', () => {
                window.open('/studio', '_blank');
                systemFlyout.style.display = 'none';
                systemBtn.classList.remove('active');
            });
        }

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!systemFlyout.contains(e.target) && e.target !== systemBtn) {
                systemFlyout.style.display = 'none';
                systemBtn.classList.remove('active');
            }
        });
    }

    // Export Format Filtering (Trial: PNG, PDF only)
    const exportBtns = document.querySelectorAll('.export-btn');
    exportBtns.forEach(btn => {
        const format = btn.getAttribute('data-format');
        if (state.license.level === 'Trial' && !['png', 'pdf', 'dnet'].includes(format?.toLowerCase())) {
            btn.classList.add('trial-disabled');
            btn.title = 'Premium License Required';
            btn.onclick = (e) => {
                e.stopPropagation();
                import('./toast.js').then(m => m.showToast(t('msg_premium_only'), 'warning'));
            };
        }
    });
}

// initUndoRedo is removed from UI as requested (Hotkeys still work via actionHandlers)
