import React from "react";
import { PopupButton } from "react-calendly";


function Calender () {

  return (
    <div>
      <div className="Calender">
      <PopupButton
        url="https://localhost:"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
      />
    </div>
    </div>
  )
}

export default Calender