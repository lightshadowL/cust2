
const CustomerProfile =(props)=>{

    return(
        <div>
            <img src={props.image} width={100} height={100} alt=""/>
            <h2>{props.name}({props.id})</h2>
        </div>
    )
}

export default CustomerProfile;