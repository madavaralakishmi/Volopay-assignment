import "./index.css"
import {Component} from "react"
import ButtonFilter  from "../ButtonFilter"
import CardItems from "../CardItems"
import Filter from "../Filter"


const buttonList = [
    {
        id:1,
        status:"active",
        text:"All"
    }
    ,
    {
        id:2,
        status:"your",
        text:"your"
    },
    {
        
        id:3,
        status:"block",
        text:"Blocked"
    }
]


class AllTab extends Component{
    
    

    state = { 
        activeId:buttonList[0].status , 
        carddata:[]

    }

     onbuttonreply =(status)=>{
        const {details} = this.props;
        this.setState({carddata :details , activeId:status})
        
    }
    

    getFilterItem = ()=>{
        const {activeId , carddata} = this.state
        const filterdata = carddata.filter(eachCard=>eachCard.status===activeId)
        return filterdata
    }

    render(){
        
        const {carddata,activeId}=this.state
        const filterCards=this.getFilterItem()
        console.log(filterCards)

        return(
            <>
            <div className="All_tabs_section">
                <ul>
                    {buttonList.map(data=>(
                        <ButtonFilter  key={data.id} buttondetails={data} onbuttonreply={this.onbuttonreply}/>

                    )
                    )}
                </ul>
                <div>
                    <img  style={{height:"25px" , paddingTop:"4px"}} src="https://i.ibb.co/4NT8CT9/menu-dot.jpg" alt="menudot"/>
                    <img  style={{height:"25px" , marginLeft:"6px"}} src="https://i.ibb.co/HD3L0db/menu-icon.png" alt='menubar'/>
                </div>
            </div>
            <hr style={{marginLeft:"40px" , marginRight:"50px"}}></hr>

            <Filter carddata={carddata}/>

            <ul>
                    {filterCards.map(eachdata =>(
                        <CardItems key={eachdata.owner_id} details={eachdata} />
                    ))}
            </ul>
              
            

             

            </>
        )

    }
}

export default AllTab