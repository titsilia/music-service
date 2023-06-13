function VolumeProgress() {
    return(
        <div className="volume__progress _btn">
            <input type="range" className="volume__progress-line" name='range' />
        </div>
    );
}

export default VolumeProgress