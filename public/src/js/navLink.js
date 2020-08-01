import { Piano } from './piano.js';

export class NavLink {
    constructor() {
        this.root = document.querySelector('#root');
        this.pianoLink = document.querySelector('#pianoLink');
        this.drumLink = document.querySelector('#drumLink');
        this.piano = new Piano();
    }

    init() {
        this.pianoLink.addEventListener('click', this.open.bind(this));
        this.drumLink.addEventListener('click', this.open.bind(this));
        return this;
    }

    open(ev) {
        const type = ev ? ev.target.id : 'pianoLink';
        this.renderOperation({ type })();
        this.toogleActive({ type });
        return this;
    }

    renderOperation({ type }) {
        const handlerOperation = {
            pianoLink: this.renderPiano.bind(this),
            drumLink: this.renderDrum.bind(this),
            default: this.renderPiano.bind(this)
        }
        return handlerOperation[type] || handlerOperation['default'];
    }


    renderPiano() {
        this.root.innerHTML = this.piano.render();
        this.piano.listen();
    }

    renderDrum() {
        this.root.innerHTML = `<h2>Drum</h2>`
    }

    toogleActive({ type }) {
        if (type === 'pianoLink') {
            this.pianoLink.classList.add('active');
            this.drumLink.classList.remove('active');
        } else {
            this.pianoLink.classList.remove('active');
            this.drumLink.classList.add('active');
        }

    }
}

