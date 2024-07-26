import profile_image from "../assets/images/profile.png"
import camera from "../assets/images/Camera Icon.svg"
import { useState, useEffect } from "react";
import edit_image from "../assets/images/Edit Icon.svg"
function GroupAbout() {
    const [recentImageURL, setRecentImageURL] = useState(null);
    useEffect(() => {
        const storedImage = localStorage.getItem("recent-image");
        if (storedImage) {
            setRecentImageURL(storedImage);
        }
    }, []);
    // const groupText = document.querySelector(".special-p");
    // const editInput = document.createElement('textarea');
    // const aboutDiv = document.querySelector(".about-container");
    // let aboutImage = document.querySelector(".group-about-image");
    // function onEdit() {
    //     editInput.classList.add("edit-input");
    //     editInput.classList.add("text", "text-black");
    //     editInput.value = groupText.textContent;
    //     aboutDiv.insertBefore(editInput, groupText);
    //     aboutDiv.removeChild(groupText);
    //     aboutImage.style.display = "none";
    //     const saveBtn = document.createElement('button');
    //     saveBtn.textContent = 'შეინახე';
    //     saveBtn.classList.add("save-btn");
    //     saveBtn.classList.add("text");
    //     const gobackBtn = document.createElement('button');
    //     gobackBtn.textContent = 'გადი უკან';
    //     gobackBtn.classList.add("goback-btn");
    //     gobackBtn.classList.add("text");
    //     aboutDiv.appendChild(saveBtn);
    //     aboutDiv.appendChild(gobackBtn);
    //     gobackBtn.addEventListener("click", () => {
    //         onGoBack();
    //     })
    //     saveBtn.addEventListener("click", () => {
    //         onSave();
    //     });
    // }
    // function onSave() {
    //     const newText = document.createElement('p');
    //     newText.classList.add("text", "black-text");
    //     newText.textContent = editInput.value;
    //     aboutDiv.insertBefore(newText, editInput);
    //     aboutDiv.removeChild(editInput);
    //     const saveBtn = document.querySelector('.save-btn');
    //     const goBackBtn = document.querySelector('.goback-btn');
    //     aboutDiv.removeChild(saveBtn);
    //     aboutDiv.removeChild(goBackBtn);
    //     aboutImage.style.display = "block";
    // }
    // function onGoBack() {
    //     const saveBtn = document.querySelector('.save-btn');
    //     const goBackBtn = document.querySelector('.goback-btn');
    //     const editInput = document.querySelector('.edit-input');
    //     const groupText = document.querySelector('.special-p');
    //     aboutDiv.removeChild(saveBtn);
    //     aboutDiv.removeChild(goBackBtn);
    //     aboutImage.style.display = "block";
    // }
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState('ძით იკვებებიან და სწრაფად იზრდებიან. როდესაც გაზაფხულზე ისინიბარბაცით გამოდიან ბუნაგიდან და მზეს ეფიცხებიან, უკვე მოზრდილებიარიანდათვები, როგორც წესი, ეულად ბინადრობენ, თუმცა საკვების მოპოვებისდროს ხშირად იკრიბებიან. ბელები ორი-სამი წლის განმავლობაშიდედასთან რჩებიან. ამ პერიოდში მდედრი დათვი კიდევ მაკეობს,ამგვარად, მამრი დათვებიც ცხოვრების რაღაც ნაწილს ნაშიერებთანატარებენ.საუკუნეების განმავლობაში დათვების ყველა სახეობაზენადირობდნენ. გამოსადეგია დათვის ხორცი, ტყავი, ცხიმი, მათ აბარებეზოოპარკებში ან უბრალოდ სპორტული ინტერესის გამო ნადირობდნენ მათზე.დაწყვილების პერიოდი ზომიერ და არქტიკულ რეგიონებში მობინადრე დათვებისთვის, ჩვეულებრივ, გაზაფხულია. მაკეობა ხანმოკლეა, თუმცა იმის გამო, რომ დათვი არ მშობიარობს მანამ, სანამ ზამთრის შუა ძილში არ იქნება, განაყოფიერებული კვერცხუჯრედის საშვილოსნოში იმპლანტაცია ხდება მხოლოდ ოქტომბე-ნოემბერში, ამ პროცესს „დაგვიანებული იმპლანტაცია“ ეწოდება.დათვი შობს წარმოუდგენლად პატარა ბელებს, ხშირ შემთხვევაში — ორს. ახალშობილები მხოლოდ 200-700 გრამს იწონიან და ძალიან ჰგვანან პატარა ვირთხებს. ისინი თვალაუხელელნი, უკბილონი და ბეწვის გარეშე იბადებიან. პატარები რჩებიან რა ბუნაგში დედასთან, მისი ნოყიერი რძით იკვებებიან და სწრაფად იზრდებიან. როდესაც გაზაფხულზე ისინი ბარბაცით გამოდიან ბუნაგიდან და მზეს ეფიცხებიან, უკვე მოზრდილები არიანდათვები, როგორც წესი, ეულად ბინადრობენ, თუმცა საკვების მოპოვების დროს ხშირად იკრიბებიან. ბელები ორი-სამი წლის განმავლობაში დედასთან რჩებიან. ამ პერიოდში მდედრი დათვი კიდევ მაკეობს, ამგვარად, მამრი დათვებიც ცხოვრების რაღაც ნაწილს ნაშიერებთან ატარებენ.საუკუნეების განმავლობაში დათვების ყველა სახეობაზე ნადირობდნენ. გამოსადეგია დათვის ხორცი, ტყავი, ცხიმი, მათ აბარებე ზოოპარკებში ან უბრალოდ სპორტული ინტერესის გამო ნადირობდნენ მათზე.ძით იკვებებიან და სწრაფად იზრდებიან. როდესაც გაზაფხულზე ისინიბარბაცით გამოდიან ბუნაგიდან და მზეს ეფიცხებიან, უკვე მოზრდილებიარიანდათვები, როგორც წესი, ეულად ბინადრობენ, თუმცა საკვების მოპოვებისდროს ხშირად იკრიბებიან. ბელები ორი-სამი წლის განმავლობაშიდედასთან რჩებიან. ამ პერიოდში მდედრი დათვი კიდევ მაკეობს,ამგვარად, მამრი დათვებიც ცხოვრების რაღაც ნაწილს ნაშიერებთანატარებენ.საუკუნეების განმავლობაში დათვების ყველა სახეობაზენადირობდნენ. გამოსადეგია დათვის ხორცი, ტყავი, ცხიმი, მათ აბარებეზოოპარკებში ან უბრალოდ სპორტული ინტერესის გამო ნადირობდნენ მათზე.დაწყვილების პერიოდი ზომიერ და არქტიკულ რეგიონებში მობინადრე დათვებისთვის, ჩვეულებრივ, გაზაფხულია. მაკეობა ხანმოკლეა, თუმცა იმის გამო, რომ დათვი არ მშობიარობს მანამ, სანამ ზამთრის შუა ძილში არ იქნება, განაყოფიერებული კვერცხუჯრედის საშვილოსნოში იმპლანტაცია ხდება მხოლოდ ოქტომბე-ნოემბერში, ამ პროცესს „დაგვიანებული იმპლანტაცია“ ეწოდება.დათვი შობს წარმოუდგენლად პატარა ბელებს, ხშირ შემთხვევაში — ორს. ახალშობილები მხოლოდ 200-700 გრამს იწონიან და ძალიან ჰგვანან პატარა ვირთხებს. ისინი თვალაუხელელნი, უკბილონი და ბეწვის გარეშე იბადებიან. პატარები რჩებიან რა ბუნაგში დედასთან, მისი ნოყიერი რძით იკვებებიან და სწრაფად იზრდებიან. როდესაც გაზაფხულზე ისინი ბარბაცით გამოდიან ბუნაგიდან და მზეს ეფიცხებიან, უკვე მოზრდილები არიან');
    const [imageVisible, setImageVisible] = useState(true);

    const handleEdit = () => {
        setEditing(true);
        setImageVisible(false);
    };

    const handleSave = () => {
        setEditing(false);
        setImageVisible(true);
    };

    const handleGoBack = () => {
        setEditing(false);
        setImageVisible(true);
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
    };
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            const imageDataURL = reader.result;
            setRecentImageURL(imageDataURL);
            localStorage.setItem("recent-image", imageDataURL);
        });
        reader.readAsDataURL(file);
    };
    return (
        <><div className="group-about-container">
            <div className="group-about-header">
                <h5 className="text-bg">ჯგუფის წევრები</h5>
            </div>
            <div className="group-about-body">
                <button
                    className="edit-btn"
                    onClick={handleEdit}
                    style={{ display: editing ? 'none' : 'block' }}
                >
                    <img src={edit_image} alt="Edit" />
                </button>
                <div className="profile">
                    <div className="group-about-image" id="aboutImage">
                        <img src={recentImageURL} alt="" />
                        <div className="choose-image">
                            <input type="file" id="image-upload" onChange={handleImageChange} />
                            <img src={camera} alt="" id="avatar" />
                        </div>
                    </div>
                </div>
                <div className="group-about-text about-container">
                    <div className="about-container">
                        {editing ? (
                            <textarea
                                className="edit-input text text-black"
                                value={text}
                                onChange={handleTextChange}
                            />
                        ) : (
                            <p className="text black-text special-p">{text}</p>
                        )}
                        {editing ? (
                            <div>
                                <button className="save-btn text" onClick={handleSave}>
                                    შეინახე
                                </button>
                                <button className="goback-btn text" onClick={handleGoBack}>
                                    გადი უკან
                                </button>
                            </div>
                        ) : (
                            <button className="edit-btn" onClick={handleEdit}>
                                <img src={edit_image} alt="Edit" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default GroupAbout