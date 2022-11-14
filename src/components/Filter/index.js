import "./index.css"

import { Component } from "react"

import {AiOutlineSearch } from "react-icons/ai";
import {BsFilter } from "react-icons/bs";

import Filterdata from '../Filterdata'


class Filter extends Component{
    state ={
        filterapplydata:[],
        sub:"",
        selectValue:""

    }

    getSbscription = (event)=>{
        this.setState({sub:event.target.value})
    }

    getBurner = (event)=>{
        this.setState({sub:event.target.value})

    }
   

    getSelectValue= (event)=>{
        this.setState({selectValue:event.target.value})

    }



    filterApply = ()=>{
        const {carddata} = this.props
        const {selectValue,sub } = this.state
        const searchFilters = carddata.filter(element => {
            return element.card_type === sub && element.user_name === selectValue;
          });
          console.log(searchFilters)
          this.setState({filterapplydata:searchFilters})
    }


    

    render(){
        const {selectValue ,filterapplydata } = this.state


        return(
            <>
            
            <div className='filter-list'>
        <AiOutlineSearch className='filter-logo'/>
        <button className='filter-btn' onClick={this.getModal}><BsFilter className='filter-logo1'/> Filter</button>
      </div>
            <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                <button
                    onClick={this.getClosedModal}
                >
                    X
                </button>
                </div>
                <div className="title">
                <p>Filters</p>
                <hr/>
                </div>
                <div className="inputs">
                <input className="checkbox-sub" type="checkbox" value="subscription" onChange={this.getSbscription}/> Subscription
                <input className="checkbox-sub" type="checkbox" value="burner" onChange={this.getBurner}/> Burner
                </div>
                <p className="cardholder">Card Holder</p>
                <select className="select-option"  value={selectValue} onChange={this.getSelectValue}>
                    <option value="select card holder">Select card holder</option>
                    <option value="Vishal">Vishal</option>
                    <option value="Rajesh">Rajesh</option>
                    <option value="Rajith">Rajith</option>
                    <option value="Mayank">Mayank</option>
                </select>
                <div className="footer">
                <button id="apply-button" onClick={this.filterApply}>Apply</button>
                <button id="cancelBtn" onClick={this.filterCancel}>Clear</button>
                </div>
            </div>

            
    </div>

    <Filterdata filterapplydata={filterapplydata}/>
    </>
        )
        
    }

}

export default Filter