import React from "react";
import { useDispatch } from "react-redux";
import * as ReceivedMessages from '../../store/ReceivedMessages';

export interface VisibilityProps
{
    visibility: ReceivedMessages.Visibility,
    label: string,
    color: string
}

const VisibilityButton: React.FC<VisibilityProps> = (props) => {
    const dispatch = useDispatch();
    const setVisibility = () => dispatch(ReceivedMessages.actionCreators.setVisibility(props.visibility));
    const className = `btn btn-outline-${props.color}`
    return <button onClick={setVisibility} type="button" className={className}>{props.label}</button>
  }

export default VisibilityButton;