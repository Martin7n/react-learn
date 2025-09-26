
import { Routes, Route } from 'react-router-dom';
import About from './components/userListComponentPack/About'
import UserReg from './components/Auth/UserReg'
import UserLogin from './components/Auth/UserLogin'
import { UserHome } from './components/userListComponentPack/UserHome';
import Swhome from './components/StarWarsComponents/Swhome';
import Switchcomponent from './components/Switchcomponent/Switchcomponent';

export const RoutesComp = () => {


    return (
        <Routes>    
                    <Route path="/" element={   <Switchcomponent />} />
                    <Route path="/userlist" element={   <UserHome />} />
                    <Route path="/starwars" element={   <Swhome />} />
                    <Route path="/gameplay" element={ <Swhome />} />


                    <Route path="/home" element={   <UserHome />} />
                    <Route path="/register" element={   <UserReg />} />
                    <Route path='/login' element={ <UserLogin /> } />
                    <Route path="/about" element={<About />}>
                        
                    </Route>
   </Routes>)

};