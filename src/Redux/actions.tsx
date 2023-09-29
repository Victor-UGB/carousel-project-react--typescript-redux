const addComment = (comment:any) => {
    return{
        type: "ADD_COMMENT",
        payload: {
            text: comment.text,
            id: comment.id,
            postId: comment.postId
        }
    }
}

export {addComment}