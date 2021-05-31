import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
    Divider,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
} from '@material-ui/core'

import seringa from 'assets/images/seringa.svg'
import local from 'assets/images/map-marker.svg'
import calendar from 'assets/images/calendar-open.svg'
import time from 'assets/images/time.svg'

import { Container } from './style'


const useStyles = makeStyles({
    root: {
        width: '18rem',
    },
    media: {
        height: 140,
    },
});

export const AgendamentoRealizado = ({vacina, status, localizacao, data, horario}) => {
    const classes = useStyles();

    return (
        <Container status={status}>
            <Card className={classes.root}>

                <CardActionArea>

                    <CardContent className={'card-header'}>
                        <div className={'card-header-info'}>
                            <img src={seringa} alt={''}></img>
                            <div className={'card-header-info-vacina'}>
                                <span>Vacina:</span>
                                {/* vacina */}
                                <span>{vacina}</span>
                            </div>
                        </div>
                        <div className={'card-header-info'}>
                            {/* status*/}
                            <p>{status}</p>
                        </div>
                    </CardContent>

                    <Divider variant="middle" />

                    <CardContent className={'card-content'}>
                        <div className={'card-content-local'}>
                            <img src={local} alt={''}></img>
                            {/* localizacao */}
                            <span>{localizacao} das Dunas</span>
                        </div>
                        <div className={'card-content-info'}>
                            <div className={'card-content-info-data'}>
                                <img src={calendar} alt={''}></img>
                                {/* data */}
                                <span>{data}</span>
                            </div>
                            <div className={'card-content-info-time'}>
                                <img src={time} alt={''}></img>
                                {/* horario */}
                                <span>{horario}</span>
                            </div>
                        </div>
                    </CardContent>

                </CardActionArea>

                <CardActions className={'card-btns'}>

                    <Button size="small" className={'card-btn'}>
                        Detalhes
                    </Button>

                    {status === "Agendado" && <Button size="small" className={'card-btn'}>
                        Cancelar
                    </Button>}

                </CardActions>

            </Card>
        </Container>
    );
}