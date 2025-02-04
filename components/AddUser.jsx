import {useState} from "react";
import axios from "axios";

'use-client'

function AddUser() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    return (
        <div className={'w-400 border border-2 border-amber-50 gap-2 p-2'}>
            <input placeholder={'name'} type={'text'} onChange={(e) => {
                setName(e.target.value)
            }}/>
            <input placeholder={'email'} type={'text'} onChange={(e) => {
                setEmail(e.target.value)
            }}/>

            <button className={'w-100 bg-gray-400'} onClick={() => {
                async function handleClick(){
                    try {
                        const res = await axios.post("http://localhost:3000/api/addUser",{
                            name,
                            email
                        })
                        console.log(res)
                    }catch (e){
                        console.log(`Some error {e} occured please try again`)
                    }
                }
                handleClick()
            }
            }>Submit</button>
        </div>
    );
}

export default AddUser;