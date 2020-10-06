import React from 'react';
import { useDispatch } from 'react-redux';
import * as ReceivedMessages from '../store/ReceivedMessages'
import { useHistory } from 'react-router-dom'
import * as SetScreenOptionState from '../store/SetScreenOptionStore';
import * as FocusScreenOptionState from '../store/FocusScreenOptionStore';

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
                case "MessagesEnd":
                case "InitializeEvent":
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