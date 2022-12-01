import * as ReceivedMessages from './ReceivedMessages';
import * as SetScreenOptionStore from './SetScreenOptionStore';
import * as FocusScreenOptionStore from './FocusScreenOptionStore';
import * as SaveOutputFileStore from './SaveOutputFileStore';
import * as RulesetDefinitionStore from './RulesetDefinitionStore';
import * as DisplayInformationPaneStore from './DisplayInformationPaneStore';
import * as ExternalApplicationDisplayedStore from './ExternalApplicationDisplayedStore';
import * as RequestScreenOptionUiDataStore from './RequestScreenOptionUiDataStore';

// The top-level state object
export interface ApplicationState {
    receivedMessages: ReceivedMessages.ReceivedMessageState;
    setScreenOption: SetScreenOptionStore.SetScreenOptionState;
    focusScreenOptions: FocusScreenOptionStore.FocusScreenOptionState;
    filenameScreenOption: SaveOutputFileStore.SaveOutputFileState;
    rulesetDefinition: RulesetDefinitionStore.RulesetState;
    displayInformationPane: DisplayInformationPaneStore.DisplayInformationPaneState;
    externalApplicationDisplayed: ExternalApplicationDisplayedStore.ExternalApplicationDisplayedState;
    requestScreenOptionUiData: RequestScreenOptionUiDataStore.RequestScreenOptionUiDataState;
}
// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    receivedMessages: ReceivedMessages.reducer,
    setScreenOption: SetScreenOptionStore.reducer,
    focusScreenOptions: FocusScreenOptionStore.reducer,
    filenameScreenOption: SaveOutputFileStore.reducer,
    rulesetDefinition: RulesetDefinitionStore.reducer,
    displayInformationPane: DisplayInformationPaneStore.reducer,
    externalApplicationDisplayed: ExternalApplicationDisplayedStore.reducer,
    requestScreenOptionUiData: RequestScreenOptionUiDataStore.reducer
};

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
