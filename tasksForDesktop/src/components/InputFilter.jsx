import { useEffect, useState } from 'react'
import closeIcon from '../assets/close.svg'
export const InputFilter = ({ inputValue, setInputValue, placeholder }) =>{

    const [value, setValue] = useState('')

    const [count, setCount] = useState(0)
    
    useEffect(()=>{
        
        const interval = setInterval(() => {
            setCount(prevCount => {
                if (prevCount < placeholder.length) {
                    setValue(prevValue => prevValue + placeholder[prevCount]);
                    return prevCount + 1;
                } else {
                    setValue('');
                    return 0;
                }
            });
        }, 200)
        return () => {
            setInputValue('')
            clearInterval(interval);} // Очистка интервала при размонтировании

    },[])
    return(
        <div style={{display:'flex',flexDirection:'row',height:'40px', alignItems:'center', justifyContent:'space-between', width:'100%',marginTop:"25px", background:'none', borderRadius:'5px',border:'solid 1px grey'}}>
            <input type="text" onChange={(e)=>setInputValue(e.target.value)} value={inputValue} style={{height:'20px', outline:'none', fontSize:'15px', marginLeft:'10px', background:'none', border:'0'}} placeholder={value}/>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', marginRight:'0px', height:'100%'}}>
                {inputValue.length>0&&<img src={closeIcon} style={{width:'15px', height:'15px', marginRight:'10px'}} onClick={()=>setInputValue('')}/>}
                {/* <div style={{background:'yellow', fontSize:'15px',width:'60px', height:'100%', padding:'0px 10px 0px', fontWeight:'600', borderRadius:'5px', display:'flex', alignItems:'center', justifyContent:'center'}} >Найти</div> */}
            </div>

        </div>
    )
}