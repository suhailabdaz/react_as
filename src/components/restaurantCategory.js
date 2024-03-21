import CategoryItems from "./categoryItems"

export const RestaurantCategory=(props)=>{
    const {title,itemCards}=props.data
    const {shouldshow,show}=props
    
    const handleClick=()=>{
        shouldshow()
    }
    return(
        <div>
            <div className="bg-slate-100 shadow-md w-6/12 mx-auto my-4 p-3 transition ease-in-out duration-1000 " >
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold" >{title} <span>({itemCards.length})</span></span>
                <span className="font-semibold ">show</span>
            </div>
            { show && <CategoryItems items={itemCards}/>}
            </div>
        </div>
    )
}

