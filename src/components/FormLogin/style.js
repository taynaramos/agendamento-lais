import styled from 'styled-components'

export const Container = styled.main`

&.main-form {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.form {
    width: 40%;
    max-width: 30rem;
    padding: 2rem 3rem;
    color: #4a4a4a;
}

.form > p:first-child{
    color: #00B3F3;
    width: 100%;
    text-align: center;
    margin-top: 0;
}

.form-field {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
}

.forgot-password {
    width: 100%;
    text-align: end;
}

.form-btn {
    text-transform: capitalize;
    width: 100%;
    background-color: #00B3F3;
    color: #fff;
}
`