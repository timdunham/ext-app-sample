import React from 'react';
import { useDispatch } from 'react-redux';
import * as ReceivedMessages from '../store/ReceivedMessages'
import { useHistory } from 'react-router-dom'
import * as SetScreenOptionState from '../store/SetScreenOptionStore';

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
                case "SetScreenOptionEvent":
                    const message = SetScreenOptionState.actionCreators.setScreenOptionId(eventData.data.screenId);
                    dispatch(message);
                    history.push("/send/setScreenOption");
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