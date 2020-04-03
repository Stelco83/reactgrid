import { PointerLocation, State } from '.';
import { KeyboardEvent, ClipboardEvent, PointerEvent } from '../Functions/domEvents';

// ASK ARCHITECT BEFORE INTRODUCING ANY CHANGE!
export abstract class Behavior {
    // Add opportunity to add new methods
    handleKeyDown(event: KeyboardEvent, state: State): State {
        return state;
    }
    handleKeyUp(event: KeyboardEvent, state: State): State {
        return state;
    }
    handleCopy(event: ClipboardEvent, state: State): State {
        return state;
    }
    handlePaste(event: ClipboardEvent, state: State): State {
        return state;
    }
    handleCut(event: ClipboardEvent, state: State): State {
        return state;
    }
    handlePointerDown(event: PointerEvent, location: PointerLocation, state: State): State {
        return state;
    }
    handleDoubleClick(event: PointerEvent, location: PointerLocation, state: State): State {
        return state;
    }
    handlePointerUp(event: PointerEvent, location: PointerLocation, state: State): State {
        return state;
    }
}