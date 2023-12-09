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
        try {
            if (res.status === 200) {
                const newUserData = users.filter((item)=>{
                    return(
                        item.user_id !== userId
                        )
                    })
                setUsers(newUserData)
                alert(res.data.message)
            }else{
                    console.error('Error deleting user: ' + res.data.message);
                };
            } catch (error) {
                
                console.log('Error deleting user. Check console for details.', error);
        }
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
                        <th scope="col" className="ms-5 ps-3">Action</th>
                   </tr>
                </thead>
            <tbody>
            {Array.isArray(users) && users.map(user=>(
                <tr key={i}>
                    <td>{i++}</td>
                    <td>{user.user_id}</td>
                    <td>{user.fullname}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td className="d-flex justify-content-start">
                        <form method="GET" action="update.php">
                            <button className="btn btn-success" name="view" onClick={()=>handleDelete(cat.category_id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
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