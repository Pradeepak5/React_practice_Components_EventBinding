import React from "react";

class Likes extends React.Component{
    constructor(props){
        super(props);
        this.state={
            likes:0,
            message:''
        }
    }
    LikeMe=()=>{
        this.setState({
            likes:this.state.likes+1,
            message:'Thanks for your '
        })
    }
    render(){
        if(this.state.likes>1){
            return(
                <div>
                    <h1>Likes - {this.state.likes}</h1>
                    <button onClick={this.LikeMe}>Like</button>
                    <h2>{this.state.message}{this.state.likes} likes</h2>
                </div>
            )
        }
        else if(this.state.likes==1){
            return(
                <div>
                    <h1>Likes - {this.state.likes}</h1>
                    <button onClick={this.LikeMe}>Like</button>
                    <h2>{this.state.message}{this.state.likes} like</h2>
                </div>
            )
        }
        else{
            return(
                <div>
                    <h1>Likes - {this.state.likes}</h1>
                    <button onClick={this.LikeMe}>Like</button>
                </div>
            )
        }
    }
}

export default Likes;