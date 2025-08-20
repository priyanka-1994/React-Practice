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
        console.log(`key: ${id}`)
    }
    
    return (
        <main>
            <ul>
                {items.map((item) => (
                    <li className="item" key={item.id}>
                        <input 
                           type="checkbox"
                           checked={item.checked}
                        />
                        <label>{item.item}</label>
                        {/* <button>Delete</button> */}
                        <FaTrashAlt role="button" tabIndex="0"/>
                    </li>
                ))}
            </ul>
        </main>
    )
}
export default Content