import React, { Component } from 'react';
//import Title from "./components/Title";
import Photowall from "./components/Photowall";
import AddPhoto from "./components/AddPhoto";
import Single from "./components/Single"
import {Route,Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {removePost,startLoadingPost,startLoadingComment} from "./actions";

class Main extends Component {
  // constructor(props){
  //   super(props);
    
   
  // }
  // this.removePhoto=this.removePhoto.bind(this);
  // this.addPhoto=this.addPhoto.bind(this);
  // removePhoto(postRemoved){
  //   console.log(postRemoved.description)
  //   this.setState((state)=>({
  //     posts:state.posts.filter(post => post !== postRemoved)
  //   }))
  // }
  // addPhoto(postSubmitted){
  //   this.setState((state)=>({
  //     posts:state.posts.concat([postSubmitted])
  //   }))
  // }
  // componentDidMount(){
  //   this.props.removePost(1);
  // }
  componentDidMount(){
    this.props.startLoadingPost()
    this.props.startLoadingComment()
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h1><Link to="/">Photowall</Link></h1>
        <Route exact path="/" render={() => (
          <div>
            
             <Photowall  {...this.props} /> 
          </div>  
        )}  />
        <Route  path="/addPhoto" render={({history}) => (
          <AddPhoto   history={history}  />
        )} /> 
        <Route  path="/single/:id" render={(params) => (
          <Single   params={params}  />
        )} /> 
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

export default connect(mapStateToProps,{removePost,startLoadingPost,startLoadingComment})(Main);