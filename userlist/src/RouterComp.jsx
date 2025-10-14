
import { Routes, Route } from 'react-router-dom';
import About from './components/userListComponentPack/About'

import { UserHome } from './components/userListComponentPack/UserHome';
import Swhome from './components/StarWarsComponents/Swhome';
import Switchcomponent from './components/Switchcomponent/Switchcomponent';
import Login from './components/Gameplayapp/AuthPages/Login';
import Register from './components/Gameplayapp/AuthPages/Register';
import AllGame from './components/Gameplayapp/AllGame';
import AuthGuard from './components/Guards/AuthGuard';


export const RoutesComp = () => {


    return (
        <Routes>    
                    <Route path="/" element={   <Switchcomponent />} />
                    <Route path="/userlist" element={   <UserHome />} />
                    <Route path="/starwars" element={   <Swhome />} />
                    {/* <Route path="/gameplay" element={ <Swhome />} />   */}

                        <Route element={<AuthGuard />}>
                            <Route path="/gameplay/edit/:gameId" element={<GameEdit />} />
                            <Route path="/gameplay/create" element={<GameCreate />} />

                          </Route>
                    {/* <Route path="/gameplay/edit/:gameId" element={<GameEdit />} /> */}
                    <Route path="/gameplay/all-games" element={ <AllGame />} />
                    
                    <Route path="/gameplay/login" element={<Login />} />
                    <Route path="/gameplay/register" element={<Register />} />
                    <Route path="/gameplay/logout" element={<Logout />} />                      
                    
   </Routes>)

};