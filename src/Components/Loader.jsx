import ReactDOM from 'react-dom';
import styles from '../Styles/LoaderStyles.module.scss';
import { useEffect } from "react";

function Loader(props)
{
   return ReactDOM.createPortal(
      <main className={styles.main} style={{visibility: props.visible}}>
         <div className={styles.loaderContainer}>
            <h1 className={styles.title}>Uploading...</h1>
            <div className={styles.loader}>
               <span className={styles.bar}></span>
            </div>
         </div>
      </main>,
      document.getElementById("modal")
   )
}

export default Loader;
