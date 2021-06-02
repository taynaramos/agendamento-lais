import React from 'react'

import { Link } from 'react-router-dom'

import { Formik } from 'formik';

import { Paper, Button, TextField } from '@material-ui/core';

import { Banner } from 'components'

import { Container } from './style'

import user from 'assets/images/user.svg'

export const ChangePassword = () => {

  const initialValues = {
    email: ''
}

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

            <Formik
              initialValues={initialValues}
              validate={values => {
                const errors = {};
                if (!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)))
                  errors.email = "Email não válido"

                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {

                  // alert(JSON.stringify(values, null, 2));

                  alert("Email com sucesso!");

                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
              }) => (
                  <form onSubmit={handleSubmit}>

                    <div className={'form-field'}>
                      <span>Email</span>
                      <TextField
                        fullWidth
                        variant="outlined"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                      />
                    </div>

                    <Button variant="contained" fullWidth type="submit" className={'form-btn'}>
                      Continuar
                    </Button>
                  </form>
                )}
            </Formik>

          </Paper>

        </div>

      </section>

    </Container >
  )
}
