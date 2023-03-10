import { splitUrl } from "../functions/splitUrl";
import styles from "../Styles/LinkComStyle.module.scss"
import { useRef } from "react";

function Link({image})
{

    const paragraph = useRef(null);

    const copyLink = ()=>{
        navigator.clipboard.writeText(paragraph.current.baseURI + image.name).then(()=>{
            console.log("copied")
        })
    }

    return(
        <>
            <div className={styles.icon}> 
                <span className={`${styles.check} ${styles.checkBottom}`}>
                </span>
                <span className={`${styles.check} ${styles.checkTop}`}>
                </span>
            </div>
            <h1 className={styles.title}>Uploaded successfully!</h1>
            <img src={image.image} className={styles.img}/>
            <div className={styles.containerLink}>
                <p className={styles.link} ref={paragraph}>{splitUrl(`http://localhost:5173/${image.name}`)}</p>
                <button className={styles.copyLink} onClick={copyLink}>Copy link</button>
            </div>
        </>
    )
}

export default Link;
