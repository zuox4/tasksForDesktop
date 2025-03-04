
import { ShopDashboard } from "../components/Shop/ShopDashboard"

export const Shop = () =>{
    return(
        <div className="shop">
            <h1 style={{margin:'0', fontSize:'20px', textAlign:'left', textTransform:'uppercase'}}>Обмен баллов на товары</h1>
            <ShopDashboard/>
        </div>
    )
}