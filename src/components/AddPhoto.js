import React, { Component } from 'react';
import {connect} from "react-redux";
import {startAddingPost} from "../actions";

class AddPhoto extends Component {
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const imageLink = e.target.elements.link.value;
        const description= e.target.elements.description.value;
        const post ={
            id:Number(new Date()),
            imageLink:imageLink,
            description:description
        }
        if(imageLink && description){
            this.props.startAddingPost(post);
            this.props.history.push("/")
        }
    }
    render() {
        return (
            <div>
                
                <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Link" name="link"/>
                    <input type="text" placeholder="Description" name="description" />
                    <button >Post</button>
                </form>    
                </div>
            </div>
        );
    }
}



export default connect(null,{startAddingPost})(AddPhoto);