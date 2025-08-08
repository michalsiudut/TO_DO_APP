import './Buttons.css';

export const CustomButton = ({ onClick, useEditAnimation, useAnimation, isFull, text, clas }) => {

    return (<button onClick={onClick} className={`${useAnimation ? clas : 'plus'} ${useEditAnimation ? 'editAnimation' : 'editButton'}`} id={isFull ? 'plusHover' : 'plus'}>{text}</button>)

}