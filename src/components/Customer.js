import React from "react";
import CustomerProfile from "./CustomerProfile";
import CustomerInfo from "./CustomerInfo";

/* class Customer extends React.Component{
    render(){
        return(
            <div>
                <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name} />
                <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>
            </div>
        )
    }
} */

/* class CustomerProfile extends React.Component{
    render(){
        return (
            <div>
                <img src={this.props.image} width={100} height={100} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
} */

/* class CustomerInfo extends React.Component{
    render(){
        return (
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
} */

const Customer = (props)=>{
    console.log(props);
    return(
        <div>
            <CustomerProfile 
                id={props.id}
                image={props.image}
                name={props.name}
            />
            <CustomerInfo
                birthday={props.birthday}
                gender={props.gender}
                job={props.job}
            />
        </div>
    )
}

export default Customer;