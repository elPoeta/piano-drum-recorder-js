export class Piano {
    constructor() {
        this.WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
        this.BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];
    }

    render() {
        return (
            `<section class="piano">
            <div data-key="C" class="key white"></div>
            <div data-key="Db" class="key black"></div>
            <div data-key="D" class="key white"></div>
            <div data-key="Eb" class="key black"></div>
            <div data-key="E" class="key white"></div>
            <div data-key="F" class="key white"></div>
            <div data-key="Gb" class="key black"></div>
            <div data-key="G" class="key white"></div>
            <div data-key="Ab" class="key black"></div>
            <div data-key="A" class="key white"></div>
            <div data-key="Bb" class="key black"></div>
            <div data-key="B" class="key white"></div>
        </section>
        <audio id="C" src="./assets/media/piano/C.mp3"></audio>
        <audio id="Db" src="./assets/media/piano/Db.mp3"></audio>
        <audio id="D" src="./assets/media/piano/D.mp3"></audio>
        <audio id="Eb" src="./assets/media/piano/Eb.mp3"></audio>
        <audio id="E" src="./assets/media/piano/E.mp3"></audio>
        <audio id="F" src="./assets/media/piano/F.mp3"></audio>
        <audio id="Gb" src="./assets/media/piano/Gb.mp3"></audio>
        <audio id="G" src="./assets/media/piano/G.mp3"></audio>
        <audio id="Ab" src="./assets/media/piano/Ab.mp3"></audio>
        <audio id="A" src="./assets/media/piano/A.mp3"></audio>
        <audio id="Bb" src="./assets/media/piano/Bb.mp3"></audio>
        <audio id="B" src="./assets/media/piano/B.mp3"></audio>` );
    }

    listen() {
        this.keys = document.querySelectorAll('.key');
        this.keys.forEach(key => {
            console.log(key)
        })
    }
}