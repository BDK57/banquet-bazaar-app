import axios from "axios";


export const LoginSignUpGoogle = () => async (dispatch) => {
    console.log("hello ia am here")
    const res = await axios.get('/api/Vendor/Hall');
    if (res.data) {
        // setfilterHalls(res.data.data)
        dispatch((res.data.data))
        return res.data.data
    }
};
  