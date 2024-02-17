import React from 'react';
import Link from 'next/link';

const Custom404 = () => {
    return (
        <div className="error-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="error-page">
                        <img src="/images/404.gif" alt="error" />
                        <h3>Oops! Page Not Found</h3>
                        <p>The page you were looking for could not be found.</p>

                        <Link href="/">
                            <a className="box-btn">Return To Home Page</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Custom404;