import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CreatePO from './pages/CreatePO';
import UpdatePO from './pages/UpdatePO';

import Display from './pages/Display';
import UpdateLowInventory from './pages/UpdateLowInventory';
import CreateLowInventory from './pages/CreateLowInventory';
import DisplayLowInventory from './pages/DisplayLowInventory';
import POReport from './pages/POReport';
import Dashboard from './components/Dashboard';
import CurruntPO from './pages/CurruntPO';
import Item_main from './pages/Item_main';
import Item_add from './pages/Item_add';
import Item_Update from './pages/Item_Update';
import CreateSalesOrder from './pages/createSalesOrder';

import SelesOrders from './pages/salesOrders';
import UpdatePendingSelesOrders from './pages/updatePendingSelesOrders';
import 'react-toastify/dist/ReactToastify.css';
import ShippingMNG from './pages/ShippingMNG';
import VehicleMNG from './pages/VehicleMNG';
import AddVehicles from './pages/AddVehicles';
import AddShipping from './pages/AddShipping';


import EnterReturnItems from './pages/EnterReturnItems';
import UplodeReturnItems from './pages/UplodeReturnItems';
import ViewreturnItemsDetails from './pages/ViewreturnItemsDetails';
import EnterWastageItem from './pages/EnterWastageItem';
import UplodeWastageItems from './pages/UplodeWastageItems';
import ViewWastageItem from './pages/ViewWastageItem';

import AddLostItem from './Pages/add_lost_item';
import Lostitemlist from './Pages/lost_item_list';
import EditItemPage from './Pages/edit_lost_item';
import Addmaintance from './Pages/add_maintance_task';
import MaintenanceList from './Pages/MaintenanceListPage';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Dashboard />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        

        <Route element={<PrivateRoute />}>  
          <Route path='/profile' element={<Profile />} />
          <Route path='/display' element={<Display />} /> 
          <Route path='/displaylowinventory' element={<DisplayLowInventory />} />
          <Route path='/create-po' element={<CreatePO />} />
          <Route path='/createlowinventoy' element={<CreateLowInventory />} />
          <Route path='/po-report' element={<POReport />} />
          <Route path='/listing/:listingId' element={<CurruntPO />} />
          <Route path='/Item_main' element={<Item_main/>} />
          <Route path='/Item_add' element={<Item_add/>} />
          <Route path='/Item_Update/:ItemID' element={<Item_Update/>} />
          <Route path="/Create-Sales-Order" element={<CreateSalesOrder />} />
         <Route path="/sales-orders" element={<SelesOrders />} />
         <Route path="/update-pending-orders/:id" element={<UpdatePendingSelesOrders />} />
         <Route path='/shippingmng' element={<ShippingMNG />} />
          <Route path='/shippings' element={<ShippingMNG />} />
          <Route path='/addShipping' element={<AddShipping />} />
          <Route path="/return" element={<EnterReturnItems/>} />
    
    
    <Route path="/UplodeReturnItems/:id" element={<UplodeReturnItems/>} />
    
    <Route path="/ViewreturnItemsDetails" element={<ViewreturnItemsDetails/>} />

    <Route path="/EnterWastageItem" element={<EnterWastageItem/>} />


    <Route path="/UplodeWastageItems/:id" element={<UplodeWastageItems/>} />

    <Route path="/ViewWastageItem" element={<ViewWastageItem/>} />
       
          <Route path='/addVehicles' element={<AddVehicles />} />
             <Route path='/vehicles' element={<VehicleMNG />} />
          
          <Route
            path='/update-po/:listingId'
            element={<UpdatePO />}
          />
          <Route
            path='/update-lowinventory/:updateLowInventoryId'
            element={<UpdateLowInventory />}
          />
        </Route>

        <Route path="/add_lost_item" element={<AddLostItem />} />
<Route path="/lost_item_list" element={<Lostitemlist/>}/>
<Route path='/edit_lost_item/:id'  element={<EditItemPage/>}/>
<Route path='/add_maintance_task'  element={<Addmaintance/>}/>
<Route path='/MaintenanceListPage'  element={<MaintenanceList/>}/>

      </Routes>
    </BrowserRouter>
  );
}