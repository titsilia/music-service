function ButtonDislike() {
    return(
        <div className="track-play__dislike _btn-icon">
            <svg className="track-play__dislike-svg" alt="dislike">
                <use href="img/icon/sprite.svg#icon-dislike"></use>
            </svg>
        </div>
    );
}

export default ButtonDislike