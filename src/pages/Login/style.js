import styled from 'styled-components'

export const Container = styled.main`
display: flex;
margin: 0;
padding: 0;
height: 100%;
width: 100%;

@media (max-width: 850px) {
    & {
        display: flex;
        flex-direction: column;
    }

}

.main {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding: 1rem;
}

@media (max-width: 850px) {
    .main {
        width: 90%;
        margin: 0 auto;
    }

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