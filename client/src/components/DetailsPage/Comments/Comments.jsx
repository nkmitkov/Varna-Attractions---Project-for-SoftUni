import { useContext, useState } from "react";
import Comment from "./Comment";
import AuthContext from "../../../contexts/authContext";
import { useForm } from "../../../hooks/useForm";

export default function Comments({
    isOwner
}) {
    const { isAuthenticated } = useContext(AuthContext);
    const [comments, setComments] = useState([{ text: "random text", username: "username", email: "email", avatar: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722729600&semt=ais_hybrid" }]);

    const isValidToShow = !isOwner && isAuthenticated;
    
    const onSubmitHandler = (comment) => {
        console.log(comment);
        
    };

    const {
        formValues,
        onChangeHandler,
        onSubmit,
    } = useForm({ comment: "" }, onSubmitHandler);

    return (
        <>
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-3 pb-3" style={{ paddingBottom: "20px" }}>
                        <h6 className="text-primary text-uppercase" style={{ letterSpacing: 5 }}>
                            Comments
                        </h6>
                        <h1>What Our Users Say</h1>
                    </div>
                    <div className="text-center" style={{ display: "flex", justifyContent: "space-evenly" }}>

                        {comments.map(comment => <Comment key={comment._id} {...comment} />)}

                        {!comments.length && <h4>No comments yet</h4>}

                    </div>
                </div>
            </div>

            {isValidToShow &&

                <div className="container-fluid py-5" style={{ textAlign: "center" }}>
                    <div className="container py-5">
                        <h6 className="text-primary text-uppercase" style={{ letterSpacing: 5 }} >
                            Comment form
                        </h6>
                        <h1>Write Your Opinion</h1>
                    </div>
                    <div className="row justify-content-center" style={{ width: "750px", margin: "auto" }}>
                        <div className="col-lg-8">
                            <div className="contact-form bg-white" style={{ padding: 30 }}>
                                <div id="success" />
                                <form name="comment" id="commentForm" onSubmit={onSubmit}>
                                    <div className="control-group">
                                        <textarea
                                            type="text"
                                            name="comment"
                                            className={`form-control p-4 `}
                                            id="comment"
                                            placeholder="Comment.."
                                            required="required"
                                            value={formValues.comment}
                                            onChange={onChangeHandler}
                                        />
                                        <p className="help-block text-danger" />

                                    </div>

                                    <div className="text-center">
                                        <button
                                            className={`btn btn-primary py-3 px-4`}
                                            type="submit"
                                            id="commentButton"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            }
        </>
    );
};