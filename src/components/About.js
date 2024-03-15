import User from "./userinfo"
import { Component } from "react"


class About extends Component{
    constructor(props){
        super(props)
        console.log("parent constructor");
    }

    componentDidMount(){
        console.log("parent mounted");
    }
    render(){
        console.log("parent rendered");
        return(
        <div>
        <User name={"suhail"} place={"kannur"}/>
        <User name={"fede"} place={"valdebas"}/>
        <User name={"diaz"} place={"maghreb"}/>
    </div>
        )
    }
    
}

export default About