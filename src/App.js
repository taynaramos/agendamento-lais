import React, { useState, useEffect } from "react";

import { Switch, Route } from 'react-router-dom'

import { GlobalStyle } from 'globalStyles'

import {
  Agendamento,
  Login,
  Exemplo,
  Signup,
  ChangePassword
} from 'pages'

// import api from './services/api'

function App() {

  // const [agendamentos, setAgendamentos] = useState([]);

  // useEffect(() => {
  //   const loadAgendamentos = async () => {
  //     const response = await api.get('agendamentos');
  //     const { data } = response;
  //     setAgendamentos(data);
  //   }

  //   loadAgendamentos()
  // }, [])


  return (
    <>
      {/* {JSON.stringify(agendamentos)} */}

      <GlobalStyle />

      <Switch>
        <Route exact path={'/'} component={Login} />
        <Route path={'/exemplo'} component={Exemplo} />
        <Route path={'/signup'} component={Signup} />
        <Route path={'/agendamentos'} component={Agendamento} />
        <Route path={'/mudar-senha'} component={ChangePassword} />
      </Switch>

    </>
  )
}

export default App;
