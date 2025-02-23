import { useImperativeHandle,useRef } from "react"
export default function ResultModal({ref,result ,targetTime}){
    const dialog=useRef();
    useImperativeHandle(ref,()=>{
        // return an object
        return {
            open(){
                dialog.current.showModal();
            }
        }
    })
    return <dialog ref={dialog} className="result-modal">
        <h2>You {result}</h2>
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p> you stopped the timer with <strong>X second left</strong> </p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
}