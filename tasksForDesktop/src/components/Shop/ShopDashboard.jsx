import { ShopItem } from "./ShopItem"
import {ModalWindow} from "../ModalWindow.jsx";

export const ShopDashboard = () =>{
    const products = [
        {"id": 1, "title": "Ноутбук", "price": 50000},
        {"id": 2, "title": "Смартфон", "price": 30000},
        {"id": 3, "title": "Планшет", "price": 25000},
        {"id": 4, "title": "Наушники", "price": 5000},
        {"id": 5, "title": "Часы", "price": 15000},
        {"id": 6, "title": "Фотоаппарат", "price": 40000},
        {"id": 7, "title": "Телевизор", "price": 60000},
        {"id": 8, "title": "Принтер", "price": 10000},
        {"id": 9, "title": "Микроволновка", "price": 12000},
        {"id": 10, "title": "Холодильник", "price": 70000},
    ]
    return(
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around', rowGap:'40px', marginTop:'30px', columnGap:'30px'}}>
            {products.map((e)=><ShopItem item={e}/>)}

        </div>
    )
}