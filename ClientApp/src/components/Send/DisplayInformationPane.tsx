import * as React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import * as Messages from '../../store/Messages';
import ActionChain from './ActionChain';

export enum InformationPane {
  Image = "image",
  Detail = "detail",
  InformationLink = "informationlink",
  Summary = "summary",
  Table = "table",
  DataGrid = "datagrid",
  ExternalApplication = "externalapplication"
};

const DisplayInformationPane: React.FC = () =>
{
  const state = useSelector((state: ApplicationState) =>
  {
    return state.displayInformationPane;
  });

  const [pane, setPane] = React.useState<string>(InformationPane.Image);
  const [externalApplicationName, setExternalApplicationName] = React.useState<string | undefined>(undefined);
  const [thisExternalApplicationName, setThisExternalApplicationName] = React.useState<string | undefined>(state.sampleAppExternalApplicationName);

  const startAction = Messages.messageCreators.displayInformationPane(pane, externalApplicationName);
  const endAction = Messages.messageCreators.displayInformationPane(InformationPane.ExternalApplication, thisExternalApplicationName);

  return (<div>
    <h3>The <code>displayInformationPane</code> action</h3>
    <p>This <code>displayInformationPane</code> action cuases the Configurator IDS UI to display the selected information pane with the specified name (for Data Grids and External Applications).
    After 2 seconds, the <code>displayInformationPane</code> action is sent again to return to this tab.
    You must enter the name given to this sample app in your Set External Application rule in the 'This Sample External Application Name' field for this to work properly.
    </p>
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <label className="input-group-text">Select a Pane</label>
      </div>
      <select onChange={(e)=> setPane(e.target.value)} className="custom-select" aria-label="Example select with button addon">
        <option>{InformationPane.Image}</option>
        <option>{InformationPane.Detail}</option>
        <option>{InformationPane.InformationLink}</option>
        <option>{InformationPane.Summary}</option>
        <option>{InformationPane.Table}</option>
        <option>{InformationPane.DataGrid}</option>
        <option>{InformationPane.ExternalApplication}</option>
      </select>
    </div>
    <ExternalApplicationNameInput value={externalApplicationName} label={"External Application Name"} onChange={(e) => setExternalApplicationName(e.target.value)} clear={() => setExternalApplicationName(undefined)} />
    <ExternalApplicationNameInput value={thisExternalApplicationName} label={"This Sample External Application Name"} onChange={(e) => setThisExternalApplicationName(e.target.value)} clear={() => setThisExternalApplicationName(undefined)} />
    <br/>
    <ActionChain actions={[startAction, endAction]} delay={2000} />
  </div>
  )
};

export default DisplayInformationPane;

interface IExternalApplicationNameProps
{
  label: string;
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clear: React.MouseEventHandler<HTMLButtonElement>;
}

function ExternalApplicationNameInput(props: IExternalApplicationNameProps)
{
  const { label, value, onChange, clear } = props;

  const textboxValue = value || "";

  return (<div className="input-group mb-3">
    <div className="input-group-prepend">
      <label className="input-group-text">{label}</label>
    </div>
    <input onChange={onChange} value={textboxValue} type="text" className="form-control" placeholder={label} aria-label={label} />
    <button onClick={clear}>Clear</button>
  </div>);
}