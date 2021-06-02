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

.filter-form {
    display: flex;
    margin-bottom: 1rem;
    width:100%;
}

.filter-form img {
    margin-right: 20px;
    width: 20px;
}

.filter-form > div {
    margin: 0 1rem;
    max-width: 25%;
}

.agendamento-cards {
    display: flex;
    flex-wrap: wrap;
}

`