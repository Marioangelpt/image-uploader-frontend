import styles from "../Styles/UploadComStyle.module.scss";
import { useRef } from "react"

function Upload({drag, sendData}) 
{
  
   const input = useRef();
   const form = useRef();

   return(
      <>
         <h1 className={styles.title}>Upload your image</h1>
         <h2 className={styles.subtitle}>File should be Jpeg, Png ...</h2>
         <div 
            className={styles.imageContainer} 
            onDrop={(e)=> drag(e)}
            onDragOver={(e)=> e.preventDefault()}
         >
            <img src="/image.svg" alt="" className={styles.image}/>
            <h3 className={styles.titleDragDrop}>Drag & drop your image here</h3>
         </div>
         <p className={styles.paragraph}>Or</p>
         <form encType="multipart/form-data" onSubmit={(e)=> e.preventDefault()} ref={form} className={styles.form}>
            <button type="" className={styles.chooseFile} onClick={()=> input.current.click()}>Choose a file</button>
            <input type="file" ref={input} style={{visibility: "hidden"}} name="image" accept="image/jpeg, image/png" onChange={(e)=> sendData(e, form)}/>
         </form>

      </>
   )
}

export default Upload;
