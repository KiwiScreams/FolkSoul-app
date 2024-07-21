import mtavari_image from "../assets/images/TV.png"
function Mtavari()
{
    return(
        <>
        <div className="mtavari-container">
        <h1 className="goodMorning">დილამშვიდობისა!</h1>
        <div className="mtavari-image">
            <img src={mtavari_image} alt="mtavari image" />
        </div>
        </div>
        </>
    )
}
export default Mtavari