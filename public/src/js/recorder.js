import { Player } from './player.js';

export class Recorder {
    constructor({ type }) {
        this.type = type;
        this.playlist = {};
        this.songs = [];
        this.songNotes = [];
        this.startTimeRecording = 0;
        this.isRecording = false;
        this.player = new Player();
    }

    get isRecording() {
        return this._isRecording;
    }

    set isRecording(isRecording) {
        this._isRecording = isRecording;
    }

    render() {
        return (
            `<section class="recorder-container">
               <div><div class="icon icon-record"  data-control="record"></div> Record</div> 
               <div><div class="icon icon-stop"  data-control="stop"></div> Stop</div> 
               <div><div class="icon icon-play"  data-control="play"></div> Play</div> 
               <div><div class="icon icon-save"  data-control="save"></div> Save</div> 
             </section>`
        )
    }

    listen() {
        this.controls = document.querySelectorAll('[data-control]');
        this.controls
            .forEach(btn => {
                btn.addEventListener('click', this.recordingManager.bind(this));
            })

    }

    recordingManager(ev) {
        const controlType = ev.target.dataset.control;
        this.operationType({ type: controlType })(ev);
    }

    operationType({ type }) {
        const buttons = {
            'record': this.startRecording.bind(this),
            'stop': this.stopRecording.bind(this),
            'play': this.playSong.bind(this),
            'save': this.saveSong.bind(this),
            'default': () => { }
        }
        return buttons[type] || buttons['default'];
    }

    startRecording(ev) {
        if (!this.isRecording) {
            this.isRecording = true;
            this.songNotes = [];
            ev.target.classList.add('pulse')
            ev.target.setAttribute('data-contol', 'recording');
            this.startTimeRecording = Date.now();
        }

    }

    stopRecording(ev) {
        if (this.isRecording) {
            this.isRecording = false;
            document.querySelector('[data-control="record"]').classList.remove('pulse');
            console.log('notes ', this.songNotes)
        } else {
            console.log('no record ',)
        }

    }

    saveSong(ev) {
        console.log('save');

    }

    playSong(ev) {
        console.log('play')
        this.songNotes.forEach(note => {
            setTimeout(() => {
                this.player.playNote(note.key);
            }, note.startTime)
        });
    }

    playNotePiano(key, isRecording) {
        if (isRecording) {
            this.recordNote(key);
        }
        this.player.playNote(key);
    }

    recordNote(note) {
        this.songNotes.push({
            key: note,
            startTime: Date.now() - this.startTimeRecording
        });
    }

}