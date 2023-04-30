import styled from "styled-components";

export const Button = styled.button`
    border-radius: 8px;
    border: none;
    padding: 1rem 2.188rem;
    margin: 1rem;
    font-size: 1.125rem;
    font-weight: 500;
    font-family: inherit;
    background-color: #309255;
    color: white;
    cursor: pointer;
    text-transform: capitalize;
    transition: all 0.3s ease;

    &:hover {
        background-color: #68686d;
    }
    &:focus {
        color: #1d2733;
    }
`;

