import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";





export const getItemThunk = createAsyncThunk("api/getdata",async()=>{
    const res = await axios.get("http://localhost:5001/data")
    return res.data
})

export const postItemThunk = createAsyncThunk("api/postdata",async(data)=>{
    const res = await axios.post("http://localhost:5001/data",data)
    return res.data
})

export const deleteItemThunk = createAsyncThunk("api/deletedata",async(id)=>{
     axios.delete(`http://localhost:5001/data/${id}`)
    return id
})








export const getLikeItemThunk = createAsyncThunk("api/getlike",async()=>{
    const res = await axios.get("http://localhost:5001/like")
    return res.data
})

export const postLikeItemThunk = createAsyncThunk("api/postlike",async(data)=>{
    await axios.get("http://localhost:5001/like")
    .then((res)=>{
        const likes = res.data.find(item=> item.name === data.name)

        if (likes) {
            alert('sebetde var')
        } else {
            axios.post("http://localhost:5001/like",data)
        }
    })
})

export const deleteLikeItemThunk = createAsyncThunk("api/deletelike",async(id)=>{
     axios.delete(`http://localhost:5001/like/${id}`)
    return id
})



export const ItemSlice = createSlice({
name:'item',
initialState:{},
reducers:{},
extraReducers:(builder=>{
    builder
    .addCase(getItemThunk.fulfilled,(state,action)=>{
        state.item = action.payload
    })
    .addCase(getLikeItemThunk.fulfilled,(state,action)=>{
        state.item = action.payload
    })
})
})

export default ItemSlice.reducer