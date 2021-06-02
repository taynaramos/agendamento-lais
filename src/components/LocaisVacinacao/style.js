import styled from 'styled-components'

export const Container = styled.div`

margin-top: 2rem;

.local-data-info {
    padding: 1rem 1.5rem;
}

.local-data-info h2 {
    font-family: 'PoppinsBold';
    font-size: 26px;
}

.local-name {
    font-family: 'PoppinsMedium';
    font-size: 18px;
    margin: 0.5rem 0;
}

.available-time {
    display: flex;
    flex-wrap: wrap;
}

.local-data {
    display: flex;
    border: solid 1px #1E293B;
    border-radius: 4px;
    width: fit-content;
    align-items: center;
    font-size: 16px;
    font-family: 'PoppinsRegular';
    margin: 1rem;
}

.local-data-time {
    color: #1E293B;
    width: auto;
    padding: 0.5rem;
}

.local-data-vacancy {
    color: #fff;
    background-color: #1E293B;
    width: auto;
    padding: 0.5rem;
}

.local-divider {
    margin: 1.5rem 0;
}

`