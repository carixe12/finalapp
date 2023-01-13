import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border: 1px solid lightblue;
    width: 100%;
    border-radius: 20px;
    height: 100%;
    padding: 2px;

    button {
        border-radius: 2 2 20px 20px;
        height: 200%;
        width: 80%;
        justify-content: center;
    }

    img {
        max-height: 250px;
        object-fix: cover;
        border-radius: 20px 20px 0 0;
        width: 20%;
        margin: 15px auto;
        
    }

    div {
        font-family: Arial, Helvetica, sans-serif;
        padding: 1rem;
        height: 250%;
        font-size: 12px;
        
    }
    
    div h2 {
        
    }
`;