import User from "./userinfo"
import { Component } from "react"
import userContext from "../utils/userContext"


class About extends Component{
    constructor(props){
        super(props)
        // console.log("parent constructor");
        this.state={userInfo:{
            name:" ",
            location:" "
        }
        }
        
    }

    async componentDidMount(){
        console.log("about did mount");
        const data=await fetch("https://api.github.com/users/suhailabdaz");
        const json=await data.json()
        console.log(json);
        this.setState({
            userInfo:json
        })
    }

    componentDidUpdate(){
        console.log("about did update");

    }
    componentWillUnmount(){
        console.log("about will unmount");


    }
    render(){
        const {name,location}=this.state.userInfo
        return(
            
        <div>
        <userContext.Consumer>{
                ({userName})=><h1>{userName}</h1>
            }
            </userContext.Consumer>
        <User name={name} place={location}/>
    </div>
        )
    }
    
}

export default About