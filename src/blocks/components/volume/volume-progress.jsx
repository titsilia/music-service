import styles from "./volume.module.scss";

function VolumeProgress({ audio }) {

    function volumeChange(event) {
        audio.current.volume = event.target.value / 100;  
    }

    return(
        <div className={`${styles.volume__progress} ${styles._btn}`}>
            <input onInput={volumeChange} type="range" className={styles['volume__progress-line']} name='range' />
        </div>
    );
}

export default VolumeProgress