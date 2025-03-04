import { useEffect, useState } from 'react'
import buyIcon from '../../assets/buy3.svg'
import { Link } from 'react-router'
import KCoinLogo from '../../assets/KCoins.svg'
import { useDispatch, useSelector } from 'react-redux'
export const ShopItemInModal = ({buyItem, product, item}) =>{
    const {value} = useSelector(state=>state.balance)
    const [isPossible, setIsPossible] = useState(false)
    const dispatch = useDispatch()
    useEffect(()=>{
       setIsPossible(item.price>value)
       return ()=>{
        setIsPossible(false)}
    },[])

    return(
        <div style={{display:'flex', width: '400px', flexDirection:'column', alignItems:'center', }}>
            <img style={{width:'350px',}} src={item.url||product}/>
            <h2 style={{margin:'5px 0 5px 0',fontSize:'18px',textAlign:'left',width:'100%',marginTop:'15px'}}>{item.title}</h2>
            <h4 style={{margin:'5px 0 5px 0'}}>Описание товара</h4>
            <span style={{textAlign:'justify',}}>sdjkcsokdjckljasnkdcni ajsndcklja sndckljnask ldcnjalksjdnc dsfdfsfs sdf sdfsdfsdf sdfsdfsdf sdfsdfsdf sdfsdfsdf </span>
            <button disabled={isPossible} 
                    style={{display:'flex', alignItems:'center', gap:'30px', marginTop:'20px' }} 
                    onClick={buyItem}>
                <div style={{display:'flex', gap:'7px'}}>{!isPossible?`Заказать товар за ${item.price}`:`Не хватает ${Math.abs(value-item.price)}`}{<img style={{width:'55px', filter:isPossible&&'opacity(0.6)'}}src={KCoinLogo}/>}</div>{!isPossible&&<img style={{width:'30px',filter:isPossible&&'opacity(0.6)'}} src={buyIcon}/>}
            </button>
            {isPossible&&<Link to={'/tasks'} style={{marginTop:'10px'}}>Перейти к выполнению заданий</Link>}
        </div>
    )
}