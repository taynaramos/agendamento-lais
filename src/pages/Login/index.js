import React from 'react'

import { Link } from 'react-router-dom'

import { Button } from '@material-ui/core';

import { Banner, FormLogin } from 'components'

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

        <FormLogin />

      </section>

    </Container >
  )
}
