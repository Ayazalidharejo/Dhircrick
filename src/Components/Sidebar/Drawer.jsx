// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import { useDispatch, useSelector } from 'react-redux';
//  import AddIcon from '@mui/icons-material/Add';
//  import RemoveIcon from '@mui/icons-material/Remove';
//   import DeleteIcon from '@mui/icons-material/Delete';
// import { decreaseQuantity, increaseQuantity, removeProduct } from '../Slice/Slice';
// import { Tooltip } from '@mui/material';
// // import "./Style.css"
// import { Link } from 'react-router-dom';

// function MyDrawer(props) {
//   const items = useSelector((state) => state.products.items);
//   const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);
//   const Dispach =useDispatch()

// const {show,toggleDrawerSidebar,setShow}=props
//   const DrawerList = (
//     <Box sx={{ width: 350 }} role="presentation" >
//       <div style={{height:"100vh"}} className='position-relative  border '>
//   <div className='h-100'>
//   {items.map((item) => {
//     return (
//       <div className='m-1' key={item.id}> 
//         <img className='rounded-5' style={{width:"70px"}} src={item.image} alt={item.name} /> 

//         <Tooltip title={item.name}>
//         <span className='mx-1'>
//   {item.name.length > 10 ? `${item.name.slice(0, 10)}...` : item.name}
// </span>
// </Tooltip>
     

//         <span>QTY:{item.quantity} </span>
//         <DeleteIcon style={{cursor:"pointer"}}  onClick={() => Dispach(removeProduct(item))}/>
        
//         <RemoveIcon style={{cursor:"pointer"}}  onClick={() => Dispach(decreaseQuantity(item))} />
//         <AddIcon style={{cursor:"pointer"}} onClick={() => Dispach(increaseQuantity(item))}/>
//       </div>
//     );
//   })}
// </div>
// <div className='d-flex position-absolute bottom-0 start-0 bg-warning justify-content-between w-100 p-3'>
// <button className='fs-5 border-0 text-start bg-transparent text-white'>Total Price</button>

// <span className='fs-5 text-white'>${totalPrice} </span>

// </div>
// <div style={{ width: '100%' }}>
//       {/* Check if items are available */}
//       {items.length > 0 && (
//         <Link
//           to="/Checkout"
//           className="w-100 my-1 py-2 border-0 fw-bold btn-gradient text-center text-decoration-none "
//           style={{ display: 'block', width: '100%' }}
//         >
//           CheckOUT
//         </Link>
//       )}
//     </div>

// </div>
    
//     </Box>
//   );

//   return (
//     <div>
     
//       <Drawer
//         open={show}
//         onClose={() => toggleDrawerSidebar(false)}
//         anchor="right"  
//       >
//         {DrawerList}
//       </Drawer>
//     </div>
//   );
// }

// export default MyDrawer;



import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeProduct } from '../Slice/Slice';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';

function MyDrawer(props) {
  const items = useSelector((state) => state.products.items); // Getting items from Redux store
  const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0); // Calculate total price
  const dispatch = useDispatch(); // To dispatch actions

  const { show, toggleDrawerSidebar } = props; 

  const DrawerList = (
    <Box sx={{ width: 350 }} role="presentation">
      <div style={{ height: '100vh' }} className='position-relative border'>
        <div className='h-100'>
          {items.map((item) => (
            <div className='m-1' key={item.id}> 
              <img className='' style={{ maxHeight:"50px",minHeight:"50px",maxWidth:"60px",minWidth:"60px" }} src={item.image} alt={item.name} /> 
              <Tooltip title={item.name}>
                <span className='mx-1'>
                  {item.name.length > 10 ? `${item.name.slice(0, 10)}...` : item.name}
                </span>
              </Tooltip>
              <span>QTY:{item.quantity}</span>
              <DeleteIcon style={{ cursor: "pointer" }} onClick={() => dispatch(removeProduct(item))} />
              <RemoveIcon style={{ cursor: "pointer" }} onClick={() => dispatch(decreaseQuantity(item))} />
              <AddIcon style={{ cursor: "pointer" }} onClick={() => dispatch(increaseQuantity(item))} />
            </div>
          ))}
        </div>
        
        {items.length > 0 ? (
  <>
    {/* Total Price */}
    <div className='d-flex position-absolute bottom-0 start-0 btn-color text-white  justify-content-between w-100 p-3'>
      <button className='fs-5 border-0 text-start bg-transparent text-white'>
        Total Price
      </button>
      <span className='fs-5 text-white'>${totalPrice}</span>
    </div>

    {/* CheckOUT Button */}
    <div style={{ width: '100%' }}>
      <Link
        to="/Checkout"
        className="w-100 my-1 py-2 border-0 fw-bold btn-color text-white text-center text-decoration-none"
        style={{ display: 'block', width: '100%', backgroundColor:"#1c5fcc" }}
        onClick={() => toggleDrawerSidebar(false)} // Close drawer when checkout is clicked
      >
      <span  className='text-white'>Checkout</span>
      </Link>
    </div>
  </>
) : (
  // When items.length is 0, show "Cart is empty"
  <div className="text-center p-3 position-absolute top-0 start-0 ms-5">
    <h5 className='pb-5'>Your Cart is Empty</h5>
  </div>
)}

      </div>
    </Box>
  );

  return (
    <div>
      <Drawer
        open={show} // Drawer visibility controlled by the 'show' prop
        onClose={() => toggleDrawerSidebar(false)} // Close drawer on clicking outside or escape key
        anchor="right"
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default MyDrawer;
