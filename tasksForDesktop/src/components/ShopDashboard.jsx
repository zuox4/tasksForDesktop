import { ShopItem } from "./ShopItem"

export const ShopDashboard = () =>{
    return(
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between', rowGap:'40px', marginTop:'30px', columnGap:'30px'}}>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>

        </div>
    )
}