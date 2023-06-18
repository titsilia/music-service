import React from 'react';

function Author({author}) {
    return (
        <div className="track__author">
            <a href="http://" className="track__author-link">{author}</a>
        </div>
    );
};

export default Author