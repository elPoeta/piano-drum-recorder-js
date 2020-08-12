export class Player {
    constructor() {
        this.playNote = this.playNote.bind(this);
    }

    playNote(note) {
        const noteAudio = document.querySelector(`#${note}`);
        noteAudio.currentTime = 0
        noteAudio.play();
        document.querySelector(`[data-key="${note}"]`).classList.add('active');
        noteAudio.addEventListener('ended', () => {
            document.querySelector(`[data-key="${note}"]`).classList.remove('active');
        });
    }

}