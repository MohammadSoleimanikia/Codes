import { useState } from "react"
export default function Player({initialName,symbol}){
    let [playerName,setPlayerName]=useState(initialName);
    let [isEditing,setIsEditing]=useState(false);
    function handleClick(){
        setIsEditing(isEditing=>!isEditing);
    }
    function handleChange(event){
        setPlayerName(event.target.value)
    }
    let edittablePlayerName=<span className="player-name">{playerName}</span>;
    if(isEditing){
        edittablePlayerName=<input onChange={handleChange} type="text" value={playerName}/>
    }
    return (
        <li>
            <span className="player">
            {edittablePlayerName}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing?'save':'edit'}</button>
        </li>
    )
}