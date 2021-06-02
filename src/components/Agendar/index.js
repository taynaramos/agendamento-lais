import React, { useState, useEffect } from 'react'

import { Paper, TextField, Button, MenuItem } from '@material-ui/core';
import { Formik } from 'formik';

import api from 'services/api'

import { Container } from './style'
import { LocaisVacinacao } from 'components';

export const Agendar = ({ name }) => {

    const initialValues = {
        campanha: '',
        municipio: '',
        data: '',
    }

    const [openLocais, setOpenLocais] = useState(false)
    const [dados, setDados] = useState(initialValues)
    const [disponibilidade, setDisponibilidade] = useState([]);

    useEffect(() => {
        const loadDisponibilidade = async () => {
            const response = await api.get('agendar/disponibilidade');
            const { data } = response;
            setDisponibilidade(data);
        }

        loadDisponibilidade()
    }, [])

    const arrayDisponibilidade = disponibilidade.data
    const isOK = arrayDisponibilidade !== undefined

    if (isOK) {

        const arrMunicipios = arrayDisponibilidade.map((arr) => arr.municipio)
        var arrayMunicipios = arrMunicipios.filter((option, i) => arrMunicipios.indexOf(option) === i);

        const arrDatas = arrayDisponibilidade.map((arr) => arr.data)
        var arrayDatas = arrDatas.filter((option, i) => arrDatas.indexOf(option) === i);
    }




    return (
        <React.Fragment>
            <Container>

                <Paper className={'agendar-form'}>

                    <Formik
                        initialValues={initialValues}
                        validate={values => {
                            const errors = {};
                            if (!values.campanha) {
                                errors.campanha = 'Obrigatório';
                            }
                            if (!values.municipio) {
                                errors.municipio = 'Obrigatório';
                            }
                            if (!values.data) {
                                errors.data = 'Obrigatório';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {

                                // alert(JSON.stringify(values, null, 2));

                                setDados(values)
                                setOpenLocais(true)
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
                                <form onSubmit={handleSubmit} className={'agendar-form'}>

                                    <span>Campanha</span>
                                    <TextField
                                        fullWidth
                                        select
                                        variant="outlined"
                                        id="campanha"
                                        name="campanha"
                                        value={values.campanha}
                                        onChange={handleChange}
                                        error={touched.campanha && Boolean(errors.campanha)}
                                        helperText={touched.campanha && errors.campanha}
                                    >
                                        <MenuItem key={'covid19'} value={'covid19'}>
                                            Covid 19
                                        </MenuItem>
                                    </TextField>

                                    <span>Municipio</span>
                                    <TextField
                                        fullWidth
                                        select
                                        variant="outlined"
                                        id="municipio"
                                        name="municipio"
                                        value={values.municipio}
                                        onChange={handleChange}
                                        error={touched.municipio && Boolean(errors.municipio)}
                                        helperText={touched.municipio && errors.municipio}
                                    >
                                        {isOK && arrayMunicipios.map((option, index) => (
                                            <MenuItem key={index} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>

                                    <span>Data</span>
                                    <TextField
                                        fullWidth
                                        select
                                        variant="outlined"
                                        id="data"
                                        name="data"
                                        value={values.data}
                                        onChange={handleChange}
                                        error={touched.data && Boolean(errors.data)}
                                        helperText={touched.data && errors.data}
                                    >
                                        {isOK && arrayDatas.map((option, index) => (
                                            <MenuItem key={index} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>

                                    <Button variant="contained" fullWidth type="submit" className={'agendar-btn'}>
                                        Procurar
                                </Button>
                                </form>
                            )}
                    </Formik>

                </Paper>

            </Container>

            {openLocais && <LocaisVacinacao name={name} dados={dados} arrayDisponibilidade={isOK && arrayDisponibilidade} />}

        </React.Fragment>
    )
}