'use client';
import { useEffect, useState } from "react"
import axios from 'axios';
export default function DoctorList(){

    const [form, setForm]=useState({DoctorName:"",specialist:"",Block:"",Roomno:""});
    const [data,setData]=useState([]);

    const fetch = async(e)=>{

        e.preventDefault()
            const resp=await axios.get('http://127.0.0.1:8000/doctor/')
            setData();  
    }

    const handlesubmit = async (e)=>{
        e.preventDefault();

    try{
        const res = await axios.post('http://127.0.0.1:8000/doctor/',form)
        setData({DoctorName:"",specialist:"",Block:"",Roomno:""})
        fetchdata();
    }

    catch(err){
        console.log(err)
    }
 }
 useEffect(()=>{
    fetch();
 },[])

return(
    <div>

        <form action="" onSubmit={handlesubmit}>
            <div>DoctorsList</div>
            <div>
                <label htmlFor="">DoctorName</label>
                <input type="text" className="border-1 rounded " value={form.DoctorName} onChange={(e)=>setForm({...form,DoctorName:e.target.value})} />
                 <label htmlFor="">specialist</label>
                <input type="text" className="border-1 rounded " value={form.specialist} onChange={(e)=>setForm({...form,specialist:e.target.value})} />
                 <label htmlFor="">Block</label>
                <input type="text" className="border-1 rounded " value={form.Block} onChange={(e)=>setForm({...form,Block:e.target.value})} />
                 <label htmlFor="">Roomno</label>
                <input type="text" className="border-1 rounded " value={form.Roomno} onChange={(e)=>setForm({...form,Roomno:e.target.value})} />
            </div>
            <button type="submit" className="border-1 rounded bg-green-400 text-white cursor-pointer hover:bg-green-200 px-4 py-2">Save</button>
        </form>

        <table>
            <thead>
                <tr>
                    <td>Did</td>
                    <td>DoctorName</td>
                    <td>specialist</td>
                    <td>Block</td>
                    <td>Roomno</td>
                </tr>
            </thead>
            <tbody>
                {data.map(datas=>(
                    <tr key={datas.id}>
                        <td>{datas.Did}</td>
                        <td>{datas.DoctorName}</td>
                        <td>{datas.specialist}</td>
                        <td>{datas.Block}</td>
                        <td>{datas.Roomno}</td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    </div>
)}