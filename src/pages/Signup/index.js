import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { Button, Modal, Backdrop, Fade } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { Banner, FormSignup } from 'components'

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

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
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

                    <FormSignup />
                    
                    <p className={'agreement'}>Ao assinar você concorda com os <span onClick={handleOpen}>termos de serviço</span> e <span onClick={handleOpen}>política de privacidade</span></p>

                </div>

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
    )
}