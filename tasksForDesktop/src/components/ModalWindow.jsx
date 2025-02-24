export const ModalWindow = ({ children }) =>{

    return(
        <div style={{display:'flex',  height:'100%', width:'100vw', backgroundColor:'rgba(51,51,51,0.71)', position:'fixed', bottom:'0', left:0}}>
            <div style={{height:'500px', width:'500px', background:'white', margin:'auto', }}>
                <div>Закрыть</div>
                {children}
            </div>
        </div>
    )
}