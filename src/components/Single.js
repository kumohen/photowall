import React, { Component } from 'react';
import {connect} from 'react-redux';
import Photo from "./Photo";
import Comment from "./Comment";

class Single extends Component {
    render() {
        const id = Number(this.props.params.match.params.id);
        const posts = this.props.posts;
        const comments = this.props.comments[id] || [];
        const post = posts.find(post => post.id === id)
        const index = posts.findIndex(post => post.id === id);
     
        return (
            <div className="single-photo">
                <Photo post={post} {...this.props}  index={index} />
                <Comment comments={comments} id={id} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      posts:state.posts,
      comments:state.comments
    }
  }

export default connect(mapStateToProps,null)(Single);