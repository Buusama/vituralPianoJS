import React from 'react';
import './style.scss';
import { KEY_TO_DISPLAY } from '../../global/notes';

export class Keyboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pressedKeys: [],
        };

        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }
    
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
        document.addEventListener('keyup', this.handleKeyUp);

        // Add mouse click event listeners
        const keys = document.getElementsByClassName('keys');
        for (let i = 0; i < keys.length; i++) {
            keys[i].addEventListener('mousedown', this.handleClick);
            keys[i].addEventListener('mouseup', this.handleMouseUp);
        }
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
        document.removeEventListener('keyup', this.handleKeyUp);

        // Remove mouse click event listeners
        const keys = document.getElementsByClassName('keys');
        for (let i = 0; i < keys.length; i++) {
            keys[i].removeEventListener('mousedown', this.handleClick);
            keys[i].removeEventListener('mouseup', this.handleMouseUp);
        }
    }

    handleKeyDown(event) {
        const { code } = event;
        const { pressedKeys } = this.state;
        const key = KEY_TO_DISPLAY[code];
        if (
            code === 'Backspace' ||
            code === 'ShiftRight' ||
            code === 'ShiftLeft' ||
            code === 'Tab' ||
            code === 'CapsLock'
        ) {
            // prevent default action (like backspace for example)
            event.preventDefault();
        }
        if (!pressedKeys.includes(key)) {
            this.setState({ pressedKeys: [...pressedKeys, key] });
        }
    }

    handleKeyUp(event) {
        const { code } = event;
        const { pressedKeys } = this.state;
        const key = KEY_TO_DISPLAY[code];
        this.setState({
            pressedKeys: pressedKeys.filter((item) => item !== key),
        });
    }

    // Add mouse click handlers
    handleClick(event) {
        const { target } = event;
        const { pressedKeys } = this.state;
        const key = target.innerHTML;
        if (!pressedKeys.includes(key)) {
            this.setState({ pressedKeys: [...pressedKeys, key] });
        }
    }

    handleMouseUp(event) {
        const { target } = event;
        const { pressedKeys } = this.state;
        const key = target.innerHTML;
        this.setState({
            pressedKeys: pressedKeys.filter((item) => item !== key),
        });
    }
    render() {
        return (
            <div className="keyboard">
                <div className="container">
                    <div className="keyboard_wrapp">
                        <div className="keyboard_keys">
                            <div className="row">
                            <div className="keys keys_night">ESC</div>
                            <div className="keys keys_night first">F1</div>
                            <div className="keys keys_night">F2</div>
                            <div className="keys keys_night">F3</div>
                            <div className="keys keys_night">F4</div>
                            <div className="keys keys_night first">F5</div>
                            <div className="keys keys_night">F6</div>
                            <div className="keys keys_night">F7</div>
                            <div className="keys keys_night">F8</div>
                            <div className="keys keys_night first">F9</div>
                            <div className="keys keys_night">F10</div>
                            <div className="keys keys_night">F11</div>
                            <div className="keys keys_night">F12</div>

                            </div>
                            <div className="row">
                                <div className="keys keys_night "></div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('C#3') ? 'active' : ''}`}>C#3</div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('D#3') ? 'active' : ''}`}>D#3</div>
                                <div className="keys keys_night "></div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('F#3') ? 'active' : ''}`}>F#3</div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('G#3') ? 'active' : ''}`}>G#3</div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('A#3') ? 'active' : ''}`}>A#3</div>
                                <div className="keys keys_night "></div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('C#4') ? 'active' : ''}`}>C#4</div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('D#4') ? 'active' : ''}`}>D#4</div>
                                <div className="keys keys_night "></div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('F#4') ? 'active' : ''}`}>F#4</div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('G#4') ? 'active' : ''}`}>G#4</div>
                                <div className={`keys keys_night backspace_key ${this.state.pressedKeys.includes('A#4') ? 'active' : ''}`}>A#4</div>
                            </div>
                            <div className="row">
                                <div className={`keys keys_night tab_key ${this.state.pressedKeys.includes('C3') ? 'active' : ''}`}>C3</div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('D3') ? 'active' : ''}`}>D3</div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('E3') ? 'active' : ''}`}>E3</div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('F3') ? 'active' : ''}`}>F3</div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('G3') ? 'active' : ''}`}>G3</div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('A3') ? 'active' : ''}`}>A3</div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('B3') ? 'active' : ''}`}>B3</div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('C4') ? 'active' : ''}`}>C4</div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('D4') ? 'active' : ''}`}>D4</div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('E4') ? 'active' : ''}`}>E4</div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('F4') ? 'active' : ''}`}>F4</div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('G4') ? 'active' : ''}`}>G4</div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('A4') ? 'active' : ''}`}>A4</div>
                                <div className={`keys keys_night slash_key ${this.state.pressedKeys.includes('B4') ? 'active' : ''}`}>B4</div>
                            </div>
                            <div className="row">
                                <div className={`keys keys_night caps_lock_key ${this.state.pressedKeys.includes('D#') ? 'active' : ''}`}>D#</div>
                                <div className="keys keys_night "></div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('F#') ? 'active' : ''}`}>F#</div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('G#') ? 'active' : ''}`}>G#</div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('A#') ? 'active' : ''}`}>A#</div>
                                <div className="keys keys_night "></div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('C#2') ? 'active' : ''}`}>C#2</div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('D#2') ? 'active' : ''}`}>D#2</div>
                                <div className="keys keys_night "></div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('F#2') ? 'active' : ''}`}>F#2</div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('G#2') ? 'active' : ''}`}>G#2</div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('A#2') ? 'active' : ''}`}>A#2</div>
                                <div className="keys keys_night enter_key"></div>
                            </div>
                            <div className="row">
                                <div className={`keys keys_night shift_key shift_left ${this.state.pressedKeys.includes('E') ? 'active' : ''}`}>E</div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('F') ? 'active' : ''}`}>F</div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('G') ? 'active' : ''}`}>G</div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('A') ? 'active' : ''}`}>A</div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('B') ? 'active' : ''}`}>B</div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('C2') ? 'active' : ''}`}>C2</div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('D2') ? 'active' : ''}`}>D2</div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('E2') ? 'active' : ''}`}>E2</div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('F2') ? 'active' : ''}`}>F2</div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('G2') ? 'active' : ''}`}>G2</div>
                                <div className={`keys keys_night ${this.state.pressedKeys.includes('A2') ? 'active' : ''}`}>A2</div>
                                <div className={`keys keys_night shift_key shift_right ${this.state.pressedKeys.includes('B2') ? 'active' : ''}`}>B2</div>
                            </div>
                            <div className="row">
                                <div className="keys keys_night ctrl_key ctrl_left">Ctrl</div>
                                <div className="keys keys_night win_key">Win</div>
                                <div className="keys keys_night alt_key alt_left">Alt</div>
                                <div className="keys keys_night space_key"></div>
                                <div className="keys keys_night alt_key alt_right">Alt</div>
                                <div className="keys keys_night ">Fn</div>
                                <div className="keys keys_night ctrl_key ctrl_right">Ctrl</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


