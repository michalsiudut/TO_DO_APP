

export const CustomRemovingbutton = ({ onClick }) => {

    return <button className='minus' onClick={onClick}>-</button>;
}

export const CustomAddingbutton = ({ onClick }) => {

    return (<button onClick={onClick}>
        +
    </button>);
}