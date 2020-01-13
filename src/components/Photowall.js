// import React, { Component } from 'react';
// import Photo from "./Photo";

// class Photowall extends Component {
//     render() {
//         return (
//             <div className="photoGrid">
//                 {this.props.posts.map((post,index) => <Photo key={index} post={post}  />)}
//             </div>
//         );
//     }
// }

// export default Photowall;

// @flow 
import React from 'react';
import Photo from "./Photo";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Photowall = (props) => {
        return (
            <div>
                <Link className="addIcon" to='/addPhoto'>+</Link>
            <div className="photoGrid">
                {props.posts.sort(function (a,b) {
                    return b.id - a.id
                })
                .map((post,index) => <Photo key={index} post={post}  {...props} index={index} />)}
            </div>
            </div>
        );
};
Photowall.propTypes = {
    posts:PropTypes.array.isRequired
  
}
export default Photowall;