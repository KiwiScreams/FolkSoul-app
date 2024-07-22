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
    const [isRunning, setIsRunning] = useState(true);
    const audioRef = useRef(null);
    const animated_icons = document.querySelectorAll(".dot");
    useEffect(() => {
      }, [audioRef]);
    function handleRightBox() {
        setIsRunning(!isRunning);
        if (isRunning) {
          document.getElementById("rhythm").classList.add("music-anim-run");
          document.getElementById("rhythm").classList.remove("music-anim-pause");
          audioRef.current.play();
          animated_icons.forEach(icon => {
            icon.classList.add("run");
            icon.classList.remove("pause");
          });
        } else {
          document.getElementById("rhythm").classList.toggle("music-anim-pause");
          audioRef.current.pause();
          animated_icons.forEach(icon => {
            icon.classList.add("pause");
            icon.classList.remove("run");
          });
        }
      }
    return (
        <>
            <Header />
            <audio ref={audioRef} loop>
                <source src={Music_audio} type="audio/mpeg"></source>
            </audio>
            <main className="flex">
                <section className="rhythm-container">
                    <div className="rhythm-box" onClick={handleRightBox} id="rhythm" >
                        <img src={Music_icon} alt="music icon" />
                    </div>
                    <div className="dot pause">
                        <div className="dot-head">
                            <img src={nana} alt="" />
                        </div>
                        <div className="dot-body">
                            <h4 className="text">ნანა</h4>
                        </div>
                    </div>
                    <div className="dot dot-2 pause">
                        <div className="dot-head">
                            <img src={nana} alt="" />
                        </div>
                        <div className="dot-body">
                            <h4 className="text">ნანა</h4>
                        </div>
                    </div>
                    <div className="dot dot-3 pause">
                        <div className="dot-head">
                            <img src={nana} alt="" />
                        </div>
                        <div className="dot-body">
                            <h4 className="text">ნანა</h4>
                        </div>
                    </div>
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
                </section>
            </main>
        </>
    )
}
export default Home