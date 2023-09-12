// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import comments_actions from '../store/actions/comments';
// import user_actions from "../store/actions/users";

// const Comments = ({ itinerary_id }) => {
//     const dispatch = useDispatch();
    
//     // Obteniendo los comentarios
//     const comments = useSelector(state => state.comments.comments[itinerary_id] || []);

//     // Obteniendo la información del usuario logueado
//     const loggedInUser = useSelector(state => state.users.singleUser);


//     const [newComment, setNewComment] = useState('');

//     useEffect(() => {
//         dispatch(comments_actions.read_comments_from_itinerary({ itinerary_id }));
//     }, [dispatch, itinerary_id]);

//     const handleCommentChange = (e) => {
//         setNewComment(e.target.value);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
    
//         // Verificar si un usuario está logueado
//         if (!loggedInUser?.mail) {
//             console.error("No logged-in user found. Please log in to comment.");
            

//             return;
            
//         }
    
//         const commentData = {
//             content: newComment,
//             itinerary_id: itinerary_id,
//             admin_id: loggedInUser._id // Tomar el admin_id del usuario logueado
//         };
    
//         await dispatch(comments_actions.create_comment(commentData));
//         dispatch(comments_actions.read_comments_from_itinerary({ itinerary_id }));
//         setNewComment(''); 
//     };
    
    

//     return (
//         <div className='bg-blue-300 mb-[1em] h-max p-[1em]'>
//             <h2 className='font-bold mb-4'>Comments:</h2>
//             {
//                 comments.length > 0 ? (
//                     <ul>
//                         {comments.map(comment => (
//                             <li key={comment._id} className="mb-4">
//                                 <div className="flex items-center">
//                                 <img className="w-[60px] rounded-full mr-4" src={comment.admin_id ? comment.admin_id.photo : loggedInUser?.photo} alt={comment.admin_id ? comment.admin_id.name : loggedInUser?.name} />

//                                 <p className='font-bold'>{comment.admin_id ? comment.admin_id.name : loggedInUser?.name}</p>

//                                 </div>
//                                 <div className="mt-2 bg-white p-3 rounded">
//                                     <p>{comment.content}</p>
//                                 </div>
//                             </li>
//                         ))}
//                     </ul>
//                 ) : (
//                     <p className="mb-4">There are no comments yet.</p>
//                 )
//             }
//             <form onSubmit={handleSubmit}>
//                 <textarea 
//                     value={newComment} 
//                     onChange={handleCommentChange} 
//                     placeholder="Add your comment" 
//                     className='w-full rounded p-2 mb-3'
//                 />
//                 <button type="submit" className='bg-red-500 p-[0.7em] rounded'>Post Comment</button>
//             </form>
//         </div>
//     );
// };

// export default Comments;
