import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
// using default value for class name cause it can be undefined 
export default function Modal ({children,onClose, open ,className=""}){
    const dialog= useRef()
    useEffect(()=>{
        const modal=dialog.current;
        if(open){
            modal.showModal();
        }
        // use clean up function 
        return ()=>modal.close();
    },[open])
return createPortal(<dialog onClose={onClose} ref={dialog} className={`modal ${className}`}>{children}</dialog>,document.getElementById('modal'))
}