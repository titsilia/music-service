import React from 'react';

function TrackTitle({title}) {
    return (
        <div className="track__title-text">
            <a href="http://" className="track__title-link">{title} <span className="track__title-span"></span> </a>
        </div>
    );
};

export default TrackTitle