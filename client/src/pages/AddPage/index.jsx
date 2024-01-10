import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
const AddPage = () => {
    const [products, setProducts] = useState([])
    const getProducts = async () => {
        const res = await axios.get("http://localhost:8000/api/product/")
        setProducts(res.data)
    }

    const addProduct= async (data)=>{
        const res = await axios.post("http://localhost:8000/api/product/",data)
        setProducts([...products,{data}])
        console.log('add',products);
        getProducts()
    }

    const deleteProduct= async (id)=>{
      await axios.delete(`http://localhost:8000/api/product/${id}`)
      getProducts()
    }

    useEffect(() => {
        getProducts()
    }, [])



    console.log(products);
    return (
        <div className="add-page  ">

            <Formik
                initialValues={{ image: '', title: '', category: '', price: '' }}
                validationSchema={Yup.object({
                    image: Yup.string()
                        .required('Required'),
                    title: Yup.string()

                        .required('Required'),
                    category: Yup.string()

                        .required('Required'),
                    price: Yup.number().required('Required')

                })}
                onSubmit={(values) => {
                    addProduct(values)
                    console.log("test"+ values);
                }}
            >
                <Form className=' flex flex-col justify-center items-center p-10' >
                    <h2  className=' py-2'>Add Product </h2>
                  <div className='flex flex-col'>
                  <label htmlFor="image">image</label>
                    <Field className='border px-2 py-1' name="image" type="text" />
                    <ErrorMessage name="image" />
                  </div>

                    <div className='flex flex-col'>
                    <label  htmlFor="title">title</label>
                    <Field className='border px-2 py-1' name="title" type="text" />
                    <ErrorMessage name="title" />
                    </div>

                    <div className='flex flex-col'>
                    <label htmlFor="category">category</label>
                    <Field className='border px-2 py-1' name="category" type="text" />
                    <ErrorMessage name="category" />
                    </div>

                    <div className='flex flex-col'>
                    <label htmlFor="price">price</label>
                    <Field className='border px-2 py-1' name="price" type="number" />
                    <ErrorMessage name="price" />
                    </div>

                    <button className='px-3 py-1 border border-main-color rounded-full  uppercase text-sm font-semibold my-5' type="submit">save</button>
                </Form>
            </Formik>

            <div className="overflow-x-auto">
                <table className="table w-full wrapper my-10">
                    <thead>
                        <tr className='w-full '>
                            <th className='text-start '>Image</th>
                            <th className='text-start'>Title</th>
                            <th className='text-start' >Category</th>
                            <th className='text-start' >Price</th>
                            <th className='text-start' >Actions</th>
                        </tr>
                    </thead>
                    <tbody >

                        {
                            products && products.map((product) => (
                                <tr key={product._id} className=' w-full'>
                                    <th className='w-[50px]'>
                                        <img src={product.image} className=' max-w-full' alt="" />
                                    </th>
                                    <td>{product.title}</td>
                                    <td>{product.category}</td>
                                    <td>{product.price}</td>
                                    <td ><button onClick={()=>deleteProduct(product._id)} className=' rounded-full  border border-main-color p-1'>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AddPage