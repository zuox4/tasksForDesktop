import { useEffect, useState } from "react"
export const ModalWindow = ({ children, isOpened, setIsOpened }) =>{

    return(
        <div style={{display:'flex',  height:'100%', width:'100vw', backgroundColor:'rgba(2, 2, 2, 0.63)', position:'fixed', bottom:'0', left:0}}>
            <div style={{height:'fit-content', width:'500px', background:'white', margin:'auto', }}>
                <div onClick={()=>setIsOpened(false)}>Закрыть</div>
                {children}
            </div>
        </div>
    )
}