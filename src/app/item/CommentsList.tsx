"use client"

import {  fetchAllComments, fetchComments } from "@/utils/stories"
import { convertTimePassedToString } from "@/utils/time";


export default async function CommentsList({storyId, root}: any) {
    const comments = await fetchAllComments(storyId);

    function buildCommentHierarchy(comments: any) {
        const commentMap: any = {};
        const rootComments: any = [];
      
        comments.forEach((comment: any) => {
          comment.replies = [];
          commentMap[comment.id] = comment;
      
          if (comment.parent_id && commentMap[comment.parent_id]) {
            commentMap[comment.parent_id].replies.push(comment);
          } else {
            rootComments.push(comment);
          }
        });
      
        return rootComments;
    }

    const rootComments = buildCommentHierarchy(comments.hits)
    


    return (
        <div>
          {rootComments.map((comment: any) => (
            <Comment key={comment.id} comment={comment} depth={0} />
          ))}
        </div>
      );
}

function Comment({ comment, depth }: any) {
    const indent = {
    margin: `0 ${depth * 20}px 1rem 0`
    };
  
    return (
      <div style={indent}>
        <p>{comment.by} {convertTimePassedToString(comment.time)}</p>
        <p>{comment.comment_text}</p>
        {comment.replies.map((reply: any) => (
          <Comment key={reply.id} comment={reply} depth={depth + 1} />
        ))}
      </div>
    );
  }