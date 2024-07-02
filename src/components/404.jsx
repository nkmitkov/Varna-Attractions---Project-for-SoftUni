export default function WrongUrlPage() {
    return (
        <>
            <div className="full-screen">
                <div className='not-found'>
                    <div className="ufo-img">
                        <img src="/img/error-image.webp" />
                    </div>

                    <div className="error-message">
                        <span className="error-num">404</span>
                        <p>Go back to <a href="/">HOME</a></p>
                    </div>

                </div>
            </div>
        </>
    );
};