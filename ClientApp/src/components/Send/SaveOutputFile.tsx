import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { actionCreators } from '../../store/ReceivedMessages';
import * as Messages from '../../store/Messages';
import * as SaveOutputFileStore from '../../store/SaveOutputFileStore';

const format = Messages.FormatMessage;
const SaveOutputFile: React.FC = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: ApplicationState) => {
    return state.filenameScreenOption
  });
  const uploadRef = React.createRef<HTMLInputElement>();
  const messageSwitchToImageTab = Messages.messageCreators.displayInformationPane("image");
  const continueMessage = Messages.messageCreators.configure();
  const setFilenameMessage = Messages.messageCreators.setScreenOption(state.filenameScreenOptionId, state.file.name);
  const saveOutputFile = Messages.messageCreators.saveOutputFile(state.file);
  const updateMessage = () => {
    dispatch(SaveOutputFileStore.actionCreators.setFile(getFile()));
  };
  const getFile = (): File => {
    var result = uploadRef && uploadRef.current && uploadRef.current.files && uploadRef.current.files[0];
    return result || new File([], "");
  }
  const sendMessage = () => {
    if (state.file.name !== "") {
      dispatch(actionCreators.sendMessage(saveOutputFile));
      setTimeout(() => dispatch(actionCreators.sendMessage(setFilenameMessage)), 100);
      setTimeout(() => dispatch(actionCreators.sendMessage(continueMessage)), 200);
      setTimeout(() => dispatch(actionCreators.sendMessage(messageSwitchToImageTab)), 300);
    }
  }
  return (
    <div>
      <h3>The <code>saveOutputFile</code> action</h3>
      This message will allow a file to be sent to configurator to be saved as output with the current configuration.
      <br />
      <pre><code>{format(saveOutputFile)}</code></pre>
      <div className="input-group">
        <div className="custom-file">
          <input onChange={updateMessage} ref={uploadRef} type="file" className="custom-file-input" id="inputGroupFile" aria-describedby="inputGroupFileAddon" />
          <label className="custom-file-label" htmlFor="inputGroupFile">Choose file</label>
        </div>
        <div className="input-group-append">
          <button onClick={sendMessage} className="btn btn-outline-primary" type="button" id="inputGroupFileAddon">Send Message</button>
        </div>
      </div>
      <br />
      <p>This will also send the following messages.  First we send the <code>setScreenOption</code> message to set the file name.  This allows us to set the ImageLink predefined component attribute</p>
      <pre><code>{format(setFilenameMessage)}</code></pre>
      <p>Next we send the <code>continue</code> message</p>
      <pre><code>{format(continueMessage)}</code></pre>
      <p>Finally we switch to the image tab using the <code>displayInformationPane</code> message</p>
      <pre><code>{format(messageSwitchToImageTab)}</code></pre>

    </div>
  );
}

export default SaveOutputFile;
