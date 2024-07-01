export default function Button({text, click} ){
    return (
        <>
        <button onClick={click}>{text}</button>
        </>
    )
}