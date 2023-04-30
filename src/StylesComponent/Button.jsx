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
    background: linear-gradient(to left, #309255 50%, #81f7ae 50%) right;
    background-size: 200% 100%;
    color: white;
    cursor: pointer;
    text-transform: capitalize;
    transition: all 0.3s ease;

    &:hover {
        background-position: left;
        transition: all 2s ease;
        color: #859494;
    }
    &:focus {
        color: #1d2733;
    }
`;
