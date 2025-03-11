import close from '../assets/close.svg'
import { useSelector, useDispatch } from "react-redux";

import { closeModal } from "../features/modal/modalSlice";
import { useEffect } from 'react';
import { LoginForm } from './Login/LoginForm';
import { ChangeRolePage } from './ChangeRolePage';
export const ModaConteiner = () =>{
    useEffect(()=>{
        console.log(12)
    },[])
    const componentsMap = {
        LoginForm,
        ChangeRolePage
};  
    const { isOpen, componentName, props } = useSelector((state) => state.modal);
    const dispatch = useDispatch();
    if (!isOpen) return null;
    const ComponentToRender = componentsMap[componentName];
    const handleBackdropClick = (e) => {
            if (e.target === e.currentTarget) {
            dispatch(closeModal());
            }
        };
    return(
        <div onClick={handleBackdropClick} style={{backdropFilter:'blur(2px)',display:'flex',  height:'100%', width:'100%', backgroundColor:'rgba(2, 2, 2, 0.63)', zIndex:'1000', position:'fixed', bottom:'0', left:0}}>
            <div style={{height:'fit-content',  margin:'auto', borderRadius:'10px'}}>
                <div style={{margin:'20px'}}>
                    {ComponentToRender && <ComponentToRender {...props} />}
                </div>
            </div>
        </div>
    )
}