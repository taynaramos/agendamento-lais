import React, { useState, useEffect } from 'react'

import { InputLabel, FormControl, NativeSelect } from '@material-ui/core'

import api from 'services/api'

import { AgendamentoRealizado } from 'components'
import filter from 'assets/images/filter.svg'

import { Container } from './style'

export const MeusAgendamentos = () => {
    const [agendamentos, setAgendamentos] = useState([]);

    useEffect(() => {
        const loadAgendamentos = async () => {
            const response = await api.get('agendamentos');
            const { data } = response;
            setAgendamentos(data);
        }

        loadAgendamentos()
    }, [])

    const arrayAgendamentos = agendamentos.data

    return (

        <Container>

            <div className={'agendamento-filter'}>
                <span>Filtrar agendamento</span>
                <div className={'agendamento-filter-select'}>
                    <img src={filter} alt={''} />

                    <select name="select">
                        <option value="localizacao">Local de Vacina</option>
                        <option value="data">Data</option>
                    </select>

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