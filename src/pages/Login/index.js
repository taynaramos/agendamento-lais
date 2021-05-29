import React from 'react'

import { Link } from 'react-router-dom'

import { Paper, Button, TextField } from '@material-ui/core';

import { Banner } from 'components'

import { Container } from './style'

import user from 'assets/images/user.svg'

export const Login = () => {

  return (
    <Container>

      <Banner />

      <section className={'main'}>

        <div className={'main-signup'}>

          <span>Não tem uma conta?</span>

          <Link to={'/signup'}>
            <Button variant={'contained'} className={'main-signup-btn'}>
              <img className={'btn-user'} src={user} alt={''}></img>
              <span className={'btn-text'}>Crie uma</span>
            </Button>
          </Link>

        </div>

        <div className={'main-form'}>

          <Paper className={'form'}>

            <p>Preencha os campos abaixo</p>

            <div className={'form-field'}>
              <span>Email</span>
              <TextField variant="outlined" />
            </div>

            <div className={'form-field'}>
              <span>Senha</span>
              <TextField
                variant="outlined"
                type="password"
              />
            </div>

            <Link to={'/mudar-senha'}><p className={'forgot-password'}>Esqueceu sua senha?</p></Link>

            <Button variant={'contained'} className={'form-btn'}>
              <span>Entrar</span>
            </Button>

          </Paper>

        </div>

      </section>

    </Container >
  )
}
