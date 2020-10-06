import * as React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';

const SaveOutputFile: React.FC = () => {
  const state = useSelector((state: ApplicationState) => {
    return state.filenameScreenOption
  });
  const uploadRef = React.createRef<HTMLInputElement>();
  const messageSwitchToImageTab: string = "{\n \"action\": \"displayInformationPane\",\n \"pane\": \"image\"\n}";
  const continueMessage: string = `{\n \"action\": \"configure\"\n}`;
  const sendMessage = () => {
    if (uploadRef && uploadRef.current && uploadRef.current.files) {
      const f = uploadRef.current.files[0];
      const setFilenameMessage: string = `{\n \"action\": \"setScreenOption\",\n \"screenOptionId\": \"${state.filenameScreenOptionId}\",\n \"value\": \"${f.name}\"\n}`;
      const message = {
        action: "saveOutputFile",
        file: new File([f], f.name, { type: f.type, lastModified: f.lastModified })
      };
      window.parent.postMessage(message, "*");
      setTimeout(() => window.parent.postMessage(JSON.parse(setFilenameMessage), "*"), 100);
      setTimeout(() => window.parent.postMessage(JSON.parse(continueMessage), "*"), 200);
      setTimeout(() => window.parent.postMessage(JSON.parse(messageSwitchToImageTab), "*"), 300);
    }
  }
  return (
    <div>
      <h1>Message: <code>saveOutputFile</code></h1>
      This message will allow a file to be sent to configurator to be saved as output with the current configuration.
      <br />
      <pre><code>{"{\n \"action\": \"setScreenOption\",\n \"file\": \"<file from upload control>\"\n}"}</code></pre>
      <input type="file" ref={uploadRef} />
      <input type="button" onClick={sendMessage} value="Send Message" />
      <br />
      This will also send the following message to switch to the image tab:
      <pre><code>{messageSwitchToImageTab}</code></pre>
    </div>
  );
}

export default SaveOutputFile;
