export default function TabButton(props){
    function handleClick(){
        alert('btn clicked')
    }
    return <li><button onClick={handleClick}>{props.children}</button></li>;
}