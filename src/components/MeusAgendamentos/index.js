import React, { useState, useEffect } from 'react'

import { Formik } from 'formik'

import { TextField, MenuItem } from '@material-ui/core'

import api from 'services/api'

import { AgendamentoRealizado } from 'components'
import filter from 'assets/images/filter.svg'

import { Container } from './style'

export const MeusAgendamentos = () => {

    const initialValues = {
        filterLocalizacao: '',
        filterData: ''
    }

    const [agendamentos, setAgendamentos] = useState([]);

    const [filteredLocal, setFilteredLocal] = useState('')
    const [filteredData, setFilteredData] = useState('')

    useEffect(() => {
        const loadAgendamentos = async () => {
            const response = await api.get('agendamentos');
            const { data } = response;
            setAgendamentos(data);
        }

        loadAgendamentos()
    }, [])

    const arrayAgendamentos = agendamentos.data
    const isOK = arrayAgendamentos !== undefined

    if (isOK) {

        const arrLocal = arrayAgendamentos.map((arr) => arr.localizacao)
        var arrayLocal = arrLocal.filter((option, i) => arrLocal.indexOf(option) === i);

        const arrDatas = arrayAgendamentos.map((arr) => arr.data)
        var arrayDatas = arrDatas.filter((option, i) => arrDatas.indexOf(option) === i);

    }

    return (

        <Container>

            <div className={'agendamento-filter'}>
                <span>Filtrar agendamento</span>
                <div className={'agendamento-filter-select'}>

                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                
                                // alert(JSON.stringify(values, null, 2));
                                
                                setFilteredLocal(values.filterLocalizacao)
                                setFilteredData(values.filterData)
                                
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({
                            values,
                            handleChange,
                            handleSubmit,
                            resetForm
                        }) => (
                            <form onSubmit={handleSubmit} className={'filter-form'}>
                            <img src={filter} alt={''} onClick={() => {
                                resetForm()
                                handleSubmit()
                            }} />
                                    <TextField
                                        fullWidth
                                        select
                                        variant="outlined"
                                        id="filterLocalizacao"
                                        name="filterLocalizacao"
                                        value={values.filterLocalizacao}
                                        onChange={handleChange}
                                        onClick={handleSubmit}
                                        label="Locais de Vacinação"
                                    >
                                        {isOK && arrayLocal.map((option, index) => (
                                            <MenuItem key={index} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        fullWidth
                                        select
                                        variant="outlined"
                                        id="filterData"
                                        name="filterData"
                                        value={values.filterData}
                                        onChange={handleChange}
                                        onClick={handleSubmit}
                                        label="Data"
                                    >
                                        {isOK && arrayDatas.map((option, index) => (
                                            <MenuItem key={index} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </form>
                            )}

                    </Formik>

                </div>
            </div>

            <div className={'agendamento-cards'}>
                {arrayAgendamentos !== undefined && arrayAgendamentos.map(agendamento => {

                    if (
                        (filteredData === agendamento.data && filteredLocal === agendamento.localizacao) ||
                        (filteredLocal === agendamento.localizacao && filteredData === '')||
                        (filteredData === agendamento.data && filteredLocal === '') ||
                        (filteredData === '' &&  filteredLocal === '') 
                        )

                        
                        return <AgendamentoRealizado
                            vacina={agendamento.vacina}
                            status={agendamento.status}
                            localizacao={agendamento.localizacao}
                            data={agendamento.data}
                            horario={agendamento.horario}
                        />
                }

                )}
            </div>


        </Container>

    )
}