import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../Styles/PreviewRouteStyle.module.scss"

function PreviewRoute()
{
    const [img, setImg] = useState("");
    const { name } = useParams()
    useEffect(
        ()=>{
            fetch(`https://image-uploader-production-f4f4.up.railway.app/api/${name}`, {
                method: "GET",
                headers: 
                {
                   'Accept': "image/png, image/jpeg"
                },
                mode: "cors",
                cache: "default"
            }).then(res => res.json()).then((response)=>{
                setImg(response.url)
            }).catch((e)=>{
                console.log(e);
            })
        },
        []
    )
    return(
        <main className={styles.main}>
            <img src={img} alt="" className={styles.preview}/>
        </main>
    )
}

export default PreviewRoute;
