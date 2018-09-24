
import styled from 'styled-components';

export const Nav = styled.nav`
    background-color: #333;
    overflow: hidden;

    a {
        float: left;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;

        :hover {
            background-color: #ddd;
            color: black;
        }

        &.active {
            background-color: #4CAF50;
            color: white;
        }
    }
`;
