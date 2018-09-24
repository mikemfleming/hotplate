
import styled from 'styled-components';

export const ShoutoutList = styled.section`
    .shoutout-list__card {
        margin: 1rem auto;
        border: 5px solid black;
        padding: 1rem;
        width: 50%;
    }
`;

export const Nav = styled.nav`
    overflow: hidden;
    border-bottom: 5px solid black;

    a {
        float: left;
        color: black;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;

        :hover {
            background-color: #ddd;
            color: black;
        }

        &.active {
            background-color: black;
            color: white;
        }
    }
`;
