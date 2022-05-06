import styled from "styled-components";

export const Container = styled.div`
   max-width: 100%;
   height: 70%;
   flex-direction: column;
   display: flex;
`
export const Card = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    padding: 0 0 20px;
    margin: 20px auto 0;
    width: 80%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
    border-radius: 6px;
`;
export const Button = styled.form`
    color: #FFFFFF;
    font-size: 1.8em;
    background: #0275d8;
    height: 50%;
    border: 2px solid;
    border-radius: 8px;
    width: 100%;
`
