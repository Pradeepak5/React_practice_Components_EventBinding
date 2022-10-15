import React from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            ParentName:'Parent'
        }
        this.GreetParent=this.GreetParent.bind(this);
    }
    GreetParent(childName){
        alert(`Hello ${this.state.ParentName} from ${childName}`);
    }
    render(){
        return(
            <div>
                <ChildComponent greetHandler={this.GreetParent}></ChildComponent>
            </div>
        )
    }
}
export default ParentComponent;