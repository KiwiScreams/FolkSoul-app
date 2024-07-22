import { useState } from "react"
import { useEffect } from "react";
import deleteBtn from "../assets/images/delete-btn.svg"
import editBtn from "../assets/images/edit-btn.svg"
import youtube_icon from "../assets/images/Youtube.svg"
import facebook_icon from "../assets/images/facebook.svg"
import twitter_icon from "../assets/images/twitter.svg"
import camera from "../assets/images/Camera Icon.svg"
function SocialLinks() {
    const [input, setInput] = useState('');
    const [todo, setTodo] = useState([
        { id: Math.random(), name: "YouTube", href: "https://www.facebook.com/NanukaZhorzholianiShow", image: youtube_icon },
        { id: Math.random(), name: "FaceBook", href: "https://www.facebook.com/NanukaZhorzholianiShow", image: facebook_icon },
        { id: Math.random(), name: "Twitter", href: "https://www.facebook.com/NanukaZhorzholianiShow", image: twitter_icon },
        { id: Math.random(), name: "YouTube", href: "https://www.facebook.com/NanukaZhorzholianiShow", image: youtube_icon },
        { id: Math.random(), name: "FaceBook", href: "https://www.facebook.com/NanukaZhorzholianiShow", image: facebook_icon },
        { id: Math.random(), name: "Twitter", href: "https://www.facebook.com/NanukaZhorzholianiShow", image: twitter_icon },
        { id: Math.random(), name: "YouTube", href: "https://www.facebook.com/NanukaZhorzholianiShow", image: youtube_icon },
        { id: Math.random(), name: "FaceBook", href: "https://www.facebook.com/NanukaZhorzholianiShow", image: facebook_icon },
        { id: Math.random(), name: "Twitter", href: "https://www.facebook.com/NanukaZhorzholianiShow", image: twitter_icon }
    ]);
    const [recentImageURL, setRecentImageURL] = useState(null);
    // useEffect(() => {
    //     const storedImage = localStorage.getItem("social-image");
    //     if (storedImage) {
    //       setRecentImageURL(storedImage);
    //     }
    //   }, []);
      const handleImageChange = (event, todoId) => {
        const file = event.target.files[0]
        const reader = new FileReader()
        reader.addEventListener("load", () => {
          const imageDataURL = reader.result;
          setTodo(todo.map((item) =>
            item.id === todoId ? { ...item, recentImageURL: imageDataURL } : item
          ))
        //   localStorage.setItem(`social-image`, imageDataURL)
        })
        reader.readAsDataURL(file)
      }
      
    const [updateToDo, setUpdateToDo] = useState(null);
    const [IsToggle, setToggle] = useState(true);
    const AddItem = (e) => {
        e.preventDefault();
        if (!input) {
            alert("Please Fill Input Value");
        } else if (input === " ") {
            alert("Please Fill Input Value");
        }
        else if (updateToDo) {
            setTodo(todo.map((e) => {
                if (e.id === updateToDo) {
                    return { ...e, name: input }
                }
                return e;
            }))
            setInput('');
            setToggle(true);
            setUpdateToDo(null);
        } else {
            const AllInput = { id: Math.random(), name: input }
            setTodo([...todo, AllInput]);
            setInput('')
        }
    }
    const DeleteItem = (ToDo) => {
        const TrashData = todo.filter((e) => {
            return e.id !== ToDo.id
        })
        setTodo(TrashData);
    }
    const EditItem = (ToDo) => {
        const UpdateFind = todo.find((e) => {
            return e.id === ToDo.id
        })
        setInput(UpdateFind.name);
        setUpdateData(ToDo.id);
        setToggle(false);
    }
    return (
        <>
            <div className="social-links-container">
                <div className="social-links-header">
                    <h5 className="text-bg">სოციალური ბმულები</h5>
                </div>
                <div className="social-links-body">
                    <input type="text" placeholder='Today Plan' onChange={(e) => {
                        setInput(e.target.value);
                    }} value={input}></input>
                    <button onClick={AddItem}> ADD </button>
                    <div className='all-todos-container'>
                        {todo?.map((e) => {
                            return (
                                <div key={e.id} className="flex todo">
                                    <div className="flex todo-content">
                                        <div className="soc-image">
                                        <img src={e.recentImageURL ? e.recentImageURL : e.image} className="soc"/>
                                            <div className="choose-image">
                                                <input type="file" id="image-upload" onChange={(event) => handleImageChange(event, e.id)}/>
                                                <img src={camera} alt="" id="avatar" />
                                            </div>
                                        </div>
                                        <input type="text" value={e.name} disabled className="todo-title" />
                                        <input type="text" value={e.href} disabled className="todo-href"/>
                                    </div>
                                    <div className="flex edit-delete-btn-container">
                                        <div>
                                            <button onClick={() => EditItem(e)}><img src={editBtn} /></button>
                                        </div>
                                        <div>
                                            <button onClick={() => DeleteItem(e)}><img src={deleteBtn} /></button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <button className="goback-btn text-bg">დაამატე ახალი სოციალური ბმული</button>
                </div>
            </div>
        </>
    )
}
export default SocialLinks