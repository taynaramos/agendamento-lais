import styled from 'styled-components'

export const Container = styled.div`

.agendamento-filter {
    display: flex;
    flex-direction: column;
}

.agendamento-filter span {
    margin: 1rem 0;
}


.agendamento-filter-select {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.agendamento-filter-select img {
    margin-right: 20px;
    width: 20px;
}

.agendamento-filter-select select {
    width: 10rem;
    padding: 0.5rem 0.8rem;
    border: solid 1px #1E293B;
    border-radius: 4px;
    background-color: #fff;
}

.agendamento-cards {
    display: flex;
    flex-wrap: wrap;
}

`