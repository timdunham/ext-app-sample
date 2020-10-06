import * as ReceivedMessages from './ReceivedMessages';
import * as SetScreenOptionStore from './SetScreenOptionStore';
import * as FocusScreenOptionStore from './FocusScreenOptionStore';
import * as SaveOutputFileStore from './SaveOutputFileStore';

// The top-level state object
export interface ApplicationState {
    receivedMessages: ReceivedMessages.ReceivedMessageState;
    setScreenOption: SetScreenOptionStore.SetScreenOptionState;
    focusScreenOptions: FocusScreenOptionStore.FocusScreenOptionState;
    filenameScreenOption: SaveOutputFileStore.SaveOutputFileState;
}

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    receivedMessages: ReceivedMessages.reducer,
    setScreenOption: SetScreenOptionStore.reducer,
    focusScreenOptions: FocusScreenOptionStore.reducer,
    filenameScreenOption: SaveOutputFileStore.reducer
};

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
