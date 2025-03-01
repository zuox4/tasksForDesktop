import { useSelector } from "react-redux"

export const Balance = () =>{
    const {value} = useSelector(state=>state.balance)
    return(
        <div className="" style={{height:'30px', padding:'0px 10px',background:'linear-gradient(90deg, #FBBA13, #B06FE2)', borderRadius:'10px', alignContent:'center'}}>
            <span style={{color:'white', fontWeight:'600'}}>{value} KCoins</span>
        </div>
    )
}