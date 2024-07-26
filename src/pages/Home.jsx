import Header from "../components/shared/header/Header"
import facebook_icon from "../assets/images/fb.svg"
import youtube_icon from "../assets/images/Youtube.svg"
import twitter_icon from "../assets/images/twitter.svg"
import FolkSoul_logo from "../assets/images/Logo.svg"
import FolkSoul_logotext from "../assets/images/FolkSoul.svg"
import Music_icon from "../assets/images/16.svg"
import Music_audio from "../assets/music/forest-lulaby.mp3"
import nana from "../assets/images/nana.png"
import { useRef, useState, useEffect } from "react"
function Home() {
    const [isRunning, setIsRunning] = useState(false);
    const audioRef = useRef(null);
    const [size, setSize] = useState('');
    const [dynamicDivs, setDynamicDivs] = useState([]);
    const createDiv = () => {
        const sizeValue = parseInt(size * 2);
        if (isNaN(sizeValue) || sizeValue <= 0) {
            alert('Please enter a positive integer');
            return;
        }
        const newDiv = {
            size: sizeValue,
            key: Math.random(),
        };
        setDynamicDivs([...dynamicDivs, newDiv]);
    };
    const handleInputChange = (event) => {
        
        setSize(event.target.value);
    };
    useEffect(() => {
    }, [audioRef]);
    function handleRightBox() {
        setIsRunning(!isRunning);
        if (isRunning) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
    }
    return (
        <>
            <Header />
            <audio ref={audioRef} loop>
                <source src={Music_audio} type="audio/mpeg"></source>
            </audio>
            <input type="number" name="" id="size-input" onChange={handleInputChange} value={size} />
            <button id="create-div-btn" onClick={createDiv}>Create Div</button>
            <main className="flex">
                <section className="rhythm-container" id="dynamic-div-container">

                    <div className={
                        isRunning ? "rhythm-box music-anim-run" : "rhythm-box music-anim-run music-anim-pause"}
                        onClick={handleRightBox} id="rhythm" >
                        <img src={Music_icon} alt="music icon" />
                    </div>
                    {/*
                    <div className="dynamic-div" style={{width:"280px", height:"280px", position: 'relative', borderRadius: '50%'}}>
                    <div className={isRunning ? "dot run" : "dot pause"}
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    // animation: isRunning ? 'moveAroundDiv2 5s linear infinite' : 'none'
                                }}>
                                <div className="dot-head">
                                    <img src={nana} alt="" />
                                </div>
                                <div className="dot-body">
                                    <h4 className="text">ნანა</h4>
                                </div>
                            </div>
                    </div> */}
                    {dynamicDivs.map((div) => (
                        <div key={div.key}
                            className="dynamic-div"
                            style={{ width: `${div.size}px`, height: `${div.size}px`, position: 'absolute', borderRadius: '50%,' }}>

                            <div className={isRunning ? "dot dot-1 run" : "dot pause"}
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    animation: `moveAroundDiv 5s linear infinite`,
                                }}>
                                <div className="dot-head">
                                    <img src={nana} alt="" />
                                </div>
                                <div className="dot-body">
                                    <h4 className="text">ნანა</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
                <section className="person-info-container">
                    <div className="person-info-box">
                        <div className="small-circle"></div>
                        <div className="logo-circle">
                            <img src={FolkSoul_logo} alt="FolkSoul logo" />
                            <img src={FolkSoul_logotext} alt="FolkSoul logotext" />
                        </div>
                        <div className="small-circle"></div>
                        <div className="person-content">
                            <p className="text black-text">დაწყვილების პერიოდი ზომიერ და არქტიკულ რეგიონებში მობინადრე დათვებისთვის, ჩვეულებრივ, გაზაფხულია. მაკეობა ხანმოკლეა, თუმცა იმის გამო, რომ დათვი არ მშობიარობს მანამ, სანამ ზამთრის შუა ძილში არ იქნება, განაყოფიერებული კვერცხუჯრედის საშვილოსნოში იმპლანტაცია ხდება მხოლოდ ოქტომბე-ნოემბერში, ამ პროცესს „დაგვიანებული იმპლანტაცია“ ეწოდება.დათვი შობს წარმოუდგენლად პატარა ბელებს, ხშირ შემთხვევაში — ორს. ახალშობილები მხოლოდ 200-700 გრამს იწონიან და ძალიან ჰგვანან პატარა ვირთხებს. ისინი თვალაუხელელნი, უკბილონი და ბეწვის გარეშე იბადებიან. პატარები რჩებიან რა ბუნაგში დედასთან, მისი ნოყიერი რძით იკვებებიან და სწრაფად.დაწყვილების პერიოდი ზომიერ და არქტიკულ რეგიონებში მობინადრე დათვებისთვის, ჩვეულებრივ, გაზაფხულია. მაკეობა ხანმოკლეა, თუმცა იმის გამო, რომ დათვი არ მშობიარობს მანამ, სანამ ზამთრის შუა ძილში არ იქნება, განაყოფიერებული კვერცხუჯრედის საშვილოსნოში იმპლანტაცია ხდება მხოლოდ ოქტომბე-ნოემბერში, ამ პროცესს „დაგვიანებული იმპლანტაცია“ ეწოდება.დათვი შობს წარმოუდგენლად პატარა ბელებს, ხშირ შემთხვევაში — ორს. ახალშობილები მხოლოდ 200-700 გრამს იწონიან და ძალიან ჰგვანან პატარა ვირთხებს. ისინი თვალაუხელელნი, უკბილონი და ბეწვის გარეშე იბადებიან. პატარები რჩებიან რა ბუნაგში დედასთან, მისი ნოყიერი რძით იკვებებიან და სწრაფად.</p>
                        </div>
                    </div>
                    <div className="social-icons-container flex">
                        <div className="social-icon scale">
                            <a href="https://www.facebook.com/" target="_blank"><img src={facebook_icon} alt="Facebook" /></a>
                        </div>
                        <div className="social-icon scale">
                            <a href="https://www.youtube.com/" target="_blank"><img src={youtube_icon} alt="YouTube" /></a>
                        </div>
                        <div className="social-icon scale">
                            <a href="https://x.com/i/flow/login" target="_blank"><img src={twitter_icon} alt="Twitter" /></a>
                        </div>
                    </div>
                    <style>
                        {`
          @keyframes moveAroundDiv {
            0% {
              transform: rotate(0deg) translate(${size}px, 0) rotate(0deg);
            }
            100% {
              transform: rotate(360deg) translate(${size}px, 0) rotate(-360deg);
            }
          }
        `}
                    </style>
                </section>
            </main>
        </>
    )
}
export default Home