import { useSelector } from "react-redux"
import { Link } from "react-router"
const Role = ({name, icon})=>{
    const roleNames = {'worker':'Сотрудник', 'teacher':'Учитель'}
    return(
        <Link to={`./${name}`} style={{width:'400px', background:'red', borderRadius:'10px'}}>
            <span>{roleNames[name]}</span>
        </Link>
    )
}
export const ChangeRolePage = () =>{
    const {roles} = useSelector(state=>state.auth.user)
    return(

        <div>
            {roles.map((role)=><Role key={role} name={role}/>)}
        </div>

    )

        
    
}