import { useState } from "react"
import { useEffect } from "react";
function SocialLinks() {
    const [input, setInput] = useState('');
    const [todo, setTodo] = useState([
        { id: Math.random(), name: "Check My Projects", link: "www/", icon: "../assets/" },
        { id: Math.random(), name: "Love You Ho Gaya❤", link: "www/", icon: "../assets/" }
    ]);
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
            const AllInput = { id: Math.random(), name: input, link: input, image: img }
            setTodo([...todo, AllInput]);
            setInput('')
        }
    }
    const DeleteItem = (Elme) => {
        const TrashData = todo.filter((e) => {
            return e.id !== Elme.id
        })
        setTodo(TrashData);
    }
    const EditItem = (Elme) => {
        const UpdateFind = todo.find((e) => {
            return e.id === Elme.id
        })
        setInput(UpdateFind.name);
        setUpdateData(Elme.id);
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
                    <div className='lol'>
                        {todo?.map((e) => {
                            return (
                                <div key={e.id}>
                                    <div>
                                        <input type="text" value={e.name} disabled />
                                    </div>
                                    <div>
                                        <div>
                                            <button onClick={() => EditItem(e)}> EDIT </button>
                                        </div>
                                        <div>
                                            <button onClick={() => DeleteItem(e)}> DELTE </button>
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