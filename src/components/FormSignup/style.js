import styled from 'styled-components'

export const Container = styled.div`

display: flex;
justify-content: center;


.form {
    width: 100%;
    max-width: 30rem;
    padding: 2rem 3rem;
    color: #4a4a4a;
}

.form > p{
    width: 100%;
    text-align: center;
    margin-top: 0;
}

.form > p:first-child{
    color: #00B3F3;
    margin-bottom: 0;
}

.form-field {
    display: flex;
    flex-direction: column;
    margin: 0.6rem 0;
}

.form-btn {
    text-transform: capitalize;
    width: 100%;
    background-color: #00B3F3;
    color: #fff;
    margin: 1rem 0;
}
`