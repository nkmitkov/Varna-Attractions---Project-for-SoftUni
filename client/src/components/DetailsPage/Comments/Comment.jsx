export default function Comment({
    comment,
    username,
    avatar
}) {

    return (
        <div className="testimonial-text bg-white p-4 mt-n5" style={{ width: "200px" }}>
            <img
                className="img-fluid mx-auto"
                src={avatar}
                style={{ width: 100, height: 100 }}
            />
            <p className="mt-5">
                {comment}
            </p>
            <h5 className="text-truncate">{username}</h5>
        </div>
    );
};