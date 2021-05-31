import styled from 'styled-components'

export const Container = styled.div`

margin: 1rem;

.card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.card-header-info {
    display: flex;
}

.card-header-info img {
    width: 30px;
}

.card-header-info:last-child {
    color: ${props => props.status === "Agendado" ? "#00CF9F": "#DC2626" };
    font-family: 'PoppinsSemiBold';
}

.card-header-info-vacina {
    display: flex;
    flex-direction: column;
    color: #00B3F3;
    font-family: 'PoppinsSemiBold';
}

.card-header-info-vacina span:last-child {
    font-family: 'PoppinsRegular';
}

.card-content {
    font-family: 'PoppinsRegular';
    color: #1E293B;
    display: flex;
    flex-direction: column;
}

.card-content img {
    margin-right: 10px;
}

.card-content-local {
    display: flex;
    align-items: center;
}

.card-content-info {
    display: flex;
    justify-content: space-between;
    margin-top: 0.8rem;
}

.card-content-info-data, .card-content-info-time {
    display: flex;
    align-items: center;
}

.card-btns {
    padding: 0;
}

.card-btn {
width: ${props => props.status === 'Agendado' ? '50%' : '100%'};
    border-radius:0px;
    color: #fff;
    text-transform: capitalize;
    font-family: 'PoppinsRegular';
}

.card-btn:first-child {
    background-color: #00B3F3;
}

.card-btn:last-child {
    background-color:  ${props => props.status === 'Agendado' ? '#DC2626' : ''};
    margin-left: 0;
}

`