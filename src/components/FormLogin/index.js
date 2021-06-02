import React, { useState } from 'react'

import { Link, useHistory } from 'react-router-dom'

import { Formik } from 'formik';

import { Paper, Button, TextField } from '@material-ui/core';

import api from 'services/api'

import { Container } from './style'

export const FormLogin = () => {

    const initialValues = {
        email: '',
        password: '',
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let history = useHistory();

    const userDefault = {
        name: 'Johnny Clark'
    }

    const handlePost = async () => {
        const body = {
            email: email,
            password: password
        }

        const result = await api.post('/auth/login', body)
        history.push(`/agendamentos/${userDefault.name}`)
    }

    return (
        <Container className={'main-form'}>

            <Paper className={'form'}>

                <p>Preencha os campos abaixo</p>

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

                            setPassword(values.password)
                            setEmail(values.email)

                            handlePost()
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

                                <div className={'form-field'}>
                                    <span>Senha</span>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        error={touched.password && Boolean(errors.password)}
                                        helperText={touched.password && errors.password}
                                    />
                                </div>

                                <Link to={'/mudar-senha'}><p className={'forgot-password'}>Esqueceu sua senha?</p></Link>

                                <Button variant="contained" fullWidth type="submit" className={'form-btn'}>
                                    Entrar
                                    </Button>
                            </form>
                        )}
                </Formik>

            </Paper>

        </Container>
    )
}