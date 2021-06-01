import React, { useState, useEffect } from 'react'

import { Formik } from 'formik'

import { TextField, MenuItem } from '@material-ui/core'

import api from 'services/api'

import { AgendamentoRealizado } from 'components'
import filter from 'assets/images/filter.svg'

import { Container } from './style'

export const MeusAgendamentos = () => {

    const [agendamentos, setAgendamentos] = useState([]);
    const [filterSelect, setFilterSelect] = React.useState('localizacao');

    useEffect(() => {
        const loadAgendamentos = async () => {
            const response = await api.get('agendamentos');
            const { data } = response;
            setAgendamentos(data);
        }

        loadAgendamentos()
    }, [])

    const arrayAgendamentos = agendamentos.data

    // const initialValues = {
    //     filterSelect: 'localizacao',
    // }

    const handleSelect = event => {

        setFilterSelect(event.target.value);
        console.log(event.target.value)
        // console.log(filterSelect)
    };

    return (

        <Container>

            <div className={'agendamento-filter'}>
                <span>Filtrar agendamento</span>
                <div className={'agendamento-filter-select'}>
                    <img src={filter} alt={''} />

                    <Formik>

                        <form>
                            <TextField
                                fullWidth
                                select
                                variant="outlined"
                                id="filterSelect"
                                name="filterSelect"
                                value={filterSelect}
                                onChange={handleSelect}
                            >
                                <MenuItem key={'localizacao'} value={'localizacao'}>
                                    Locais de Vacinação
                                </MenuItem>
                                <MenuItem key={'data'} value={'data'}>
                                    Data
                                </MenuItem>
                            </TextField>
                        </form>

                    </Formik>

                </div>
            </div>

            <div className={'agendamento-cards'}>
                {arrayAgendamentos !== undefined && arrayAgendamentos.map(agendamento => {
                    return <AgendamentoRealizado
                        vacina={agendamento.vacina}
                        status={agendamento.status}
                        localizacao={agendamento.localizacao}
                        data={agendamento.data}
                        horario={agendamento.horario}
                    />
                })}
            </div>


        </Container>

    )
}