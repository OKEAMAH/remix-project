import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { } from "react";
import { gitActionsContext, pluginActionsContext } from "../../state/context";
import LoaderIndicator from "./loaderindicator";

export const BranchesNavigation = ({ eventKey, activePanel, callback }) => {
  const pluginactions = React.useContext(pluginActionsContext)
  const context = React.useContext(gitActionsContext)

  const handleClick = () => {
    if (!callback) return
    if (activePanel === eventKey) {
      callback('')
    } else {
      callback(eventKey)
    }
  }
  return (
    <>
      <div className={'d-flex justify-content-between pt-1 ' + (activePanel === eventKey? 'bg-light': '')}>
        <span data-id='branches-panel' onClick={()=>handleClick()} role={'button'} className='nav d-flex justify-content-start align-items-center w-75'>
          {
            activePanel === eventKey ? <FontAwesomeIcon className='' icon={faCaretDown}></FontAwesomeIcon> : <FontAwesomeIcon className='' icon={faCaretRight}></FontAwesomeIcon>
          }
          <label className="pl-1 nav form-check-label">BRANCHES</label>
          <LoaderIndicator></LoaderIndicator>
        </span>
      </div>
    </>
  );
}