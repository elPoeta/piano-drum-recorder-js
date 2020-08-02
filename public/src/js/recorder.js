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
             <div><div class="icon-record" id="controls"></div> Record</div> 
             <button>Save</button>
             </section>`
        )
    }
}