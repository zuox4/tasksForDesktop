
import PurchaseHistory from "../components/PurchaseHistory/PurchaseHistory"
export const MyPurchaseHistory = () =>{
    return(
        <div className="shop">
            <h1 style={{margin:'0', fontSize:'20px', textAlign:'left', textTransform:'uppercase'}}>Ваши заказы</h1>
            <PurchaseHistory />
            
        </div>
    )
}