import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../css/app.css";
import "../../css/my.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";

import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useCsrfToken from "../Components/useCsrfToken";

export default function FormInputProduk(){
    const [product, setProduct] = useState('');
    const [media, setMedia] = useState('');
    const {productId} = useParams();
    useEffect(()=>{
        axios.get('/api/products-data/'+productId)
            .then(res=>{
                setProduct(res.data.product);
                setMedia(res.data.media)
                })
            .catch(err=>console.log(`Error fetching data: ${err}`))
    }, [])

    
    const {token} = useCsrfToken();
    const[name, setName] = useState('');
    const[desc, setDesc] = useState('');
    const[fileImage, setFileImage] = useState('')
    const[selectedCategory, setSelectedCategory] = useState('')
    const[selectedBrands, setSelectedBrands] = useState('')
    const[amount, setAmount] = useState('')
    const[weight, setWeight] = useState('')
    const[price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    
    const [brands, setBrands] = useState([])
    const [cats, setCats] = useState([])
    
    useEffect(()=>{
        axios.get('/api/categories-data')
        .then(res=>{
            let takenItem = [];
            for(let item of res.data.categories){
                if(item.category_id == product.category_id){ 
                    setCategory(item.category_name);
                    setSelectedCategory(item.category_id);
                    continue;
                }else{
                    takenItem.push(item);
                }
            }
            setCats(takenItem)
        })
        .catch(error=>{
            console.log('Error fetching data: ', error)
        })
    }, [])
    
    useEffect(()=>{
        let takenItem = [];
        axios.get('/api/brands-data')
        .then(res=>{
            for(let item of res.data.brands){
                if(item.brand_name == product.brand_name){ 
                    setSelectedBrands(item.brand_id)
                    continue;
                }else{
                    takenItem.push(item)
                }
            }
            setBrands(takenItem);
            
        })
        .catch(error=>{
            alert('Error fetching data: ', error)
        })
    }, [])

    useEffect(()=>{
        if(name == '' && desc == '' && amount == '' && price == '' && weight == '' && product){
            console.log(product);
            setName(product.product_name);
            setDesc(product.description);
            setAmount(product.product_stock);
            setPrice(product.product_price);
            setWeight(product.product_weight);
        }
    })

    const uploadImage = async()=>{
        const formData = new FormData();
        formData.append('productId', productId)
        formData.append('name', name);
        formData.append('desc', desc);
        formData.append('cat', selectedCategory);
        formData.append('brand', selectedBrands);
        formData.append('image',fileImage);
        formData.append('price',price);
        formData.append('weight',weight);
        formData.append('amount',amount);
        let res = await axios.post('/api/update-produk', formData, {headers:{'Content-Type':'multipart/form-data'}})

        if(res.status == 200){
            Swal.fire({
                title : "Berhasil!",
                text : "Berhasil Update Data Produk",
                icon : "success"
            })
        }else if(res.status != 200){
            Swal.fire({
                title : "Error!",
                text : res,
                icon : 'error'
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await uploadImage()
    }
    return (
        <>
        <div className="p-3 mb-2  mt-5" >
            <div className="align-self-center ">
                <form style={{maxHeight: "80vh !important", maxWidth: "60%"}} className="p-4 m-auto shadow rounded bg-white " method="POST" action="/input-produk" encType="multipart/form-data" onSubmit={handleSubmit}>
                <input type="hidden" value={token} name="_token" />
                    <p className="text-center fs-2">Update Data Produk</p>
                   <div className="overflow-y-scroll overflow-x-hidden" style={{maxHeight: "63vh"}}>
                    <div className="row mt-3 d-flex justify-content-center" style={{maxHeight: "40vh"}}>
                        <div className="col-md">
                            <div>
                                <label htmlFor=" floatingInputGrid">Nama Barang</label>
                                <input type="text" className="form-control" id="floatingInputGrid" name="name" placeholder="" value={name} onChange={(e)=>setName(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                        <div className="row mt-3 d-flex justify-content-center">
                            <div className="col-md">
                                <div>
                                    <label htmlFor=" floatingInputGrid">Deskripsi Produk</label>
                                    <textarea type="text" className="form-control" id="floatingInputGrid" name="desc" placeholder="" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex mt-3">
                        <div className="col-sm-5">
                            <label htmlFor=" floatingInputGrid">Kategori Produk</label>
                            <div className="">
                                <select className="form-select form-select" aria-label="Large select example" name="cat"  value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}>
                                    {
                                        <option value={product.category_id} selected>
                                        {category}
                                        </option> || 
                                        <option>Select</option>
                                    }
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
                                    {
                                        <option value={product.brand_id} selected>
                                        {product.brand_name}
                                        </option> || 
                                        <option>Select</option>
                                    }
                                    {brands.map((brand) => (
                                    <option key={brand.brand_id} value={brand.brand_id} disabled={brand.brand_id == product.brand_id}>
                                        {brand.brand_name}
                                    </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        </div>
                        <div className="mt-3">
                            <label htmlFor=" floatingInputGrid">Jumlah</label>
                            <input className="form-control" type="number" placeholder="" aria-label="" name="amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                        </div>
                        <div className="mt-3">
                            <label htmlFor=" floatingInputGrid">Berat Produk</label>
                            <input className="form-control" name="weight" type="number" placeholder="" aria-label="" value={weight} onChange={(e)=>setPrice(e.target.value)}/>
                        </div>
                        <div className="mt-3">
                            <label htmlFor=" floatingInputGrid">Harga Produk</label>
                            <input className="form-control" name="price" type="number" placeholder="" aria-label="" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                        </div>
                        <div className="mb-3 mt-3">
                        <p className="text-secondary">Gambar produk sebelumnya: </p>
                            <img className="rounded image-fluid" src={`http://127.0.0.1:8001/storage/${media.media_file}`} alt=""/>
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="formFileMultiple" className="form-label text-secondary">Masukkan Gambar Produk</label>
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