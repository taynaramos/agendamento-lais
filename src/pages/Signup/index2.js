import React from 'react'

import { Link, useHistory } from 'react-router-dom'

import { Paper, Button, TextField, Modal, Backdrop, Fade } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { Banner, useForm, Form } from 'components'

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

const initialFValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export const Signup = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  let history = useHistory();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //  Validações

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('name' in fieldValues)
      temp.name = fieldValues.name ? "" : "Obrigatório"
    if ('email' in fieldValues)
      temp.email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(fieldValues.email) ? "" : "Email não válido"
    if ('password' in fieldValues)
      temp.password = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(fieldValues.password) ? "" : "Mínimo de oito caracteres, pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial"
    if ('confirmPassword' in fieldValues)
      temp.confirmPassword = fieldValues.confirmPassword === fieldValues.password ? "" : "As senhas não estão iguais"
    setErrors({
      ...temp
    })


    if (fieldValues === values)
      return Object.values(temp).every(x => x === "")
  }

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  } = useForm(initialFValues, true, validate);

  const handleSubmit = e => {
    e.preventDefault()
    if (validate()) {

      alert("Dados salvos com sucesso!");
      history.push("/agendamentos")

      console.log(values)
      resetForm()
      return
    }
  }

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

        <Form onSubmit={handleSubmit} className={'main-form'}>

          <Paper className={'form'}>

            <p>Preencha os campos abaixo</p>
            <p>É rápido, simples e seguro</p>

            <div className={'form-field'}>
              <span>Email</span>
              <TextField
                variant="outlined"
                name="email"
                value={values.email}
                onChange={handleInputChange}
                {...(errors.email && { error: true, helperText: errors.email })}
              />
            </div>

            <div className={'form-field'}>
              <span>Nome</span>
              <TextField
                variant="outlined"
                name="name"
                value={values.name}
                onChange={handleInputChange}
                {...(errors.name && { error: true, helperText: errors.name })}
              />
            </div>

            <div className={'form-field'}>
              <span>Senha</span>
              <TextField
                variant="outlined"
                type="password"
                name="password"
                value={values.password}
                onChange={handleInputChange}
                {...(errors.password && { error: true, helperText: errors.password })}

              />
            </div>

            <div className={'form-field'}>
              <span>Confirmação de senha</span>
              <TextField
                variant="outlined"
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleInputChange}
                {...(errors.confirmPassword && { error: true, helperText: errors.confirmPassword })}
              />
            </div>

            <Button onClick={handleSubmit} variant={'contained'} className={'form-btn'}>
              <span>Continuar</span>
            </Button>

          </Paper>

        </Form>

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

    </Container >
  )
}
