import { useState } from "react"
import { useEffect } from "react";
import deleteBtn from "../assets/images/delete-btn.svg"
import editBtn from "../assets/images/edit-btn.svg"
import youtube_icon from "../assets/images/Youtube.svg"
import facebook_icon from "../assets/images/facebook.svg"
import twitter_icon from "../assets/images/twitter.svg"
import camera from "../assets/images/Camera Icon.svg"
function SocialLinks() {
    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState('');
    const [updateToDo, setUpdateToDo] = useState(null);
    const [toggle, setToggle] = useState(true);
    const [image, setImage] = useState(null);
    const [name, setName] = useState('');
    const [href, setHref] = useState('');
    const [imageUrl, setImageUrl] = useState(null);
    const [showPanel, setShowPanel] = useState(false);
    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
        const imageUrl = URL.createObjectURL(event.target.files[0]);
        setImageUrl(imageUrl);
    };

    const AddItem = () => {
        if (updateToDo) {
            const updatedTodo = todo.map((e) => {
                if (e.id === updateToDo) {
                    return { ...e, name: name, href: href, image: image };
                }
                return e;
            });
            setTodo(updatedTodo);
            setUpdateToDo(null);
            setToggle(true);
            setImage(null);
            setName('');
            setHref('');
        } else {
            const newTodo = {
                id: Math.random(),
                name: name,
                href: href,
                image: image,
            };
            setTodo([...todo, newTodo]);
            setImage(null);
            setName('');
            setHref('');
        }
        handleClosePanel();
    };

    const DeleteItem = (ToDo) => {
        const filteredTodo = todo.filter((e) => e.id !== ToDo.id);
        setTodo(filteredTodo);
    };

    const EditItem = (ToDo) => {
        handleClosePanel();
        const updatedTodo = todo.find((e) => e.id === ToDo.id);
        setName(updatedTodo.name);
        setHref(updatedTodo.href);
        setImage(updatedTodo.image);
        setUpdateToDo(ToDo.id);
        setToggle(false);
        setShowPanel(true);
        document.querySelector('.all-todos-container').style.display = 'none';
    };

    const handleAddSocClick = () => {
        setShowPanel(true);
    };

    const handleClosePanel = () => {
        setShowPanel(false);
        document.querySelector('.all-todos-container').style.display = 'block';
    };

    return (
        // <div className="social-links-container">
        //     <div className="social-links-header">
        //         <h5 className="text-bg">სოციალური ბმულები</h5>
        //     </div>
        //     <div className="social-links-body">
        //         <input
        //             type="file"
        //             onChange={handleImageChange}
        //             placeholder="აირჩიე სოციალური ქსელის ხატულა"
        //         />
        //         <input
        //             type="text"
        //             value={name}
        //             onChange={(e) => setName(e.target.value)}
        //             placeholder="Name of social network"
        //         />
        //         <input
        //             type="text"
        //             value={href}
        //             onChange={(e) => setHref(e.target.value)}
        //             placeholder="Link"
        //         />
        //         <button onClick={AddItem}>ADD</button>
        //         <div className="all-todos-container">
        //             {todo.map((e) => (
        //                 <div key={e.id} className="flex todo">
        //                     <div className="flex todo-content">
        //                         <div className="soc-image">
        //                             <img src={e.image} className="soc" />
        //                             <div className="choose-image">
        //                                 <input
        //                                     type="file"
        //                                     id="image-upload"
        //                                     onChange={(event) => handleImageChange(event, e.id)}
        //                                 />
        //                                 {imageUrl && (
        //                                     <img src={imageUrl} alt="Chosen Image" style={{ width: 100, height: 100 }} className="soc-image" />
        //                                 )}
        //                                 <img src={camera} alt="" id="avatar" />
        //                             </div>
        //                         </div>
        //                         <input type="text" value={e.name} disabled className="todo-title" />
        //                         <input type="text" value={e.href} disabled className="todo-href" />
        //                     </div>
        //                     <div className="flex edit-delete-btn-container">
        //                         <div>
        //                             <button onClick={() => EditItem(e)}>
        //                                 <img src={editBtn} />
        //                             </button>
        //                         </div>
        //                         <div>
        //                             <button onClick={() => DeleteItem(e)}>
        //                                 <img src={deleteBtn} />
        //                             </button>
        //                         </div>
        //                     </div>
        //                 </div>
        //             ))}
        //         </div>
        //         <button className="goback-btn text-bg add-soc" onClick={handleAddSocClick}>
        //             დაამატე ახალი სოციალური ბმული
        //         </button>
        //         <div className="all-todos-container">
        //             {todo.map((e) => (
        //                 <div key={e.id} className="flex todo">
        //                     <div className="flex todo-content">
        //                         <div className="soc-image">
        //                             <img src={e.image} className="soc" />
        //                             <div className="choose-image">
        //                                 <input
        //                                     type="file"
        //                                     onChange={handleImageChange}
        //                                     placeholder="აირჩიე სოციალური ქსელის ხატულა"
        //                                 />
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </div>
        <div className="social-links-container">
            <div className="social-links-header">
                <h5 className="text-bg">სოციალური ბმულები</h5>
            </div>
            <div className="social-links-body">
                {showPanel && (
                    <div className="social-panel">
                        {/* {showPanel && ( */}
                        <div className="add-soc-panel">
                            <input
                                type="file"
                                className="social-input soc-xatula"
                                onChange={handleImageChange}
                                placeholder="აირჩიე სოციალური ქსელის ხატულა"
                            />
                            <input
                                className="social-input soc-name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="სოც-ქსელი"
                            />
                            <input
                                className="social-input soc-link"
                                type="text"
                                value={href}
                                onChange={(e) => setHref(e.target.value)}
                                placeholder="ბმული"
                            />
                            <button onClick={AddItem} className="save-btn">შეინახე</button>
                            <button onClick={handleClosePanel} className="goback-btn">გადი უკან</button>
                        </div>
                        {/* )} */}
                    </ div >
                )}
                <button onClick={handleAddSocClick} className="goback-btn text-bg add-soc">დაამატე ახალი სოციალური ბმული</button>
                <div className="all-todos-container">
                    {todo.map((e) => (
                        <div key={e.id} className="flex todo">
                            <div className="flex todo-content">
                                <div className="soc-image">
                                    <img src={e.image} className="soc" />
                                    <div className="choose-image">
                                        <input
                                            type="file"
                                            id="image-upload"
                                            onChange={(event) => handleImageChange(event, e.id)}
                                        />
                                        {imageUrl && (
                                            <img src={imageUrl} alt="Chosen Image" style={{ width: 100, height: 100 }} className="soc-image" />
                                        )}
                                        <img src={camera} alt="" id="avatar" />
                                    </div>
                                </div>
                                <input type="text" value={e.name} disabled className="todo-title" />
                                <input type="text" value={e.href} disabled className="todo-href" />
                            </div>
                            <div className="flex edit-delete-btn-container">
                                <div>
                                    <button onClick={() => EditItem(e)}>
                                        <img src={editBtn} />
                                    </button>
                                </div>
                                <div>
                                    <button onClick={() => DeleteItem(e)}>
                                        <img src={deleteBtn} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default SocialLinks