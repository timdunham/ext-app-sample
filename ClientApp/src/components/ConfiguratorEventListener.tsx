import React from 'react';
import { useDispatch } from 'react-redux';
import * as ReceivedMessages from '../store/ReceivedMessages';
import * as Messages from '../store/Messages';
import { useHistory } from 'react-router-dom';
import * as SetScreenOptionState from '../store/SetScreenOptionStore';
import * as FocusScreenOptionState from '../store/FocusScreenOptionStore';
import * as SaveOutputFileState from '../store/SaveOutputFileStore';

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
                case "RollbackPreviousMessages":
                case "InitializeEvent":
                    break;
                case "MessagesEnd":
                    dispatch(ReceivedMessages.actionCreators.sendMessage(Messages.messageCreators.displayInformationPane("externalapplication")));
                    break;
                case "ConfigureEvent":
                    history.push("/send/configure");
                    break;
                case "FinishConfigurationEvent":
                    history.push("/send/finish");
                    break;
                case "ProcessingEvent":
                    history.push("/send/processing");
                    break;
                case "DisplayInformationPaneEvent":
                    history.push("/send/displayInformationPane");
                    break;
                case "SaveOutputFileEvent":
                    dispatch(SaveOutputFileState.actionCreators.setScreenOptionId(eventData.data.screenId));
                    history.push("/send/saveOutputFile");
                    break;
                case "SetScreenOptionEvent":
                    dispatch(SetScreenOptionState.actionCreators.setScreenOptionId(eventData.data.screenId));
                    history.push("/send/setScreenOption");
                    break;
                case "FocusScreenOptionEvent":
                    const message = FocusScreenOptionState.actionCreators.focusScreenOptionIds(eventData.data.screenId, eventData.data.screenId2);
                    dispatch(message);
                    history.push("/send/focusScreenOption");
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