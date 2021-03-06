import styled from "styled-components";

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
    button {
    color: #ffffff;
    font-size: 1em;
    background: #0000FF;
    height: 50px;
    border: 2px solid;
    border-radius: 5px;
    width: 100px;
    cursor: pointer;
  }
`;
