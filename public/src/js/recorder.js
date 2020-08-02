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
        this.controls = document.querySelectorAll('#controls');
        this.controls
            .forEach(btn => {
                btn.addEventListener('click', this.recordingManager.bind(this));
            })

    }

    recordingManager(ev) {
        const controlType = ev.target.dataset.control;
        if (controlType === 'record') {
            console.log('ev record ', controlType)
            this.controls.classList.remove('icon-record');
            this.controls.classList.add('icon-stop')
            this.controls.setAttribute('data-contol', 'stop');
        }


    }
}