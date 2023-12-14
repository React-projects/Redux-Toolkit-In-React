import { createSlice , createAsyncThunk, isFulfilled } from "@reduxjs/toolkit";

 export const fetchProducts= createAsyncThunk('productslice/fetchProducts', async()=>{
    const res =await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);
    return data;
})


export const productslice = createSlice({
  initialState: [
    {
      id: 1,
      title: "Product1",
    },
  ],
  name: "productslice",
  reducers: {
    addProduct: (state, action) => {
      console.log(action);
      state.push(action.payload);
    },
  },
  extraReducers:(builder) => {
    builder.addCase(fetchProducts.fulfilled,(state,action)=>{
      state=action.payload;
      console.log(action)

    })
  }
   
  
});
export const { addProduct } = productslice.actions;
export default productslice.reducer;
