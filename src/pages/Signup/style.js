import styled from 'styled-components'

export const Container = styled.main`
display: flex;
margin: 0;
padding: 0;
height: 100%;
width: 100%;

.main {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding: 1rem;
}

.main-signup {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #4A4A4A;
}

.main-signup-btn {
    background-color: #1E293B;
    font-size:16px;
    color:#FFFFFF;
    display: flex;
    align-items: center;
    margin-left: 1rem;
}

.btn-user{
    margin-right: 5px;
}

.btn-text {
    text-transform: capitalize;
}

.main-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.agreement {
    text-align: center;
    width: 60%;
}

.agreement span {
    color: #4A4A4A;
    text-decoration: underline;
}
`