export class Recorder {
    constructor({ type }) {
        this.type = type;
        this.playlist = {};
        this.songs = [];
        this.startTimeRecording = 0;
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
            'record': this.startRecording,
            'stop': this.stopRecording,
            'play': this.playSong,
            'save': this.saveSong,
            'default': () => { }
        }
        return buttons[type] || buttons['default'];
    }

    startRecording(ev) {
        ev.target.classList.add('pulse')
        ev.target.setAttribute('data-contol', 'recording');
    }

    stopRecording(ev) {
        document.querySelector('[data-control="record"]').classList.remove('pulse');
    }

    saveSong(ev) {
        console.log('save');

    }

    playSong(ev) {
        console.log('play')
    }
}