import {useSelector} from 'react-redux'

export const Test =  () =>{
    const value = useSelector((state)=>state.input.value)
    return(
        <div>{value}</div>
    )
}