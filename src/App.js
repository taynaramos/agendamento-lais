import React from "react";

import { Switch, Route } from 'react-router-dom'

import { GlobalStyle } from 'globalStyles'

import {
  Agendamento,
  Login,
  Signup,
  ChangePassword
} from 'pages'

function App() {


  return (
    <>
      <GlobalStyle />
        <Switch>
          <Route exact path={'/'} component={Login} />
          <Route path={'/signup'} component={Signup} />
          <Route path={'/agendamentos/:name'} component={() => <Agendamento />} />
          <Route path={'/mudar-senha'} component={ChangePassword} />
        </Switch>
    </>
  )
}

export default App;
