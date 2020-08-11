export class Player {
    constructor() {
        this.playNote = this.playNote.bind(this);
    }

    playNote(key) {
        const noteAudio = document.querySelector(`#${key.dataset.key}`);
        noteAudio.currentTime = 0
        noteAudio.play();
        key.classList.add('active')
        noteAudio.addEventListener('ended', () => {
            key.classList.remove('active')
        });
    }

}