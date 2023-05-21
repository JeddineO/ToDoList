import { useState } from "react";
import image from './delete.png';

const List = ({ tasks }) => {

    const [title, setTitle] = useState('');

    const handleDelete = (value) => {
        fetch('http://localhost:8000/Liste/' + value, {
            method: 'DELETE'
        }).then(() => {

        })
    };

    const handleAdd = (e) => {
        e.preventDefault();
        const newItem = {
            title: title,
            classN: ""
        };
        fetch('http://localhost:8000/Liste', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newItem)
        }).then(() => {

        });
    };

    const handleChange = (valueA, ValueB, titre) => {
        var updatedData = {};
        if (ValueB != "true") {
            updatedData = {
                title: titre,
                classN: "true"
            };
        } else {
            updatedData = {
                title: titre,
                classN: ""
            };
        }

        fetch('http://localhost:8000/Liste/' + valueA, {
            method: 'PUT', // or 'PATCH' if you prefer
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        }).then(() => {

        });
    };

    return (
        <div className="List">
            <form onSubmit={handleAdd}>
                <input id="search" type="text" placeholder='New task...' value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="submit" value="Add" id="btn" />
            </form>
            {tasks.map(Task => (
                < div className={Task.classN}>
                    <input class="chks" onClick={() => handleChange(Task.id, Task.classN, Task.title)} type='checkbox' checked={Task.classN} />
                    <h5 >{Task.title}</h5>
                    <button value={Task.id} onClick={() => handleDelete(Task.id)}>
                        <img src={image} alt='Supprimer' /></button>
                </div>
            ))}
        </div >
    );
}
export default List;