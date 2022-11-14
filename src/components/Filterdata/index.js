import "./index.css"
import {GoPrimitiveDot} from "react-icons/go"

const Filterdata=(props)=>{
    const {filterapplydata} = props

    return(
        <ul>
            {filterapplydata.map(item=>(
                <div>
                    <div className="card_box_cointainer">
                <div className="arrange-flex-direction">
                    <div>
                        <p style={{fontWeight:"bold" , fontSize:"25px"}}>{item.name}</p>
                        <p className="user_name">{item.user_name} <GoPrimitiveDot /> {item.budget_name}</p>
                        <p className="user_name"><span className="continer_card">{item.card_type}</span></p>

                    </div>
                    
                    <div className="img_block">
                        <div className="arrange_color">
                            <img   className="img1" style={{height:"30px" , width:"30px"}}  src={item.spent.imgUrl} alt={item.card_type} />
                        </div>
                        <div>
                        {(() => { 
                            if (item.card_type === "BURNER"){
                                return(
                                    <p className="user_name margin" style={{margin:"5px"}}>{item.expiry}</p>
                                )
                            }else if (item.card_type === "SUBSCRIPTION"){
                                return(
                                    <p className="user_name margin" style={{margin:"5px"}}>{item.expiry} Limit : {item.limit} {item.available_to_spend.currency}</p>
                                )  
                            }
                        })()}

                        </div>
                    </div>

                </div>
                <div className="back_color">
                </div>
                <div className="arrange-flex-direction">
                    <div>
                        <p style={{color:"red"}}> <GoPrimitiveDot  size="15" /> <span className="font_size">Spent</span></p>
                        <p style={{color:"green" }} > < GoPrimitiveDot size="15" /> <span className="font_size">Available to spend</span></p>
                    </div>
                    <div className="flex-container">
                        <p className="font_size" style={{marginRight:"5px" , alignSelf:"flex-end"}}>{item.spent.value} {item.spent.currency}</p>
                        <p className="font_size" style={{marginRight:"5px"}}>{item.available_to_spend.value} {item.available_to_spend.currency}</p>
            
                    </div>

                </div>
                
                

            </div>
                </div>
            ))}
        </ul>
    )

}

export default Filterdata