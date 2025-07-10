import React, {useContext} from 'react'

import {NameContext} from "../App";

const CompC = () => {
  /* useContext is used to consume the context data means contextDataObj (from App.jsx) > NameContext (from App.jsx) >  contextData */  
    const contextData = useContext(NameContext);
  return (
    <div>
        <h1>Example of useContext</h1>
        <p>Name from Context: {contextData.name }</p>
    </div>
  )
}

export default CompC
