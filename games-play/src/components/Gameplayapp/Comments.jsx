import { useState } from "react";



const Comments = ({comment}) => {

    const [comments, setComments] = useState([]);

    // !!todo

    console.log(`${typeof({comment})} rrrrr`)


    return (<>

                <li className="comment">      
                    
                    <p>{comment.content}</p>

                </li>
    
     
    </>)
};

export default Comments;