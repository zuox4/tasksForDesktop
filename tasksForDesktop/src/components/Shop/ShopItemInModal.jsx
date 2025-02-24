export const ShopItemInModal = ({buyItem, product, item}) =>{
    return(
        <div>
            <img style={{width:'200px'}} src={product}/>
            <h1>{item.title}</h1>
            <h4>Описание</h4>
            <button onClick={buyItem}>Подтвердить покупку товара {item.id}</button>
        </div>
    )
}