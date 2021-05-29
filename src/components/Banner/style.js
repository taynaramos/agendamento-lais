import styled from 'styled-components'

export const Container = styled.section`

display: flex;
margin: 0;
padding: 0;
height: 100%;
width: 35%;

.banner {
    min-height: 100vh;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.banner > img {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
}

.banner-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin-top: 15rem;
}

.banner-text p {
    margin: 2rem 0;
}

.banner-logos {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 6rem;
}

.banner-logos img {
    max-width: 40%;
}
`