export const Tags = ({value, onClick}) => {
    return(
        <button onClick={() => onClick(value)}>
            {value}
        </button>
    )
}