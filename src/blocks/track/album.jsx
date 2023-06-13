import React from 'react';

function Album({album}) {
    return (
        <div className="track__album">
            <a href="http://" className="track__album-link">{album}</a>
        </div>
    );
}
export default Album