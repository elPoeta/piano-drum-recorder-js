import { UiManager } from './uiManager.js';
window.addEventListener('load', e => {
    new UiManager().init().open();
})
