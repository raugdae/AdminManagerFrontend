import {getAllUsers} from "../../../api/user"

import {useState,useEffect} from 'react'

function AllUsersList(){

    const [userList,setUserList] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => { const response = await getAllUsers()
            setUserList(response.userList)
    } 
    fetchUsers()},[])

    

    return (
        <div>
            {userList.map(item => (
                <div key={item.id}>{item.email}</div>

            ))}
        </div>
    )
}
export default AllUsersList