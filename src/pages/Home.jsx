import Header from "../components/shared/header/Header"
import facebook_icon from "../assets/images/fb backgorund.svg"
import youtube_icon from "../assets/images/Youtube.svg"
import twitter_icon from "../assets/images/twitter.svg"
import FolkSoul_logo from "../assets/images/Logo.svg"
import FolkSoul_logotext from "../assets/images/FolkSoul.svg"
function Home() {
    return (
        <>
            <Header />
            <main>
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
                            <img src={facebook_icon} alt="Facebook" />
                        </div>
                        <div className="social-icon">
                            <img src={youtube_icon} alt="YouTube" />
                        </div>
                        <div className="social-icon">
                            <img src={twitter_icon} alt="Twitter" />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Home