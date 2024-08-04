import Comment from "./Comment";

const styles = {
    div: {
        display: "flex",
        justifyContent: "center"
    },
    h2: {
        color: "#7AB730",
    },
    ul: {
        listStyle: "none"
    },
    article: {
        display: "flex",
        justifyContent: "center"
    }
}

export default function Comments() {
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

                        <Comment />

                    </div>
                </div>
            </div>

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

                            <form name="comment" id="commentForm">

                                <div className="control-group">
                                    <textarea
                                        type="text"
                                        name="comment"
                                        className={`form-control p-4 `}
                                        id="comment"
                                        placeholder="Comment.."
                                        required="required"
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
        </>
    );
};

/* 
    <article style={styles.article}>
        <label>Add new comment:</label>
        <form>
            <textarea
                name="comment"
                placeholder="Comment..."
            ></textarea>
            <input type="submit" value="Add Comment" />
        </form>
    </article>
*/