import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: true,
            item: "One half pound bag of cocoa covered almonds uncovered."
        },
        {
            id: 2,
            checked: false,
            item: "Item 2"
        },
        {
            id: 3,
            checked: false,
            item: "Item 3"
        }
    ]);  
    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, 
        checked: !item.checked } : item);
        setItems(listItems);
        localStorage.setItem('shoppinglist',JSON.stringify(listItems));
    }
    const handleDelete = (id) => {
        console.log(id)
    }

    return (
        <main>
            <ul>
                {items.map((item) => (
                    <li className="item" key={item.id}>
                        <input 
                           type="checkbox"
                           onchange={() => handleCheck(item.id)}
                           checked={item.checked}
                        />
                        <label
                            style={(item.checked) ? { textDecoration: 'line-through'} : null}
                            onDoubleClick={()=> handleCheck(item.id)}
                        >{item.item}</label>
                        {/* <button>Delete</button> */}
                        <FaTrashAlt role="button" tabIndex="0"/>
                    </li>
                ))}
            </ul>
        </main>
    )
}
export default Content