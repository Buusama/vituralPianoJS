import React from 'react';
import './style.scss';
export class Keyboard extends React.Component {
    
    render() {
        return (
            <div className="keyboard">
                <div className="container">
                    <div className="keyboard_wrapp">
                        <div className="keyboard_keys">
                            <div className="row">
                                <div className="keys"></div>
                                <div className="keys">C#3</div>
                                <div className="keys">D#3</div>
                                <div className="keys"></div>
                                <div className="keys">F#3</div>
                                <div className="keys">G#3</div>
                                <div className="keys">A#3</div>
                                <div className="keys"></div>
                                <div className="keys">C#4</div>
                                <div className="keys">D#4</div>
                                <div className="keys"></div>
                                <div className="keys">F#4</div>
                                <div className="keys">G#4</div>
                                <div className="keys backspace_key">A#4</div>
                            </div>
                            <div className="row">
                                <div className="keys tab_key">C3</div>
                                <div className="keys">D3</div>
                                <div className="keys">E3</div>
                                <div className="keys">F3</div>
                                <div className="keys">G3</div>
                                <div className="keys">A3</div>
                                <div className="keys">B3</div>
                                <div className="keys">C4</div>
                                <div className="keys">D4</div>
                                <div className="keys">E4</div>
                                <div className="keys">F4</div>
                                <div className="keys">G4</div>
                                <div className="keys">A4</div>
                                <div className="keys slash_key">B4</div>
                            </div>
                            <div className="row">
                                <div className="keys caps_lock_key">D#</div>
                                <div className="keys"></div>
                                <div className="keys">F#</div>
                                <div className="keys">G#</div>
                                <div className="keys">A#</div>
                                <div className="keys"></div>
                                <div className="keys">C#2</div>
                                <div className="keys">D#2</div>
                                <div className="keys"></div>
                                <div className="keys">F#2</div>
                                <div className="keys">G#2</div>
                                <div className="keys">A#2</div>
                                <div className="keys enter_key"></div>
                            </div>
                            <div className="row">
                                <div className="keys shift_key shift_left">E</div>
                                <div className="keys">F</div>
                                <div className="keys">G</div>
                                <div className="keys">A</div>
                                <div className="keys">B</div>
                                <div className="keys">C2</div>
                                <div className="keys">D2</div>
                                <div className="keys">E2</div>
                                <div className="keys">F2</div>
                                <div className="keys">G2</div>
                                <div className="keys">A2</div>
                                <div className="keys shift_key shift_right">B2</div>
                            </div>
                            <div className="row">
                                <div className="keys ctrl_key ctrl_left">Ctrl</div>
                                <div className="keys win_key">Win</div>
                                <div className="keys alt_key alt_left">Alt</div>
                                <div className="keys space_key"></div>
                                <div className="keys alt_key alt_right">Alt</div>
                                <div className="keys">Fn</div>
                                <div className="keys ctrl_key ctrl_right">Ctrl</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


