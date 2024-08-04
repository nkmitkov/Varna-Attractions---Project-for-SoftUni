export default function Comment({
    text,
    username,
    email,
    avatar
}) {

    return (
        <div className="testimonial-text bg-white p-4 mt-n5" style={{ minWidth: "200px", maxWidth: "300px" }}>
            <img
                className="img-fluid mx-auto"
                src={avatar}
                style={{ width: 100, height: 100 }}
            />
            <p className="mt-5">
                {text}
            </p>
            <h5 className="text-truncate">{username}</h5>
            <h5 className="text-truncate">{email}</h5>
        </div>
    );
};