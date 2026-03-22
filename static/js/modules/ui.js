import { initSidebar } from './ui/sidebar.js';
import { logger } from './utils/logger.js';
import { initSystemMenu } from './ui/system_menu.js';
import { initHeader } from './ui/header.js';
import { initGraphIO } from './graph/io/index.js';

export function initUIToggles() {
    initSidebar();
    initSystemMenu();
    initHeader();
    
    logger.info("UI modules initialized.");
}
