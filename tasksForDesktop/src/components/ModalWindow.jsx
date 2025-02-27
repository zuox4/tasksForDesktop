import { useEffect, useState } from "react"
import close from '../assets/close.svg'
export const ModalWindow = ({ children, isOpened, setIsOpened }) =>{

    return(
        <div style={{backdropFilter:'blur(2px)',display:'flex',  height:'100%', width:'100vw', backgroundColor:'rgba(2, 2, 2, 0.63)', zIndex:'1000', position:'fixed', bottom:'0', left:0}}>
            <div style={{height:'fit-content', width:'400px', background:'white', margin:'auto', borderRadius:'10px'}}>
                <div style={{display:"flex", flexDirection:'row', justifyContent:'right', margin:'20px'}} ><img style={{cursor:'pointer', width:'15px'}} onClick={()=>setIsOpened(false)} src={close}/></div>
                <div style={{margin:'20px'}}>
                    {children}
                </div>
            </div>
        </div>
    )
}