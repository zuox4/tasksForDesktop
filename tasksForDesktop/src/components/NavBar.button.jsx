import { Link, useLocation } from "react-router"

export const NavBarButton = ({path, name, icon}) =>{
    const location = useLocation()
    return(
        
            <Link to={path} style={{background: location.pathname===path?'#E3E8F2':'white', width:'288px', margin:'10px', borderRadius:'20px', height:'40px', alignContent:'center', color:"black", fontSize:'14px', fontWeight:'500'}}>
                <div style={{marginLeft:'12px', display: 'flex', alignItems:'flex-end', gap:'12px'}}>
                    <img src={icon} />
                    {name}
                </div>

            </Link>
        
    )
}