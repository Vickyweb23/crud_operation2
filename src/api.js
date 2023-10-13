// import Table from 'react-bootstrap/Table';

// // or less ideally
// import { Button } from 'react-bootstrap';
// function DarkExample() {
//   return (
//     <>
//                 <marquee className="marquee">The fruits are  very low price -----Offer is going on $$$$  </marquee>


//     <Table  className='Table border' striped bordered hover variant="dark">

        
//       <thead >
//       <tr>
//           <td  className="quality" colSpan={4}>No1 Quality Product List</td>
          
//         </tr>

//         <tr>
//           <th>S.no </th>
//           <th> Fruites</th>
//           <th>Vegitable</th>
//           <th>Package Fruites</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1</td>
//           <td>Papaya</td>
//           <td>Onion</td>
//           <td>Badham</td>
         
//         </tr>
//         <tr>
//           <td>2</td>
//           <td>Gova</td>
//           <td>Potato</td>
//           <td>Dates</td>
//         </tr>
//         <tr>
//         <td>3</td>
//           <td>Apple</td>
//           <td>Potato</td>
//           <td>Pistha</td>
//         </tr>
//         <tr>
//         <td className="quality" colSpan={4}>No2 Quality Product</td>
        
//         </tr>
//         <tr>
//         <td>4</td>
//           <td>Apple</td>
//           <td>Potato</td>
//           <td>Pistha</td>
//         </tr>
//         <tr>
//         <td>5</td>
//           <td>Apple</td>
//           <td>Potato</td>
//           <td>Pistha</td>
//         </tr>
//         <tr>
//         <td>6</td>
//           <td>Apple</td>
//           <td>Potato</td>
//           <td>Pistha</td>
//         </tr>  
        
        
        
//             </tbody>
//     </Table></>
//   );
// }

// export default DarkExample;
import React, { useState } from 'react';

function Api() {
  const [data, setData] = useState([
    { id: 1, name: 'Item 1', description: 'Description 1' },
    { id: 2, name: 'Item 2', description: 'Description 2' },
    { id: 3, name: 'Item 3', description: 'Description 2' },

    { id: 4, name: 'Item 4', description: 'Description 2' },

  ]);

  const [newItem, setNewItem] = useState({ name: '', description: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState({ id: null, name: '', description: '' });

  const handleCreate = () => {
    setData([...data, { id: Date.now(), ...newItem }]);
    setNewItem({ name: '', description: '' });
  };

  const handleEdit = (id) => {
    const itemToEdit = data.find((item) => item.id === id);
    setIsEditing(true);
    setEditItem({ ...itemToEdit });
  };

  const handleUpdate = () => {
    const updatedData = data.map((item) =>
      item.id === editItem.id ? editItem : item
    );
    setData(updatedData);
    setIsEditing(false);
    setEditItem({ id: null, name: '', description: '' });
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  return (
    <div>
      <h1>CRUD Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => handleEdit(item.id)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isEditing ? (
        <div>
          <h2>Edit Item</h2>
          <input
            type="text"
            placeholder="Name"
            value={editItem.name}
            onChange={(e) => setEditItem({ ...editItem, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            value={editItem.description}
            onChange={(e) =>
              setEditItem({ ...editItem, description: e.target.value })
            }
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      ) : (
        <div>
          <h2>Create Item</h2>
          <input
            type="text"
            placeholder="Name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            value={newItem.description}
            onChange={(e) =>
              setNewItem({ ...newItem, description: e.target.value })
            }
          />
          <button onClick={handleCreate}>Create</button>
        </div>
      )}
    </div>
  );
}

export default Api;
