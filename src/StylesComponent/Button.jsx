import styled from "styled-components";

export const Button = styled.button`
    border-radius: 8px;
    border: 1px solid #309255;
    padding: 1rem 2.188rem;
    margin: 1rem;
    font-size: 1.125rem;
    font-weight: 500;
    font-family: inherit;
    background-color: #309255;
    background: linear-gradient(to left, #309255 50%, white 50%) right;
    background-size: 200% 100%;
    color: white;
    cursor: pointer;
    text-transform: capitalize;
    transition: all 0.5s ease;
    &:hover {
        background-position: left;
        transition: all 2s ease;
        background-color: white;
        color: #309255;
    }
    /* &:focus {
        color: #1d2733;
    } */
`;
