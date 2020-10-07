import { Action, Reducer } from 'redux';
import { AppThunkAction } from '.';

export interface RulesetState {
    definition: string;
    received: boolean;
}

export interface ReceiveDefinitionMessage { type: 'RECEIVE_DEFINITION', definition: string }
export type KnownAction = ReceiveDefinitionMessage;

export const actionCreators = {
    requestRulesetDefinition: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
        if (getState().rulesetDefinition.received)
            return
        // Only load data if it's something we don't already have (and are not already loading)
        fetch('api/Ruleset')
            .then(response => {
                return response.text();
            })
            .then(data => {
                dispatch({ type: 'RECEIVE_DEFINITION', definition: data });
            });
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

export const reducer: Reducer<RulesetState> = (state: RulesetState | undefined, incomingAction: Action): RulesetState => {
    if (state === undefined) {
        return {
            definition: "",
            received: false
        };
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'RECEIVE_DEFINITION':
            return {
                definition: action.definition,
                received: true
            };
        default:
            return state;
    }
};
