
export const AdditionalInfo = ({ title, icon }) =>{
    return(
        <div style={{display:'flex', flexDirection:'row', gap:'5px'}}>
            <img style={{width:'20px'}} src={icon} alt=""/>
            <span>{title}</span>
        </div>
    )
}