import { Action, Reducer } from 'redux';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface ReceivedMessageState {
    received: boolean;
    messages: string[];
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.

export interface ReceiveMessage { type: 'RECEIVE_MESSAGE', message: string }
export interface ClearMessages { type: 'CLEAR_MESSAGES' }

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
export type KnownAction = ReceiveMessage | ClearMessages;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    receiveMessage: (message: string) => ({ type: 'RECEIVE_MESSAGE', message: message } as ReceiveMessage),
    clearMessages: () => ({ type: 'CLEAR_MESSAGES' } as ClearMessages)
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

export const reducer: Reducer<ReceivedMessageState> = (state: ReceivedMessageState | undefined, incomingAction: Action): ReceivedMessageState => {
    if (state === undefined) {
        return {
            received: false,
            messages: []
        };
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'RECEIVE_MESSAGE':
            return {
                received: true,
                messages: [...state.messages, action.message]
            };
        case 'CLEAR_MESSAGES':
            return {
                ...state,
                messages: []
            };
        default:
            return state;
    }
};
