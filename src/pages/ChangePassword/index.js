import React from 'react'

import { Link } from 'react-router-dom'

import { Paper, Button, TextField } from '@material-ui/core';

import { Banner } from 'components'

import { Container } from './style'

import user from 'assets/images/user.svg'

export const ChangePassword = () => {

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
            <p>É rápido, simples e seguro</p>

            <div className={'form-field'}>
              <span>Email</span>
              <TextField variant="outlined" />
            </div>

            <Button variant={'contained'} className={'form-btn'}>
              <span>Continuar</span>
            </Button>

          </Paper>

        </div>

      </section>

    </Container >
  )
}
