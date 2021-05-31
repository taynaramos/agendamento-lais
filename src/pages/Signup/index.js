import React, { useState } from 'react'

import { Link, useHistory } from 'react-router-dom'

import { Formik, Field } from 'formik';
import { Paper, Button, TextField, Modal, Backdrop, Fade } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { Banner } from 'components'

import { Container } from './style'

import user from 'assets/images/user.svg'


const useStyles = makeStyles(() => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: '#fff',
        border: 'none',
        borderRadius: '4px',
        padding: '1.5rem 3rem',
        width: '60%',
    },
    title: {
        color: '#00B3F3',
    },
    btn: {
        backgroundColor: '#FFFFFF',
        border: 'solid 1px #ABABAB ',
        marginLeft: 'calc(100% - 5rem)',
        textTransform: 'capitalize',
    }
}));

export const Signup = () => {


    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    let history = useHistory();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };




    return (
        <React.Fragment>
            <Container>

                <Banner />

                <section className={'main'}>

                    <div className={'main-signup'}>

                        <span>Já tem conta?</span>

                        <Link to={'/'}>
                            <Button variant={'contained'} className={'main-signup-btn'}>
                                <img className={'btn-user'} src={user} alt={''}></img>
                                <span className={'btn-text'}>Entrar</span>
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
                                        history.push("/agendamentos")

                                        console.log(values)
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
                    </div>



                    <p className={'agreement'}>Ao assinar você concorda com os <span onClick={handleOpen}>termos de serviço</span> e <span onClick={handleOpen}>política de privacidade</span></p>

                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                            <div className={classes.paper}>
                                <h2 className={classes.title} id="transition-modal-title">Termos e Política de privacidade</h2>
                                <p id="transition-modal-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd</p>
                                <Button variant={'contained'} className={classes.btn} onClick={handleClose}>Fechar</Button>

                            </div>
                        </Fade>
                    </Modal>

                </section>

            </Container>


        </React.Fragment >
    )
}