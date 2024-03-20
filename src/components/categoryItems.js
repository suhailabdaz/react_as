import { IMAGE_URL } from "../utils/constants";


const CategoryItems=(props)=>{
     const items=props.items
     console.log(items);
    return (
        <div>
            {
                items.map((item)=>
                <div key={item.card.info.id} className="m-6 text-left p-2 border-gray-200 border-b-2 flex">
                
                <div className="w-9/12">
                     <div className=" py-2 text-lg font-semibold ">
                    <span>{item.card.info.name}</span>
                    <div>
                    {
                        item.card.info.finalPrice ? (
                            <>
                    <span className="line-through text-base font-light">Rs.{ item.card.info.price/100}</span>
                    <span className="text-base font-light mx-3">Rs.{ item.card.info.finalPrice/100}</span>
                    </>
                        ):(
                            <span className="text-base font-light">Rs.{ item.card.info.price/100}</span>

                        )
                    }
                    </div>
                    </div>
                    <span className="text-xs">{item.card.info.description}</span>
                    </div>
                    <div className="w-3/12 p-2">
                    <div className="absolute">
                        <button className=" px-5 mx-9 mt-20 bg-slate-50 text-green-700 rounded-md">
                        Add +
                        </button>
                    </div>
                    
                    <img src={IMAGE_URL+item.card.info.imageId} className="rounded-md"/>
                    
                </div>
                </div>)
            }
        </div>
    )
}

export default CategoryItems