import React from 'react';

function TrackImage() {
    return(
        <div className="track-play__image">
            <svg className="track-play__svg" alt="music">
                <use href="img/icon/sprite.svg#icon-note"></use>
            </svg>
        </div>
    );
}

export default TrackImage