// import React, { Component } from 'react';

// class Photo extends Component {
//     render() {
//         const post = this.props.post;
//         return <figure className="figure">
//                     <img src={post.imageLink} alt={post.description} className="photo" />
//                     <figcaption><p>{post.description}</p></figcaption>
//                     <div className="button-container">
//                     <button className="remove-button">Remove</button>
//                     </div>
//               </figure>
//     }
// }

// export default Photo;

import React from 'react';
import PropTypes from 'prop-types';
import {Link,withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {startRemoveingPost} from "../actions/index";

const Photo = (props) => {
     
   
    return (
        <figure className="figure">
                 
                    <Link to={`/single/${props.post.id}`}> <img src={props.post.imageLink} alt={props.post.description} className="photo" /></Link>
                    <figcaption><p>{props.post.description}</p></figcaption>
                    <div className="button-container">
                     <button className="remove-button" onClick={() => {  
                         props.startRemoveingPost(props.index,props.post.id)
                        
                         } }>Remove</button>
                         <Link className="button" to={`/single/${props.post.id}`}>
                              {/* <div className="comment-count">
                                 <div className="speech-bubble"></div>
                                 {props.comments[props.post.id] ? props.comments[props.post.id].length : 0}
                             </div>       */}
                         </Link>
                   </div>
              </figure>
    );
};
Photo.propTypes = {
    post:PropTypes.object.isRequired
   
}

export default connect(null,{startRemoveingPost})((Photo));