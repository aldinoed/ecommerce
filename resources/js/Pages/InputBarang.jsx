import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/app.css";
import "../../css/my.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// import MainNav from "../Components/MainNav";
// import Dropdown from "@/Components/Dropdown";
import { Link, Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import useCsrfToken from "../Components/useCsrfToken";

export default function FormInputProduk(){
    const {token} = useCsrfToken();
    const[name, setName] = useState('')
    const[desc, setDesc] = useState('')
    const[fileImage, setFileImage] = useState('')
    const[selectedCategory, setSelectedCategory] = useState('')
    const[selectedBrands, setSelectedBrands] = useState('')
    const[amount, setAmount] = useState('')
    const[weight, setWeight] = useState('')
    const[price, setPrice] = useState('')

    const [cats, setCats] = useState([])
    useEffect(()=>{
        axios.get('/api/categories-data')
            .then(res=>{
                setCats(res.data.categories)})
            .catch(error=>{
                console.log('Error fetching data: ', error)
            })
    }, [])

    const [brands, setBrands] = useState([])
    useEffect(()=>{
        axios.get('/api/brands-data')
            .then(res=>{
                setBrands(res.data.brands)
            })
            .catch(error=>{
                alert('Error fetching data: ', error)
            })
    })

    const uploadImage = async()=>{
        // console.log(fileImage)
        console.log(amount)
        const formData = new FormData();
        formData.append('name', name);
        formData.append('desc', desc);
        formData.append('cat', selectedCategory);
        formData.append('brand', selectedBrands);
        formData.append('image',fileImage);
        formData.append('price',price);
        formData.append('weight',weight);
        formData.append('amount',amount);
        let responce = await axios.post('/api/input-produk', formData, {headers:{'Content-Type':'multipart/form-data'}})

        if(responce){
            alert('Berhasil input data produk')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await uploadImage()
    }
    return (
        <>
        <Head title="Input Produk"><meta name="csrf-token" content={token} /></Head>
        <div className="p-3 mb-2  mt-5" >
            <div className="align-self-center ">
                <form style={{maxHeight: "80vh !important", maxWidth: "60%"}} className="p-4 m-auto shadow rounded bg-white " method="POST" action="/input-produk" encType="multipart/form-data" onSubmit={handleSubmit}>
                <input type="hidden" value={token} name="_token" />
                    <p className="text-center fs-2">Input Data Produk</p>
                   <div className="overflow-y-scroll overflow-x-hidden" style={{maxHeight: "63vh"}}>
                    <div className="row mt-3 d-flex justify-content-center" style={{maxHeight: "40vh"}}>
                        <div className="col-md">
                            <div>
                                <label htmlFor=" floatingInputGrid">Nama Barang</label>
                                <input type="text" className="form-control" id="floatingInputGrid" name="name" placeholder="" onChange={(e)=>setName(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                        <div className="row mt-3 d-flex justify-content-center">
                            <div className="col-md">
                                <div>
                                    <label htmlFor=" floatingInputGrid">Deskripsi Produk</label>
                                    <textarea type="text" className="form-control" id="floatingInputGrid" name="desc" placeholder="" onChange={(e)=>setDesc(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex mt-3">
                        <div className="col-sm-5">
                            <label htmlFor=" floatingInputGrid">Kategori Produk</label>
                            <div className="">
                                <select className="form-select form-select" aria-label="Large select example" name="cat" value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}>
                                    <option selected>Select</option>
                                    {cats.map((category) => (
                                    <option key={category.category_id} value={category.category_id}>
                                        {category.category_name}
                                    </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-5 ps-4">
                            <label htmlFor=" floatingInputGrid">Brand Produk</label>
                            <div className="">
                            <select className="form-select form-select" aria-label="Large select example" name="brand" value={selectedBrands}
                                onChange={(e) => setSelectedBrands(e.target.value)}>
                                    <option selected>Select</option>
                                    {brands.map((brand) => (
                                    <option key={brand.brand_id} value={brand.brand_id}>
                                        {brand.brand_name}
                                    </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        </div>
                        <div className="mt-3">
                            <label htmlFor=" floatingInputGrid">Jumlah</label>
                            <input className="form-control" type="number" placeholder="" aria-label="" name="amount" onChange={(e)=>setAmount(e.target.value)}/>
                        </div>
                        <div className="mt-3">
                            <label htmlFor=" floatingInputGrid">Berat</label>
                            <input className="form-control" type="number" placeholder="" aria-label="" name="weight" onChange={(e)=>setWeight(e.target.value)}/>
                        </div>
                        <div className="mt-3">
                            <label htmlFor=" floatingInputGrid">Harga Produk</label>
                            <input className="form-control" name="price" type="number" placeholder="" aria-label="" onChange={(e)=>setPrice(e.target.value)}/>
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="formFileMultiple" className="form-label text-secondary">Masukkan Foto Produk</label>
                            <input className="form-control" type="file" id="formFileMultiple" multiple name="image" onChange={(e)=>setFileImage(e.target.files[0])}/>
                        </div>
                   </div>
                    <div className="d-flex mx-auto">
                        <input className="btn btn-primary me-2" type="submit" value="Submit" name="submit"/>
                        <input className="btn btn-danger" type="reset" value=" Clear "/>
                        <button type="reset" className="btn btn-secondary  tombol" style={{marginLeft:"10px"}}><a href="/admin/produk" className="text-white" style={{textDecoration:"none"}}>&#160;Back&#160;</a></button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}