export default function Comment() {

    return (
        <div className="testimonial-text bg-white p-4 mt-n5" style={{ minWidth: "200px", maxWidth: "300px" }}>
            <img
                className="img-fluid mx-auto"
                src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722729600&semt=ais_hybrid"
                style={{ width: 100, height: 100 }}
            />
            <p className="mt-5">
                random text
            </p>
            <h5 className="text-truncate">User email</h5>
        </div>
    );
};