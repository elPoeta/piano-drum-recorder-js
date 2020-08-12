import { Recorder } from './recorder.js';

export class Drum {
    constructor() {
        this.recorder = new Recorder({ type: 'drum' });
    }

    render() {
        return (
            `${this.recorder.render()}
          <section class="drum-container">
           <div data-key="C" class="drumBoom">clap</div>
           <div data-key="H" class="drumBoom">hithat</div>
           <div data-key="K" class="drumBoom">kick</div>
           <div data-key="O" class="drumBoom">openhat</div>
           <div data-key="B" class="drumBoom">boom</div>
           <div data-key="R" class="drumBoom">ride</div>
           <div data-key="S" class="drumBoom">snare</div>
           <div data-key="T" class="drumBoom">tom</div>
           <div data-key="TT" class="drumBoom">tink</div>
          </section>
          <audio  id="C" src="./assets/media/drum/C.wav" preload="auto" type="audio/wav"></audio>
          <audio  id="H" src="./assets/media/drum/H.wav" preload="auto" type="audio/wav"></audio>
          <audio  id="K" src="./assets/media/drum/K.wav" preload="auto" type="audio/wav"></audio>
          <audio  id="O" src="./assets/media/drum/O.wav" preload="auto" type="audio/wav"></audio>
          <audio  id="B" src="./assets/media/drum/B.wav" preload="auto" type="audio/wav"></audio>
          <audio  id="R" src="./assets/media/drum/R.wav" preload="auto" type="audio/wav"></audio>
          <audio  id="S" src="./assets/media/drum/S.wav" preload="auto" type="audio/wav"></audio>
          <audio  id="T" src="./assets/media/drum/T.wav" preload="auto" type="audio/wav"></audio>
          <audio  id="TT" src="./assets/media/drum/TT.wav" preload="auto" type="audio/wav"></audio>
        `);
    }
}