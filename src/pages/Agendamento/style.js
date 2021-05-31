import styled from 'styled-components'

export const Container = styled.main`

display: flex;

.menu {
    width: 20%;
    min-height: 100vh;
    border-right: solid 1px #00B3F3;
    padding: 1.5rem;
}

.menu-logo {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin: 1.3rem 0;
}

.menu-logo img {
    color: #1E293B;
    width: 36px;
    margin-right: 20px;
}

.menu-logo h3 {
    width: 50px;
    margin: 0;
}

.menu-profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin-bottom: 2.5rem; */
}

.menu-profile > img {
    width: 25%;
    margin-right: 10px;
}

.profile-select {
    display: flex;
    align-items: center;
}

.profile-select-text{
    display: flex;
    flex-direction: column;
    margin-right: 1rem;
    font-size: 16px;
    font-family: 'PoppinsLight';
}

#name {
    font-family: 'PoppinsBold';
    color: #00B3F3;
}

.icon-expanded {
    transform: rotate(180deg);
}

.profile-select-expanded {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    border: solid 1px #00B3F3;
    border-radius: 4px;
    margin:1rem auto;

}

.profile-select-closed {
    display: none;
}

.select-option img {
    margin-right: 0.8rem;
}

.divider {
    margin: 2.5rem 0 1rem 0;
}

.menu-tabs {
    width: 100%;
}

.tabs-btn {
    color:#1E293B;
    margin: 0.5rem 0;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    font-family: 'PoppinsRegular';
    font-size: 16px;
    text-transform: capitalize;
    background-color: #FFFFFF;
    box-shadow: none;
}

.tabs-btn:hover, .tabs-btn-focus {
    background-color: #00B3F3;
    color: #fff;
}

.tabs-btn-icon {
    margin-right: 0.5rem;
    fill: #00B3F3;
}

.tabs-btn:hover .tabs-btn-icon, .tabs-btn-focus .tabs-btn-icon {
    fill: #fff;
}

.main {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2rem;
}

.main-header {
    display: flex;
    justify-content: space-between;
}

.main-header-title {
    font-family: 'PoppinsBold';
    font-size: 26px;
}

.main-header-search {
    display: flex;
    align-items: center;
    border: solid 1px #1E293B;
    border-radius: 4px;
    padding: 0.5rem;
    max-width: 305px;
}

.search-input, .search-icon {
    height: 100%;
    display: flex;
    align-items: center;
}

.main-content {
    padding-top: 1.5rem;
}

`