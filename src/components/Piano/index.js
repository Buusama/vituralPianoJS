import React from 'react';
import _ from 'lodash';
import {
    VALID_KEYS,
    KEY_TO_NOTE,
} from '../../global/notes.js';
import './style.scss';
export class Piano extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressedKeys: [] // array of pressed keys
        };
    }

    playSound = (e) => {
        if (!_.isEmpty(e)) {
            const noteAudio = new Audio(`../../notes/${e}.mp3`);
            noteAudio.volume = this.props.volume;
            noteAudio.play();
        }
    }

    handleKeyOrMouse = (key) => {

        const updatedPressedKeys = [...this.state.pressedKeys];
        if (!updatedPressedKeys.includes(key) && VALID_KEYS.includes(key)) {
            updatedPressedKeys.push(key);
        }
        this.setState({
            pressedKeys: updatedPressedKeys,
        });
        if (key !== undefined) {
            const newKey = key.replace('s', '#');
            const pKey = document.querySelector(`[data-key="${newKey}"]`);
            if (pKey) {
                pKey.classList.add('active');
                setTimeout(() => pKey.classList.remove('active'), 300);
            }

        }

        this.playSound(key);
    }

    handleKeyDown = (event) => {
        if (event.repeat) {
            return;
        }
        if (event.keyCode === 9 || event.keyCode === 20 || event.keyCode === 16) {
            event.preventDefault();
        }
        const key = event.code;
        this.handleKeyOrMouse(KEY_TO_NOTE[key]);
    }

    handleMouseDown = (event) => {
        const key = event.target.getAttribute('data-key');
        if (!key) {
            return;
        }
        const newKey = key.replace('#', 's');
        this.handleKeyOrMouse(newKey);
    }

    handleMouseUp = (event) => {
        const key = event.target.getAttribute('data-key');
        const index = this.state.pressedKeys.indexOf(key);
        if (index > -1) {
            this.setState(state => ({
                pressedKeys: state.pressedKeys.splice(index, 1)
            }));
        }
    }

    componentDidMount = () => {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('mousedown', this.handleMouseDown);
        window.addEventListener('mouseup', this.handleMouseUp);
    }

    componentWillUnmount = () => {
        window.removeEventListener('keydown', this.handleKeyDown);
        window.removeEventListener('mousedown', this.handleMouseDown);
        window.removeEventListener('mouseup', this.handleMouseUp);
    }
    render() {
        const { showKeys } = this.props;
        return (
            <div className="piano">
                <ul className="piano-keys">
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="C"><span>C</span></li>
                    <li className={`key black${showKeys ? ' show-key' : ' hide-key'}`} data-key="C#"><span>C#</span></li>
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="D"><span>D</span></li>
                    <li className={`key black${showKeys ? ' show-key' : ' hide-key'}`} data-key="D#"><span>D#</span></li>
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="E"><span>E</span></li>
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="F"><span>F</span></li>
                    <li className={`key black${showKeys ? ' show-key' : ' hide-key'}`} data-key="F#"><span>F#</span></li>
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="G"><span>G</span></li>
                    <li className={`key black${showKeys ? ' show-key' : ' hide-key'}`} data-key="G#"><span>G#</span></li>
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="A"><span>A</span></li>
                    <li className={`key black${showKeys ? ' show-key' : ' hide-key'}`} data-key="A#"><span>A#</span></li>
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="B"><span>B</span></li>
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="C2"><span>C2</span></li>
                    <li className={`key black${showKeys ? ' show-key' : ' hide-key'}`} data-key="C#2"><span>C#2</span></li>
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="D2"><span>D2</span></li>
                    <li className={`key black${showKeys ? ' show-key' : ' hide-key'}`} data-key="D#2"><span>D#2</span></li>
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="E2"><span>E2</span></li>
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="F2"><span>F2</span></li>
                    <li className={`key black${showKeys ? ' show-key' : ' hide-key'}`} data-key="F#2"><span>F#2</span></li>
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="G2"><span>G2</span></li>
                    <li className={`key black${showKeys ? ' show-key' : ' hide-key'}`} data-key="G#2"><span>G#2</span></li>
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="A2"><span>A2</span></li>
                    <li className={`key black${showKeys ? ' show-key' : ' hide-key'}`} data-key="A#2"><span>A#2</span></li>
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="B2"><span>B2</span></li>
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="C3"><span>C3</span></li>
                    <li className={`key black${showKeys ? ' show-key' : ' hide-key'}`} data-key="C#3"><span>C#3</span></li>
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="D3"><span>D3</span></li>
                    <li className={`key black${showKeys ? ' show-key' : ' hide-key'}`} data-key="D#3"><span>D#3</span></li>
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="E3"><span>E3</span></li>
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="F3"><span>F3</span></li>
                    <li className={`key black${showKeys ? ' show-key' : ' hide-key'}`} data-key="F#3"><span>F#3</span></li>
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="G3"><span>G3</span></li>
                    <li className={`key black${showKeys ? ' show-key' : ' hide-key'}`} data-key="G#3"><span>G#3</span></li>
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="A3"><span>A3</span></li>
                    <li className={`key black${showKeys ? ' show-key' : ' hide-key'}`} data-key="A#3"><span>A#3</span></li>
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="B3"><span>B3</span></li>
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="C4"><span>C4</span></li>
                    <li className={`key black${showKeys ? ' show-key' : ' hide-key'}`} data-key="C#4"><span>C#4</span></li>
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="D4"><span>D4</span></li>
                    <li className={`key black${showKeys ? ' show-key' : ' hide-key'}`} data-key="D#4"><span>D#4</span></li>
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="E4"><span>E4</span></li>
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="F4"><span>F4</span></li>
                    <li className={`key black${showKeys ? ' show-key' : ' hide-key'}`} data-key="F#4"><span>F#4</span></li>
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="G4"><span>G4</span></li>
                    <li className={`key black${showKeys ? ' show-key' : ' hide-key'}`} data-key="G#4"><span>G#4</span></li>
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="A4"><span>A4</span></li>
                    <li className={`key black${showKeys ? ' show-key' : ' hide-key'}`} data-key="A#4"><span>A#4</span></li>
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="B4"><span>B4</span></li>
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="C5"><span>C5</span></li>
                    <li className={`key black${showKeys ? ' show-key' : ' hide-key'}`} data-key="C#5"><span>C#5</span></li>
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="D5"><span>D5</span></li>
                    <li className={`key black${showKeys ? ' show-key' : ' hide-key'}`} data-key="D#5"><span>D#5</span></li>
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="E5"><span>E5</span></li>
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="F5"><span>F5</span></li>
                    <li className={`key black${showKeys ? ' show-key' : ' hide-key'}`} data-key="F#5"><span>F#5</span></li>
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="G5"><span>G5</span></li>
                    <li className={`key black${showKeys ? ' show-key' : ' hide-key'}`} data-key="G#5"><span>G#5</span></li>
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="A5"><span>A5</span></li>
                    <li className={`key black${showKeys ? ' show-key' : ' hide-key'}`} data-key="A#5"><span>A#5</span></li>
                    <li className={`key white${showKeys ? ' show-key' : ' hide-key'}`} data-key="B5"><span>B5</span></li>
                </ul>
            </div>
        );
    }
}