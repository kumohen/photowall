import React, { Component } from 'react';
import {connect} from "react-redux";
import {startAddingComment} from "../actions/index";

class Comment extends Component {
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit (e){
        e.preventDefault();
        this.props.startAddingComment(e.target.elements.comment.value,this.props.id);
        e.target.elements.comment.value=''
    }
    
    render() {
        // const comments = this.props.comments;
        // console.log(comments)
     
        return (
            <div className="comment">
                { this.props.comments.map((comment,index) => {
                    return(
                        <p key={index}>{comment}</p>
                    )
                })}
                <form className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="comment" name="comment"/>
                    <input type="submit" hidden />
                </form>    
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//       comments:state.comments
//     }
//   }
export default connect(null,{startAddingComment})(Comment);