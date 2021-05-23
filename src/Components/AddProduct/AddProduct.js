import { Container } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [photoUrl, setPhotoUrl] = useState(null);

    // Handle form Submition:
    const onSubmit = (data) => {
        const productsData = {
            name: data.name,
            author: data.author,
            category: data.category,
            price: data.price,
            date: data.date,
            features: data.features,
            collection: data.collection,
            group: data.group,
            seller: data.seller,
            key: data.key,
            photoUrl: photoUrl
        };
        const url = `http://localhost:5200/addProduct`;
        console.log(url);
        console.log(productsData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productsData)
        })
            .then(res => console.log('From server response', res));
    };

    // Handle Images Upload:
    const handleImageUpload = (e) => {
        // console.log(e.target.files[0]);
        const photoData = new FormData();
        photoData.set('key', '7d2598c0cf9adb7c67d11745142e540b'); // For the img hosting provider site api key here!!
        photoData.append('image', e.target.files[0])

        // GET imgbb photo-url and POST to MDB server:
        axios.post('https://api.imgbb.com/1/upload', photoData)
            .then(function (response) {
                setPhotoUrl(response.data.data.display_url);
                console.log(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <Container>
            <div className="main">
                <h1>Add online database store to your products</h1> <br />
                <div className="form-container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="main-form">
                            <div className="first-input">
                                <input type="name" placeholder="Name" {...register("name")} />
                                <input type="number" placeholder="Price" {...register("price")} />
                                <input type="category" placeholder="Category" {...register("category")} />
                                <input type="collection" placeholder="collection" {...register("collection")} />
                                <input type="group" placeholder="group" {...register("group")} />
                                <input type="key" placeholder="key" {...register("key")} />
                            </div>
                            <div className="second-input">
                                <input type="seller" placeholder="seller" {...register("seller")} />
                                <input type="author" placeholder="Author" {...register("author")} />
                                <input type="file" onChange={handleImageUpload} />
                                <input type="date" {...register("date", { required: true })} />
                            </div>
                        </div>
                        <div className="third-input">
                            <textarea type="text" placeholder="Enter your product features. . ." {...register("features")} />
                        </div>
                        <input type="submit" style={{ padding: '10px 100px', margin: '10px 0' }} />
                    </form>
                </div>
            </div>
        </Container>
    );
}

export default AddProduct;