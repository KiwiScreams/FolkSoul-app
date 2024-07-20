import Header from "../components/shared/header/Header"
import facebook_icon from "../assets/images/fb backgorund.svg"
import youtube_icon from "../assets/images/Youtube.svg"
import twitter_icon from "../assets/images/twitter.svg"
import FolkSoul_logo from "../assets/images/Logo.svg"
import FolkSoul_logotext from "../assets/images/FolkSoul.svg"
import Music_icon from "../assets/images/16.svg"
import Music_audio from "../assets/music/forest-lulaby.mp3"
import { useRef, useState, useEffect } from "react"
function Home() {
    const [isRunning, setIsRunning] = useState(true);
    const audioRef = useRef(null);
    useEffect(() => {
      }, [audioRef]);
    function handleRightBox() {
        setIsRunning(!isRunning);
        if (isRunning) {
          document.getElementById("rhythm").classList.add("music-anim-run");
          document.getElementById("rhythm").classList.remove("music-anim-pause");
          console.log(isRunning);
          audioRef.current.play();
        } else {
          document.getElementById("rhythm").classList.toggle("music-anim-pause");
          audioRef.current.pause();
          console.log(isRunning);
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
                    <div className="rhythm-box" onClick={handleRightBox} id="rhythm">
                        <img src={Music_icon} alt="music icon" />
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
                        <div className="social-icon">
                            <a href="https://www.facebook.com/" target="_blank"><img src={facebook_icon} alt="Facebook" /></a>
                        </div>
                        <div className="social-icon">
                            <a href="https://www.youtube.com/" target="_blank"><img src={youtube_icon} alt="YouTube" /></a>
                        </div>
                        <div className="social-icon">
                            <a href="https://x.com/i/flow/login" target="_blank"><img src={twitter_icon} alt="Twitter" /></a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Home