import React, { useState } from 'react'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import CreateRoundedIcon from '@material-ui/icons/CreateRounded'
import { Divider, Button, Box } from '@material-ui/core'

import { Container } from './style'

import calendar from 'assets/images/calendar-dark.svg'
import profile from 'assets/images/photo-profile.png'
import folder from 'assets/images/folder.svg'
import user from 'assets/images/user-blue.svg'

export const Agendamento = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container>

      <section className={'menu'}>

        <div className={'menu-logo'}>
          <img src={calendar} alt={''}></img>
          <h3>Agendamento Online</h3>
        </div>

        <div className={'menu-profile'}>

          <img src={profile} alt={''}></img>

          <div className={'profile-select'}>

            <div className={'profile-select-text'}>
              <span>Seja bem vindo</span>
              {/* depois substituir por {nome} */}
              <span id={'name'}>Johnny Clark</span>
            </div>

            <ExpandMoreIcon fontSize="small" onClick={() => setIsOpen(!isOpen)} className={isOpen ? 'icon-expanded' : ''}  />

          </div>

        </div>

        <Box className={isOpen ? 'profile-select-expanded' : 'profile-select-closed'}>
          <div className={'select-option'}>
            <img src={user} alt={''} />
            <span>Meu perfil</span>
          </div>

          <div className={'select-option'}>
            <img src={user} alt={''} />
            <span>Sair</span>
          </div>
        </Box>

        <Divider variant="middle" className={'divider'} />

        <div className={'menu-tabs'}>

          <Button variant={'contained'} className={'tabs-btn'}>
            <img src={folder} alt={''} className={'tabs-btn-icon'} id={'folder'} />
            <span>Meus agendamentos</span>
          </Button>

          <Button variant={'contained'} className={'tabs-btn'}>
            <CreateRoundedIcon fontSize="small" className={'tabs-btn-icon'} />
            <span>Agendamentar</span>
          </Button>

        </div>

      </section>

      <section className={'main'}>

        <div className={'main-header'}></div>
        <div className={'main-content'}></div>

      </section>

    </Container>
  )
}