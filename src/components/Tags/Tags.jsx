import styled from "styled-components"


const BotoesTags = styled.button`
    background: transparent;
    border: 2px solid #8f8f8f;
    border-radius: 10px;
    color: #fff;
    padding: 5px;
    transition: background-color 0.3s;

    &:hover{
        background-color: #636363;
    }
`

export const Tags = ({value, onClick}) => {
    return(
        <BotoesTags onClick={() => onClick(value)}>
            {value}
        </BotoesTags>
    )
}