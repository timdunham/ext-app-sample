import React from 'react';
import { useDispatch } from 'react-redux';
import * as ReceivedMessages from '../store/ReceivedMessages'

export default function ConfiguratorEventListener() {
    var dispatch = useDispatch();

    React.useEffect(() => {
        function handleMessage(event: any) {
            const eventData = (event.data);
            const command = eventData && eventData.command;
            switch (command) {
                case "InitializeEvent":
                    dispatch(ReceivedMessages.actionCreators.receiveMessage(JSON.stringify(eventData.data)));
            }
        }

        window.addEventListener("message", handleMessage);

        return () => {
            window.removeEventListener("message", handleMessage);
        };
    });
    return <div className="event-listener" />;
}

// const mapStateToProps = null;
// const mapDispatchToProps = (dispatch: Dispatch) => return {
//     updateDimensions: (height: number, width: number)=> dispatch(actionCreators.setDimensions(height, width))
// }
// export default connect(
//     null, // Selects which state properties are merged into the component's props
//     DoorPanelsStore.actionCreators // Selects which action creators are merged into the component's props
//   )(ConfiguratorExternalApp);