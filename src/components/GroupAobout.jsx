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
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState('');
    const [imageVisible, setImageVisible] = useState(true);

    const handleEdit = () => {
        setEditing(true);
        setImageVisible(false);
    };

    const handleSave = () => {
        setImageVisible(true);
        localStorage.setItem('groupAboutText', text);        
        setEditing(false);
    };
    useEffect(() => {
        const savedText = localStorage.getItem('groupAboutText');
        if (savedText) {
            setText(savedText);
        }
    }, []);
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
                                onChange={(e) => setText(e.target.value)}
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