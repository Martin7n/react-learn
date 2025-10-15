
import Pagination from "./Pagination";
import Search from "./Search";
import UserListTable from "./UserListTable";
import UserModal from "./UserModal";

export default function UserList(){




    return (


        <section className="card users-container">
            <Search />
             {/* <UserModal /> */}
            

            <UserListTable />

            <Pagination />


         
      
      
        </section>
    )



};