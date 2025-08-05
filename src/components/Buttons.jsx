import './Buttons.css';

export const CustomRemovingbutton = ({ onClick }) => {

    return <button className='minus' onClick={onClick}>Remove</button>;
}

export const CustomAddingbutton = ({ onClick, useAnimation, isFull }) => {

    return (<button onClick={onClick} className={useAnimation ? 'plusAnimation' : 'plus'} id={isFull ? 'plusHover' : 'plus'}>
        <i class="fa-solid fa-plus"></i>
    </button>);
}

export const CustomEditbutton = ({ onClick }) => {
    return (<button onClick={onClick} className='editButton'>Edit</button >)
}

export const CustomSavebutton = ({ onClick }) => {
    return (<button onClick={onClick} className='saveButton'>Save</button>)
}

export const CustomCancelbutton = ({ onClick }) => {
    return (<button onClick={onClick} className='cancelButton'>Cancel</button>)
}