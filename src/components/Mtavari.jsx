import mtavari_image from "../assets/images/TV.png"
import { useState, useEffect } from "react"
import smallLogo from "../assets/images/Small-logo.svg"
function Mtavari()
{
    const [recentImage, setRecentImage] = useState(null);
    useEffect(()=>
    {
        const storedImage = localStorage.getItem('recent-image');
        setRecentImage(storedImage);
    }, [])
    return(
        <>
        <div className="mtavari-container">
        <h1 className="goodMorning">დილამშვიდობისა!</h1>
        <div className="mtavari-image">
            <img src={recentImage} alt="mtavari image group-img" />
            <div className="small-logo scale">
                <img src={smallLogo} alt="logo" />
            </div>
        </div>
        </div>
        </>
    )
}
export default Mtavari