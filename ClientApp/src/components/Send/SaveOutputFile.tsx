import * as React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import * as Messages from '../../store/Messages';
import ActionChain from './ActionChain';

const SaveOutputFile: React.FC = () => {
  const [file, setFile] = React.useState(new File([], ""))

  const state = useSelector((state: ApplicationState) => {
    return state.filenameScreenOption
  });
  const actions = [
    Messages.messageCreators.saveOutputFile(file),
    Messages.messageCreators.setScreenOption(state.filenameScreenOptionId, file.name),
    Messages.messageCreators.configure(),
    Messages.messageCreators.displayInformationPane("image"),
  ]
  const updateFile = (files: FileList | null) => {
    if (files) {
      let f = files[0];
      setFile(new File([f], f.name, { lastModified: f.lastModified, type: f.type }));
    }
  }

  return (
    <div>
      <h3>The <code>saveOutputFile</code> action</h3>
      This <code>saveOutputFile</code> action sends a file to configurator to be saved as with the current configuration.
      <br />
      <div className="input-group">
        <div className="input-group-prepend">
          <label className="input-group-text">Select image to upload</label>
        </div>
        <div className="custom-file">
          <input onChange={(e) => updateFile(e.target.files)} type="file" className="custom-file-input" id="inputGroupFile" aria-describedby="inputGroupFileAddon" />
          <label className="custom-file-label" htmlFor="inputGroupFile">Choose file</label>
        </div>
      </div>
      <br />

      <p>After the <code>saveOutputFile</code> action, the <code>setScreenOption</code> and <code>continue</code> actions are sent 
      to pass the file name to the engine.  Finally the <code>displayInformationPane</code> action is sent to switch to the image pane.</p>
      <ActionChain actions={actions} delay={250} />
    </div>
  );
}

export default SaveOutputFile;
