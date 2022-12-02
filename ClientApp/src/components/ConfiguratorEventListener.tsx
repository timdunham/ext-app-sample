import React from 'react';
import { useDispatch } from 'react-redux';
import * as ReceivedMessages from '../store/ReceivedMessages';
import * as Messages from '../store/Messages';
import { useHistory } from 'react-router-dom';
import * as SetScreenOptionState from '../store/SetScreenOptionStore';
import * as FocusScreenOptionState from '../store/FocusScreenOptionStore';
import * as SaveOutputFileState from '../store/SaveOutputFileStore';
import * as DisplayInformationPaneState from '../store/DisplayInformationPaneStore';
import * as ExternalApplicationDisplayedState from '../store/ExternalApplicationDisplayedStore';
import { InformationPane } from './Send/DisplayInformationPane';
import * as ScreenOptionUIDataStore from '../store/ScreenOptionUIData';

export default function ConfiguratorEventListener() {
    var dispatch = useDispatch();
    const history = useHistory();

    React.useEffect(() => {
        function handleMessage(event: any) {
            const eventData = (event.data);
            const command = eventData && eventData.command;
            if (!command) {
                return;
            }
            dispatch(ReceivedMessages.actionCreators.receiveMessage(JSON.stringify(eventData)));

            switch (command) {
                case "MessagesEnd":
                case "RollbackPreviousMessages":
                    break;
                case "InitializeCommand":
                    if (eventData.data.showExternalAppPane) {
                        dispatch(ReceivedMessages.actionCreators.sendMessage(Messages.messageCreators.displayInformationPane(InformationPane.ExternalApplication, eventData.data.externalApplicationName)));
                    }
                    break;
                case "ConfigureCommand":
                    history.push("/send/configure");
                    break;
                case "FinishConfigurationCommand":
                    history.push("/send/finish");
                    break;
                case "ProcessingCommand":
                    history.push("/send/processing");
                    break;
                case "DisplayInformationPaneCommand":
                    dispatch(DisplayInformationPaneState.actionCreators.sampleAppExternalApplicationName(eventData.data.externalApplicationName));
                    history.push("/send/displayInformationPane");
                    break;
                case "SaveOutputFileCommand":
                    dispatch(SaveOutputFileState.actionCreators.setScreenOptionId(eventData.data.screenId));
                    history.push("/send/saveOutputFile");
                    break;
                case "SetScreenOptionCommand":
                    dispatch(SetScreenOptionState.actionCreators.setScreenOptionId(eventData.data.screenId));
                    history.push("/send/setScreenOption");
                    break;
                case "RequestScreenOptionUIDataCommand":
                    history.push("/send/requestScreenOptionUIData");
                    break;
                case "ScreenOptionUiData":
                    const uiDataMessage = ScreenOptionUIDataStore.actionCreators.screenOptionUIData(JSON.stringify(eventData.data, null, 2));
                    dispatch(uiDataMessage);
                    break;
                case "FocusScreenOptionCommand":
                    const message = FocusScreenOptionState.actionCreators.focusScreenOptionIds(eventData.data.screenId, eventData.data.screenId2);
                    dispatch(message);
                    history.push("/send/focusScreenOption");
                    break;
                case "ExternalApplicationDisplayed":
                    const externalApplicationDisplayedMessage = ExternalApplicationDisplayedState.actionCreators.externalApplicationDisplayedId(eventData.data.screenOptionId);
                    dispatch(externalApplicationDisplayedMessage);
                    history.push("/receive/externalApplicationDisplayed");
                    break;
            }
        }

        window.addEventListener("message", handleMessage);

        return () => {
            window.removeEventListener("message", handleMessage);
        };
    });
    return <div className="event-listener" />;
}