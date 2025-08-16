export const CustomButton = ({ onClick, useEditAnimation, useAnimation, isFull, text, clas }) => {

    return (<button onClick={onClick} className="mt-2 ml-10" id={isFull ? 'plusHover' : 'plus'}>{text}</button>)

}