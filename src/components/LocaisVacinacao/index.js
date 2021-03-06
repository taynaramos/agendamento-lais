import React, { useState, useRef } from 'react';

import { useReactToPrint } from 'react-to-print';

import { Paper, Divider, Modal, Backdrop, Fade, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

import { Container } from './style'

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
        padding: '1.5rem 2rem',
        width: '60%',
    },
    print: {
        padding: '1rem 1rem',
    },
    title: {
        color: '#00B3F3',
        fontFamily: 'PoppinsBold'
    },
    btn: {
        backgroundColor: '#FFFFFF',
        border: 'solid 1px #ABABAB ',
        marginLeft: 'calc(100% - 5rem)',
        textTransform: 'capitalize',
        marginTop: '10px',
    },
    list: {
        color: '#FF4646',
        fontFamily: 'PoppinsRegular',
        fontSize: '16px',
        marginBottom: '3rem',

    },
    dataTime: {
        fontFamily: 'PoppinsBold',
        fontSize: '24px'
    },
    confirmation: {
        color: '#20D5AB',
        fontFamily: 'PoppinsBold',
        fontSize: '24px',
        marginLeft: '15px'
    },
    field: {
        fontFamily: 'PoppinsBold',
        fontSize: '16px'
    },
    fieldData: {
        fontFamily: 'PoppinsRegular',
        fontSize: '16px',
        marginLeft: '8px'
    }
}));

export const LocaisVacinacao = ({ dados, arrayDisponibilidade, name }) => {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [selectedTime, setSelectedTime] = useState(null)
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedLocal, setSelectedLocal] = useState(null)
    const { campanha, data, municipio } = dados

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const arr = arrayDisponibilidade.filter((option) => option.municipio === municipio)
    const arrFiltered = arr.filter((option) => option.data === data)

    function verVagas(vagas, option) {
        const arrHorario = []
        for (let vaga in vagas) {
            arrHorario.push(
                <div className={'local-data'} onClick={() => selectTime(vaga, option)}>
                    <div className={'local-data-time'}>{vaga}</div>
                    <div className={'local-data-vacancy'}>{vagas[vaga]} vagas</div>
                </div>
            )
        }
        return arrHorario
    }

    function selectTime(vaga, option) {
        setSelectedTime(vaga)
        setSelectedDate(option.data)
        setSelectedLocal(option.localizacao)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container>
            <Paper className={'local-data-info'}>
                <h2>Locais de vacina????o - {data} </h2>

                {arrFiltered.map((option, index) => (
                    <>
                        <span key={index} value={option} className={'local-name'}>
                            {option.localizacao} | Covid-19 | 8h ??s 16h
                        </span>

                        <div className={'available-time'}>
                            {verVagas(option.vagas, option)}
                        </div>

                        <Divider className={'local-divider'} />
                    </>
                ))}

            </Paper>

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
                    <div className={classes.paper} >
                        <div className={classes.print} ref={componentRef}>
                            <h2 className={classes.title} id="transition-modal-title">Comprovante de agendamento</h2>

                            <div>
                                <span className={classes.dataTime}>{selectedDate} ??s {selectedTime}</span>
                                <span className={classes.confirmation}>Agendado</span>
                            </div>

                            <h4>Orienta????es</h4>
                            <ul className={classes.list}>
                                <li>Caso sejam informados dados falsos relacionados ao seu agendamento, ele poder?? ser cancelado a crit??rio do vacinador ou supervisor da sala de vacina (Art. 299 - C??digo Penal)</li>
                                <li>Voc?? poder?? cancelar seu agendamento com at?? 24h de anteced??ncia. Em caso de n??o comparecimento, um novo agendamento ser?? permitido ap??s 48h do agendamento anterior.</li>
                                <li>O hor??rio de agendamento poder?? sofrer altera????es, caso surjam problemas log??sticos identificados pelo supervisor da sala de vacina</li>
                            </ul>

                            <Divider />

                            <p className={classes.field}>Cidad??o: <span className={classes.fieldData}>{name}</span></p>
                            <p className={classes.field}>Localiza????o: <span className={classes.fieldData}>{selectedLocal}</span></p>
                            <p className={classes.field}>Vacina: <span className={classes.fieldData}>Coronavac - Buntantan</span></p>
                        </div>
                        <Button variant={'contained'} className={classes.btn} onClick={handleClose}>Fechar</Button>
                        <Button variant={'contained'} className={classes.btn} onClick={handlePrint}>Imprimir</Button>

                    </div>
                </Fade>
            </Modal>

        </Container>
    )
}



