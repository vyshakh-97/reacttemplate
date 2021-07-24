import React from "react";
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from "./Components/Home";

import {ContextProvider}  from './Components/Contextprovider';
function App() {
  
  return (
    <ContextProvider>
    <BrowserRouter>
        <Switch>
         <Route path="/" exact>
        <Home />
        </Route>  
        <Route path="/newscreen" exact>
        
        </Route>
        </Switch>
        </BrowserRouter>
    </ContextProvider>
    )
}
export default App;
