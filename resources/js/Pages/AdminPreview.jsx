export default function AdminPreview(){
    return(
        <>
            <div className="table-view overflow-auto" style={{height:"80%"}}>
                <table className="table table-striped ">
                    <thead>
                        <tr>
                            <th scope="col">Lihat</th>
                            <th scope="col">Id Peminjaman</th>
                            <th scope="col">Tanggal Peminjaman</th>
                            <th scope="col">Tanggal Pengembalian</th>
                        </tr>
                    </thead>                          
                    <tbody>
                        <tr>
                            <td>
                                <form action="preview.php" method="GET">
                                    <button className="btn" name="id_peminjaman" value="<?= $user['id_peminjaman']; ?>">
                                        <span className="material-symbols-outlined">
                                            open_in_new
                                        </span>
                                    </button>
                                </form>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )   
}