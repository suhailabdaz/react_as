
import React from "react";

class User extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
        }
        console.log(this.props.name+"constructor");
    }
    componentDidMount(){
        console.log(this.props.name+" mounted");
    }
        render(){
            console.log(this.props.name+"renderd");
            const {name,place}=this.props
            const {count}=this.state
            return( 
            <div className="userinfo-card">
            <div className="user-elements">
                <h1>{name}</h1>
                <h2>{place}</h2>
                <h1>{count}</h1>
                </div>
                <button type="button" onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>
                CLiCK
                </button>
            </div>
            )
            
        }
    }

    export default User

