import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { actionCreators } from '../../store/ReceivedMessages';

const SaveOutputFile: React.FC = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: ApplicationState) => {
    return state.filenameScreenOption
  });
  const uploadRef = React.createRef<HTMLInputElement>();
  const messageSwitchToImageTab: string = "{\n \"action\": \"displayInformationPane\",\n \"pane\": \"image\"\n}";
  const continueMessage: string = "{\n \"action\": \"configure\"\n}";
  const sendMessage = () => {
    if (uploadRef && uploadRef.current && uploadRef.current.files) {
      const f = uploadRef.current.files[0];
      const setFilenameMessage: string = `{
        "action": "setScreenOption",
        "screenOptionId": "${state.filenameScreenOptionId}",
        "value": "${f.name}"
      }`;
      const message = {
        action: "saveOutputFile",
        file: new File([f], f.name, { type: f.type, lastModified: f.lastModified })
      };
      dispatch(actionCreators.sendMessage(message));
      setTimeout(() => dispatch(actionCreators.sendMessage(JSON.parse(setFilenameMessage))), 100);
      setTimeout(() => dispatch(actionCreators.sendMessage(JSON.parse(continueMessage))), 200);
      setTimeout(() => dispatch(actionCreators.sendMessage(JSON.parse(messageSwitchToImageTab))), 300);
    }
  }
  return (
    <div>
      <h1>Message: <code>saveOutputFile</code></h1>
      This message will allow a file to be sent to configurator to be saved as output with the current configuration.
      <br />
      <pre><code>{"{\n \"action\": \"setScreenOption\",\n \"file\": \"<file from upload control>\"\n}"}</code></pre>
      <div className="input-group">
        <div className="custom-file">
          <input ref={uploadRef} type="file" className="custom-file-input" id="inputGroupFile" aria-describedby="inputGroupFileAddon" />
          <label className="custom-file-label" htmlFor="inputGroupFile">Choose file</label>
        </div>
        <div className="input-group-append">
          <button onClick={sendMessage} className="btn btn-outline-primary" type="button" id="inputGroupFileAddon">Send Message</button>
        </div>
      </div>
      <br />
      This will also send the following message to switch to the image tab:
      <pre><code>{messageSwitchToImageTab}</code></pre>
    </div>
  );
}

export default SaveOutputFile;
