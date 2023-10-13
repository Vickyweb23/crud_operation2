// import 'bootstrap/dist/css/bootstrap.min.css';


// import './index.css'
// import Api from './api'

// import React, { Component } from 'react';

// class List extends Component {
//   constructor() {
//     super();
//     this.state = {
//       items: [],
//       newItem: '',
//       editIndex: -1,
//     };
//   }

//   handleInputChange = (e) => {
//     this.setState({ newItem: e.target.value });
//   };

//   addItem = () => {
//     alert("Are You Confirm to  Add Products ");

//     if (this.state.newItem.trim() === '') return;
//     if (this.state.editIndex === -1) {
//       this.setState((prevState) => ({
//         items: [...prevState.items, prevState.newItem],
//         newItem: '',

        
//       }));
//     } else {
//       const items = [...this.state.items];
//       items[this.state.editIndex] = this.state.newItem;
//       this.setState({
//         items,
//         newItem: '',
//         editIndex: -1,
//       });
//     }
//   };

//   editItem = (index) => {
//     this.setState({ newItem: this.state.items[index], editIndex: index });
//     alert("Are You Confirm to  edit");
//   };

//   deleteItem = (index) => {
//     const items = this.state.items.filter((_, i) => i !== index);
//     this.setState({ items });
//     alert("Are Youn  Confirm to Delete");

//   };

//   render() {


//     return (
//       <div>
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>
//                   <button onClick={() => updateItem(item)}>Edit</button>
//                   <button onClick={() => deleteItem(item.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         {/* Include form for creating or editing items */}
//       </div>
//     );
    

// //     return (

// // <>
// // <div className='table'>
// // <Api/>

// // </div>
// //       <div className='crud-div' >

// //         <input
// //           type="text"
// //           placeholder="Add an item"
// //           value={this.state.newItem}
// //           onChange={this.handleInputChange}
// //         />
// //         <button  className="add" onClick={this.addItem}>
// //           {this.state.editIndex === -1 ? 'Add' : 'Update'}
// //         </button>
// //         <ul className='ul'>
// //           {this.state.items.map((item, index) => (
// //             <li key={index}>
// //               {item}
              
// //               <button className="edit" onClick={() => this.editItem(index)}>Edit</button>
// //               <button className="delete" onClick={() => this.deleteItem(index)}>Delete</button>
// //             </li>
// //           ))}
// //         </ul>
// //       </div></>
// //     );
//   }
// }

// export default List;



// import React, { useState, useEffect } from 'react';
// import './App.css';
// import Table from 'react-bootstrap/Table';

// function App() {
//   const [data, setData] = useState([]);
//   const [newItem, setNewItem] = useState({ id: '', name: '' });
//   const [editing, setEditing] = useState(false);

//   useEffect(() => {
//     // Mock data for demonstration
//     setData([
//       { id: 1, name: 'Item 1' },
//       { id: 2, name: 'Item 2' },
//       { id: 3, name: 'Item 3' },
//     ]);
//   }, []);

//   const createItem = () => {
//     setData((prevData) => [...prevData, { ...newItem }]);
//     setNewItem({ id: '', name: '' });
//   };

//   const updateItem = () => {
//     setData((prevData) =>
//       prevData.map((item) => (item.id === newItem.id ? { ...newItem } : item))
//     );
//     setNewItem({ id: '', name: '' });
//     setEditing(false);
//   };

//   const deleteItem = (id) => {
//     setData((prevData) => prevData.filter((item) => item.id !== id));
//   };

//   return (
//     <div className="App">
//       <h1>CRUD Table</h1>
//       <table className='table' >
       
//       <thead >
//       <tr>
//           <td  className="quality" colSpan={4}>No1 Quality Product List</td>
          
//         </tr>

//         <tr>
//           <th>S.no </th>
//           <th> Fruites</th>
//           <th>Dry Fruits</th>

//           <th>Vegitable</th>
//         </tr>
//       </thead>
//         <tbody>
//           {data.map((item) => (
//             <tr key={item.id}>
//               <td key={item.id}>1</td>
//               <td>sss{item.name}</td>
//               <td>
//                 <button onClick={() => setEditing(true)}>Edit</button>
//                 <button onClick={() => deleteItem(item.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//         <tbody>
//           {data.map((item) => (
//             <tr key={item.id}>
//               <td key={item.id}>2</td>
//               <td>banana{item.name}</td>
//               <td>
//                 <button onClick={() => setEditing(true)}>Edit</button>
//                 <button onClick={() => deleteItem(item.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {editing ? (
//         <div>
//           <h2>B</h2>
//           <input
//             type="text"
//             placeholder="Name"
//             value={newItem.name}
//             onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
//           />
//           <button onClick={updateItem}>Update</button>
//         </div>
//       ) : (
//         <div>
//           <h2>Add Item</h2>
//           <input
//             type="text"
//             placeholder="Name"
//             value={newItem.name}
//             onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
//           />
//           <button onClick={createItem}>Create</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import Api from './api'
function App() {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState({ id: '', name: '' });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    // Mock data for demonstration
    setData([
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 4, name: 'Banana' },
      { id: 5, name: 'Papaya' },
    ]);

    
  }, []);

  const createItem = () => {
    setData((prevData) => [...prevData, { id: Date.now(), name: newItem.name }]);
    setNewItem({ id: '', name: '' });
  };

  const updateItem = () => {
    setData((prevData) =>
      prevData.map((item) => (item.id === newItem.id ? { ...item, name: newItem.name } : item))
    );
    setNewItem({ id: '', name: '' });
    setEditing(false);
  };

  const deleteItem = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
<><div><Api/></div>
    <div className="App">
      <h1>CRUD Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <button
                  onClick={() => {
                    setEditing(true);
                    setNewItem({ id: item.id, name: item.name });
                  }}
                >
                  Edit
                </button>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editing ? (
        <div>
          <h2>Edit Item</h2>
          <input
            type="text"
            placeholder="Name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          />
          <button onClick={updateItem}>Update</button>
        </div>
      ) : (
        <div>
          <h2>Add Item</h2>
          <input
            type="text"
            placeholder="Name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          />
          <button onClick={createItem}>Create</button>
        </div>
      )}
    </div></>
  );
}

export default App;
