// import React, { Component } from 'react';

// class Title extends Component {
//     render() {
//         return (
//             <h1>{this.props.title}</h1>
//         );
//     }
// }

// export default Title;

import React from 'react';

const Title = (props) => {
    return (
        <h1>{props.title}</h1>
    );
};

export default Title;