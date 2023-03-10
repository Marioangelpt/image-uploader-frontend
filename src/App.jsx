import { useState } from "react"
import Link from "./Components/Link.jsx";
import Loader from './Components/Loader.jsx';
import Upload from "./Components/Upload.jsx";
import styles from "./Styles/MainStyle.module.scss"

function App() 
{
   const [loaderVisible, setLoaderVisible] = useState("hidden");
   const [component, setComp] = useState("upload");
   const [nameImage, setNameImage] = useState({})

   const drag = (e)=>{
      e.preventDefault();
      let formData = new FormData();
      formData.append("image", e.dataTransfer.files[0])

      fetch("https://image-uploader-production-f4f4.up.railway.app/api/images",{
         method: "POST",
         headers: {
            "Accept" : "image/jpeg, image/png",
         },
         mode: "cors",
         cache: "default",
         body: formData
      }).then(res => res.json()).then((response)=>{
         setNameImage({name: response.name, image: response.url})
      })

      setLoaderVisible("visible")
      setTimeout(()=>{
         setLoaderVisible("hidden");
         setComp("link")
      }, 6000)
   }

   const sendData = (e, form)=>{
      let formData = new FormData(form.current);
      
      fetch("https://image-uploader-production-f4f4.up.railway.app/api/images",{
         method: "POST",
         headers: {
            'Accept': "image/jpeg, image/png",
         },
         mode: "cors",
         cache: "default",
         body: formData
      }).then(res => res.json()).then((response)=>{
         setNameImage({name: response.name, image: response.url})
      })

      setLoaderVisible("visible")
      setTimeout(()=>{
         setLoaderVisible("hidden");
         setComp("link")
      }, 6000);
   }

   return(
      <main className={styles.main}>
         <div className={styles.container}>
            {
               component == "upload" ?              
                  <Upload drag={drag} sendData={sendData} />
               :
                  <Link image={nameImage}/>

            }
            <Loader visible={loaderVisible} />
         </div>
      </main>
   )
}

export default App;

