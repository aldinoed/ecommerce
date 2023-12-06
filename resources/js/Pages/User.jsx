import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/app.css";
import "../../css/my.css";
import useCsrfToken from "@/Components/useCsrfToken";

import { useState, useEffect } from "react";
import axios from "axios";

export default function User(){
    let i = 1;
    const [users, setUsers] = useState([])
    useEffect(()=>{
        axios.get('/api/users-data')
            .then(res=>{
                setUsers(res.data.users)})
            .catch(error=>{
                console.log('Error fetching data: ', error)
            })
    }, [])
    // const {token} = useCsrfToken();
    const handleDelete = async(userId) => {
        console.log(userId)
        let res =  await axios.delete(`/api/delete-user/${userId}`);
        if (res.data.status === 200) {
            alert(res.data.message)
            const newUserData = users.filter((item)=>{
                return(
                    item.user_id !== userId
                )
            })
            setUsers(newUserData)
        }else{
                console.error('Error deleting user:', error);
                alert('Error deleting user. Check console for details.');
        };
    }
    return(
        <>
        <div className="table-view overflow-auto shadow p-3 rounded-3" style={{height:"83%"}}>
            <table className="table table-striped ">
                <thead>
                   <tr>
                        <th scope="col">No.</th>
                        <th className="text-center" scope="col">Id User</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col" className="ms-5">Action</th>
                   </tr>
                </thead>
            <tbody>
            {Array.isArray(users) && users.map(user=>(
                <tr key={i}>
                    <td>{i++}</td>
                    <td >{user.user_id}</td>
                    <td>{user.fullname}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td className="d-flex justify-content-start">
                        <form method="GET" action="update.php">
                            <button className="btn btn-warning" name="update" value={user.user_id}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                </svg>
                            </button>
                        </form>
                        {/* <form method="POST" onSubmit={(e)=>{ */}
                            {/* }> */}
                            {/* <input type="hidden" value={token} name="_token" /> */}
                            <button className="btn btn-danger" name="delete" onClick={()=>handleDelete(user.user_id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                </svg>
                            </button>
                        {/* </form> */}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
        </>
    )
}