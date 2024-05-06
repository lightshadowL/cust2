import React from "react";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
// import CustomerProfile from "./CustomerProfile";
// import CustomerInfo from "./CustomerInfo";

class Customer extends React.Component{
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} width={100} height={100} alt="profile image"/></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
            </TableRow>
        )
    }
}





/* const Customer = (props)=>{
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
} */

export default Customer;