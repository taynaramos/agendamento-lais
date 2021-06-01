import React from 'react'

import { useHistory } from 'react-router-dom'

import { Formik } from 'formik';
import { Paper, Button, TextField } from '@material-ui/core'

import { Container } from './style'

export const FormSignup = () => {


    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    let history = useHistory();

    return (
        <Container>

                <Paper className={'form'}>

                    <p>Preencha os campos abaixo</p>
                    <p>É rápido, simples e seguro</p>

                    <Formik
                        initialValues={initialValues}
                        validate={values => {
                            const errors = {};
                            if (!values.name)
                                errors.name = "Obrigatório"
                            if (!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)))
                                errors.email = "Email não válido"
                            if (!(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(values.password)))
                                errors.password = "Mínimo de oito caracteres, pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial"
                            if (!(values.confirmPassword === values.password))
                                errors.confirmPassword = "As senhas não estão iguais"

                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {

                                // alert(JSON.stringify(values, null, 2));

                                alert("Dados salvos com sucesso!");
                                history.push(`/agendamentos/${values.name}`)

                                console.log(values)
                                setSubmitting(false)
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
                                        <span>Nome</span>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            id="name"
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            error={touched.name && Boolean(errors.name)}
                                            helperText={touched.name && errors.name}
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

                                    <div className={'form-field'}>
                                        <span>Confirmação de senha</span>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            type="password"
                                            value={values.confirmPassword}
                                            onChange={handleChange}
                                            error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                                            helperText={touched.confirmPassword && errors.confirmPassword}
                                        />
                                    </div>

                                    <Button variant="contained" fullWidth type="submit" className={'form-btn'}>
                                        Continuar
                                    </Button>
                                </form>
                            )}
                    </Formik>

                </Paper>

        </Container>
    )
}