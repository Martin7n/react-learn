import { useState } from "react";



const Comments = ({comment}) => {


    return (<>

                <li className="comment">      
                    
                    <p>{comment.content}</p>

                </li>
    
     
    </>)
};

export default Comments;