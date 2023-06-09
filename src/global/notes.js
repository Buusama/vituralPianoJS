const VALID_BLACK_KEYS = ['CapsLock', 'KeyS', 'KeyD', 'KeyF', 'KeyH', 'KeyJ', 'KeyL', 'Semicolon', 'Quote',
  'Digit1', 'Digit2', 'Digit4', 'Digit5', 'Digit6', 'Digit8', 'Digit9', 'Minus', 'Equal', 'Backspace'];
const VALID_WHITE_KEYS =
  ['ShiftLeft', 'KeyZ', 'keyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight',
    'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash',];
const VALID_KEYS = [...VALID_BLACK_KEYS, ...VALID_WHITE_KEYS];
const NOTES = [
  'C', 'Cs', 'D', 'Ds', 'E', 'F', 'Fs', 'G', 'Gs', 'A', 'As', 'B',
  'C2', 'Cs2', 'D2', 'Ds2', 'E2', 'F2', 'Fs2', 'G2', 'Gs2', 'A2', 'As2', 'B2',
  'C3', 'Cs3', 'D3', 'Ds3', 'E3', 'F3', 'Fs3', 'G3', 'Gs3', 'A3', 'As3', 'B3',
  'C4', 'Cs4', 'D4', 'Ds4', 'E4', 'F4', 'Fs4', 'G4', 'Gs4', 'A4', 'As4', 'B4',
  'C5', 'Cs5', 'D5', 'Ds5', 'E5', 'F5', 'Fs5', 'G5', 'Gs5', 'A5', 'As5', 'B5',
];
const NOTE_TO_KEY = {
  'E': 'ShiftLeft',
  'F': 'KeyZ',
  'G': 'KeyX',
  'A': 'KeyC',
  'B': 'KeyV',
  'C2': 'KeyB',
  'D2': 'KeyN',
  'E2': 'KeyM',
  'F2': 'Comma',
  'G2': 'Period',
  'A2': 'Slash',
  'B2': 'ShiftRight',
  'C3': 'Tab',
  'D3': 'KeyQ',
  'E3': 'KeyW',
  'F3': 'KeyE',
  'G3': 'KeyR',
  'A3': 'KeyT',
  'B3': 'KeyY',
  'C4': 'KeyU',
  'D4': 'KeyI',
  'E4': 'KeyO',
  'F4': 'KeyP',
  'G4': 'BracketLeft',
  'A4': 'BracketRight',
  'B4': 'Backslash',
  'Ds': 'CapsLock',
  'Fs': 'KeyS',
  'Gs': 'KeyD',
  'As': 'KeyF',
  'Cs2': 'KeyH',
  'Ds2': 'KeyJ',
  'Fs2': 'KeyL',
  'Gs2': 'Semicolon',
  'As2': 'Quote',
  'Cs3': 'Digit1',
  'Ds3': 'Digit2',
  'Fs3': 'Digit4',
  'Gs3': 'Digit5',
  'As3': 'Digit6',
  'Cs4': 'Digit8',
  'Ds4': 'Digit9',
  'Fs4': 'Minus',
  'Gs4': 'Equal',
  'As4': 'Backspace',
};
const KEY_TO_NOTE = {
  'ShiftLeft': 'E',
  'KeyZ': 'F',
  'KeyX': 'G',
  'KeyC': 'A',
  'KeyV': 'B',
  'KeyB': 'C2',
  'KeyN': 'D2',
  'KeyM': 'E2',
  'Comma': 'F2',
  'Period': 'G2',
  'Slash': 'A2',
  'ShiftRight': 'B2',
  'Tab': 'C3',
  'KeyQ': 'D3',
  'KeyW': 'E3',
  'KeyE': 'F3',
  'KeyR': 'G3',
  'KeyT': 'A3',
  'KeyY': 'B3',
  'KeyU': 'C4',
  'KeyI': 'D4',
  'KeyO': 'E4',
  'KeyP': 'F4',
  'BracketLeft': 'G4',
  'BracketRight': 'A4',
  'Backslash': 'B4',
  'CapsLock': 'Ds',
  'KeyS': 'Fs',
  'KeyD': 'Gs',
  'KeyF': 'As',
  'KeyH': 'Cs2',
  'KeyJ': 'Ds2',
  'KeyL': 'Fs2',
  'Semicolon': 'Gs2',
  'Quote': 'As2',
  'Digit1': 'Cs3',
  'Digit2': 'Ds3',
  'Digit4': 'Fs3',
  'Digit5': 'Gs3',
  'Digit6': 'As3',
  'Digit8': 'Cs4',
  'Digit9': 'Ds4',
  'Minus': 'Fs4',
  'Equal': 'Gs4',
  'Backspace': 'As4',
};
const KEY_TO_DISPLAY = {
  'ShiftLeft': 'E',
  'KeyZ': 'F',
  'KeyX': 'G',
  'KeyC': 'A',
  'KeyV': 'B',
  'KeyB': 'C2',
  'KeyN': 'D2',
  'KeyM': 'E2',
  'Comma': 'F2',
  'Period': 'G2',
  'Slash': 'A2',
  'ShiftRight': 'B2',
  'Tab': 'C3',
  'KeyQ': 'D3',
  'KeyW': 'E3',
  'KeyE': 'F3',
  'KeyR': 'G3',
  'KeyT': 'A3',
  'KeyY': 'B3',
  'KeyU': 'C4',
  'KeyI': 'D4',
  'KeyO': 'E4',
  'KeyP': 'F4',
  'BracketLeft': 'G4',
  'BracketRight': 'A4',
  'Backslash': 'B4',
  'CapsLock': 'D#',
  'KeyS': 'F#',
  'KeyD': 'G#',
  'KeyF': 'A#',
  'KeyH': 'C#2',
  'KeyJ': 'D#2',
  'KeyL': 'F#2',
  'Semicolon': 'G#2',
  'Quote': 'A#2',
  'Digit1': 'C#3',
  'Digit2': 'D#3',
  'Digit4': 'F#3',
  'Digit5': 'G#3',
  'Digit6': 'A#3',
  'Digit8': 'C#4',
  'Digit9': 'D#4',
  'Minus': 'F#4',
  'Equal': 'G#4',
  'Backspace': 'A#4',
};

export {
  NOTES,
  VALID_KEYS,
  NOTE_TO_KEY,
  KEY_TO_NOTE,
  KEY_TO_DISPLAY,
};