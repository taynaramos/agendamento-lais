import React from 'react'

import { Container } from './style'

import banner from 'assets/images/banner-login.png'
import calendar from 'assets/images/calendar.svg'
import lais from 'assets/images/logo-lais.svg'
import ufrn from 'assets/images/logo-ufrn.svg'

export const Banner = () => {

  return (
    <Container>

      <section className={'banner'}>

        <img src={banner} alt={''}></img>

        <div className={'banner-text'}>

          <img src={calendar} alt={''}></img>
          <h4>Agendamento online</h4>
          <p>Rápido e seguro</p>
          <span>Evite filas e aglomeração.</span>
          <span>O seu bem é o bem de todos</span>

        </div>

        <div className={'banner-logos'}>
          <img src={lais} alt={''}></img>
          <img src={ufrn} alt={''}></img>
        </div>

      </section>

    </Container >
  )
}
