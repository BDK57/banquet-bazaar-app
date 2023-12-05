'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { ToastError, ToastSuccess } from '../toasters/taoster'
const AddHall = (props) => {
    
    const [name, setname] = useState('')
    const [Description, setDescription] = useState('')
    const [Location, setLocation] = useState('')
    const [Price, setPrice] = useState('')
    const [coverimage, SetImage] = useState('')
    const [Capacity, setCapacity] = useState('')
    const[imageurl,setimagurl] = useState();

    const handleFile = (e) => {
        console.log(e)
        const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
        let file = e.target.files[0];
        console.log(file)
        SetImage(file)
        uploadImage(file)
    };

    const uploadImage = async (photo) => {
        console.log(photo)
        const data = new FormData()
        data.append('file', photo)
        data.append('upload_preset', 'wpquplfl')
        data.append("cloud_name", "dvfpc6w7x")
        await fetch("https://api.cloudinary.com/v1_1/dvfpc6w7x/upload", {
            method: "post",
            body: data
        }).then(res => res.json()).
            then(data => {
                setimagurl(data?.url)
            }).catch(err => {
                console.log("An Error Occured While Uploading")
            })
    }


    const AddHall = async (e) => {
        e.preventDefault();
        const data = {
            name: name,
            Description:Description, 
            vendorid:'65649d7c1b39d96755a19d63',
            capacity:Capacity,
            Price:Price,
            coverimage:imageurl,
            location:Location
        }

        

        const res = await axios.post('/api/Vendor/Hall/Add',data)

        if(res.data.status == 200){
            ToastSuccess("Hall Has Been Added")
        }
        else{
            ToastError("Hall has Not Been Added")
        }
    }



    return (
        <form class="mx-auto" action={'#'}>
            <div class="mb-5">
                <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hall Name</label>
                <input onChange={(e) => setname(e.target.value)} type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div class="mb-5">
                <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <input onChange={(e) => setDescription(e.target.value)} type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div class="mb-5">
                <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                <input onChange={(e) => setLocation(e.target.value)} type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div class="m-4">
                <span className="flex justify-center items-center text-[12px] mb-1 text-red-500">Add A coverImage</span>
                <div class="flex items-center justify-center w-full">
                    <label class="flex cursor-pointer flex-col w-full h-32 border-2 rounded-md border-dashed hover:bg-gray-100 hover:border-gray-300">
                        <div class="flex flex-col items-center justify-center pt-7">
                            {coverimage !== '' ? <>

                                <Image
                                    alt="not found"
                                    width={250}
                                    height={250}
                                    src={URL.createObjectURL(coverimage)}
                                />
                                <br />
                            </>
                                : (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                                            fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                            Select a photo</p>
                                    </>
                                )
                            }

                        </div>

                        <input type="file" class="opacity-0" name='file' onChange={(event) => { handleFile(event) }} />
                    </label>
                </div>
            </div>
            <div class="mb-5">
                <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Capacity</label>
                <input onChange={(e) => setCapacity(e.target.value)} type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div class="mb-5">
                <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                <input onChange={(e) => setPrice(e.target.value)} type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button type="submit" onClick={AddHall} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </div>
        </form>
    )
}

export default AddHall