import React, { useState } from 'react'

import { useParams } from "react-router-dom";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import CreateRoundedIcon from '@material-ui/icons/CreateRounded'
import SearchIcon from '@material-ui/icons/Search'
import { Divider, Button, Box, InputBase } from '@material-ui/core'

import { Container } from './style'
import { MeusAgendamentos, Agendar } from 'components'

import calendar from 'assets/images/calendar-dark.svg'
import profile from 'assets/images/photo-profile.png'
import folder from 'assets/images/folder.svg'
import folderWhite from 'assets/images/folder-white.svg'
import user from 'assets/images/user-blue.svg'

export const Agendamento = () => {

  const { name } = useParams();

  const [isOpen, setIsOpen] = useState(false)
  const [tabOption, setTabOption] = useState('meus-agendamentos')

  function meusAgendamentos() {
    setTabOption('meus-agendamentos')
  }
  function agendar() {
    setTabOption('agendar')
  }

  return (
    <Container>

      <div className={'header-mobile'}>

        <div className={'menu-logo'}>
          <img src={calendar} alt={''}></img>
          <h3>Agendamento Online</h3>
        </div>

        <div className={'menu-profile'}>

          <img src={profile} alt={''}></img>
          <ExpandMoreIcon fontSize="small" onClick={() => setIsOpen(!isOpen)} className={isOpen ? 'icon-expanded' : ''} />

        </div>
      </div>

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
              <span id={'name'}>{name}</span>
            </div>

            <ExpandMoreIcon fontSize="small" onClick={() => setIsOpen(!isOpen)} className={isOpen ? 'icon-expanded' : ''} />

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

        <Divider className={'divider'} />

        <div className={'menu-tabs'}>

          <Button variant={'contained'} className={tabOption === "meus-agendamentos" ? 'tabs-btn tabs-btn-focus' : 'tabs-btn'} onClick={meusAgendamentos}>
            <img src={tabOption === "meus-agendamentos" ? folderWhite : folder} alt={''} className={'tabs-btn-icon'} id={'folder'} />
            <span>Meus agendamentos</span>
          </Button>

          <Button variant={'contained'} className={tabOption === "agendar" ? 'tabs-btn tabs-btn-focus' : 'tabs-btn'} onClick={agendar}>
            <CreateRoundedIcon fontSize="small" className={'tabs-btn-icon'} />
            <span>Agendar</span>
          </Button>

        </div>

      </section>

      <section className={'menu-mobile'}>
        <Button variant={'contained'} className={tabOption === "meus-agendamentos" ? 'tabs-btn tabs-btn-focus' : 'tabs-btn'} onClick={meusAgendamentos}>
          <img src={tabOption === "meus-agendamentos" ? folderWhite : folder} alt={''} className={'tabs-btn-icon'} id={'folder'} />
          <span>Meus agendamentos</span>
        </Button>

        <Button variant={'contained'} className={tabOption === "agendar" ? 'tabs-btn tabs-btn-focus' : 'tabs-btn'} onClick={agendar}>
          <CreateRoundedIcon fontSize="small" className={'tabs-btn-icon'} />
          <span>Agendar</span>
        </Button>
      </section>

      <section className={'main'}>

        <div className={'main-header'}>

          <div className={'main-header-title'}>
            {tabOption === "meus-agendamentos" ? 'Meus agendamentos' : 'Agendar'}
          </div>

          {/* <div className={'main-header-search'}>
            <InputBase
              placeholder="Pesquisar"
              inputProps={{ 'aria-label': 'search' }}
              className={'search-input'}
            />
            <div className={'search-icon'}>
              <SearchIcon />
            </div>
          </div> */}

        </div>

        <div className={'main-content'}>


          {tabOption === "meus-agendamentos" ?
            <MeusAgendamentos />
            :
            <Agendar name={name} />
          }

        </div>

      </section>

    </Container>
  )
}