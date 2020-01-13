import {database} from "../config";

export function startAddingPost(post) {
    return (dispatch)=>{
        return database.ref("posts").update({[post.id]:post}).then(()=>{
            dispatch(addPost(post))
        }).catch(e => console.log(e))
    }
}
export function startLoadingPost(post) {
    return (dispatch)=>{
        return database.ref("posts").once('value').then((snapshot)=>{
            let posts = []
           snapshot.forEach((childSnapshot)=>{
            posts.push(childSnapshot.val())
           })
           dispatch(loadPosts(posts))
        }).catch(e => console.log(e))
    }
}
export function startRemoveingPost(index,id) {
    return (dispatch)=>{
        return database.ref(`/posts/${id}`).remove().then(()=>{
            dispatch(removePost(index))
        }).catch(e => console.log(e))
    }
}
export function startAddingComment(comment,postId) {
    return (dispatch)=>{
        return database.ref("comment/"+ postId).push(comment).then(()=>{
            dispatch(addComment(comment,postId))
        }).catch(e => console.log(e))
    }
}
export function startLoadingComment() {
    return (dispatch)=>{
        return database.ref("comment").once('value').then((snapshot)=>{
            let comments = {}
           snapshot.forEach((childSnapshot)=>{
            comments[childSnapshot.key] = Object.values( childSnapshot.val())

           })
           
          dispatch(loadComment(comments))
        }).catch(e => console.log(e))
    }
}


export function loadComment(comments) {
    return{
        type:"LOAD_COMMENTS",
        comments
    }
}

export function removePost(index) {
    return{
        type:"REMOVE_POST",
        index
    }
}


export function addPost(post) {
    return{
        type:"ADD_POST",
        post
    }
}

export function addComment(comment,postId) {
    return{
        type:"ADD_COMMENT",
        comment,
        postId
    }
}

export function loadPosts(posts) {
    return{
        type:"LOAD_POSTS",
        posts
    }
}