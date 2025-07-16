'use client';
import { Target } from "lucide-react";
import { useEffect, useState } from "react"
// import api from "@/api";
import axios from 'axios';

export default function PatientDetails(){

    const [pdetail, setPDetails]=useState([]);
    const [formdata, setFormData]=useState({Name:"",Age:"",Sex:"",Dateorbirth:"",Phonenumber:"",Address:"",
         Date:"",Issue:"", DoctorName:"",Block:"",Roomno:""});

         const fetchdata =async()=>{
            const resp = await axios.get('http://127.0.0.1:8000/pdetails/');
            setPDetails(resp.data)
         }

         const handleSubmit =async(e)=>{
            e.preventDefault();

            try{
           const res = await axios.post('http://127.0.0.1:8000/pdetails/',formdata)
            setFormData({Name:"",Age:"",Sex:"",Dateorbirth:"",Phonenumber:"",Address:"",
         Date:"",Issue:"", DoctorName:"",Block:"",Roomno:""});
         fetchdata();
            }
            catch (err){
                console.log(err,"Page is not found")
            }            
         }
         const handledelete = async()=>{
            await axios.delete(`http://127.0.0.1:8000/pdetails/${id}`)
            fetchdata();
         }
        useEffect(()=>{
    fetchdata();

},[])

    return(
        <div>

            <form action="" onSubmit={handleSubmit}>
                <div>PatientDetails</div>
                <div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" className="border-1 rounded " value={formdata.Name}  onChange={(e)=>setFormData({...formdata, Name:e.target.value})} />

                     <label htmlFor="age">Age</label>
                    <input type="age" className="border-1 rounded " value={formdata.Age} onChange={(e)=>setFormData({...formdata, Age:e.target.value})}/>

                     <label htmlFor="">Sex</label>
                    <input type="text" className="border-1 rounded " value={formdata.Sex} onChange={(e)=>setFormData({...formdata, Sex:e.target.value})} />
                </div>
                <div>
                    <label htmlFor="DATE">Dateorbirth</label>
                    <input type="DATE" className="border-1 rounded " value={formdata.Dateorbirth} onChange={(e)=>setFormData({...formdata, Dateorbirth:e.target.value})}/>

                    <label htmlFor="tel">Phonenumber</label>
                    <input type="tel" className="border-1 rounded " value={formdata.Phonenumber} onChange={(e)=>setFormData({...formdata, Phonenumber:e.target.value})} />

                    <label htmlFor="">Address</label>
                    <input type="text" className="border-1 rounded " value={formdata.Address} onChange={(e)=>setFormData({...formdata, Address:e.target.value})}/>
                </div>
                </div>
                <div>
                    <label htmlFor="DATETIME">Date</label>
                    <input type="DATETIME-LOCAL" className="border-1 rounded " value={formdata.Date}  onChange={(e)=>setFormData({...formdata, Date:e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="">Issue</label>
                    <input type="text" className="border-1 rounded " value={formdata.Issue} onChange={(e)=>setFormData({...formdata, Issue:e.target.value})} />

                    <label htmlFor="">DoctorName</label>
                    <input type="text" className="border-1 rounded" value={formdata.DoctorName}  onChange={(e)=>setFormData({...formdata, DoctorName:e.target.value})}/>

                    <label htmlFor="">Block</label>
                    <input type="text" className="border-1 rounded " value={formdata.Block} onChange={(e)=>setFormData({...formdata, Block:e.target.value})}/>

                     <label htmlFor="">Roomno</label>
                    <input type="text" className="border-1 rounded "value={formdata.Roomno}  onChange={(e)=>setFormData({...formdata, Roomno:e.target.value})}/>
                </div>
                <button type="submit" className="border-1 rounded bg-green-400 text-white cursor-pointer hover:bg-green-200 px-4 py-2">Save</button>
            </form>

            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead>
                    <tr>
                        <td>Pid</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Sex</td>
                        <td>Dateorbirth</td>
                        <td>Phonenumber</td>
                        <td>Address</td>
                        <td>Date</td>
                        <td>Issue</td>
                        <td>DoctorName</td>
                        <td>Block</td>
                        <td>Roomeno</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {pdetail.map(pd=>(
                        <tr key={pd.id}>
                            <td>{pd.Pid}</td>
                            <td>{pd.Name}</td>
                            <td>{pd.Age}</td>
                            <td>{pd.Sex}</td>
                            <td>{pd.Dateorbirth}</td>
                            <td>{pd.Phonenumber}</td>
                            <td>{pd.Address}</td>
                            <td>{pd.Date}</td>
                            <td>{pd.Issue}</td>
                            <td>{pd.DoctorName}</td>
                            <td>{pd.Block}</td>
                            <td>{pd.Roomno}</td>
                            <td> <button className="bg-red-700 text-white border-2 px-4 py-2 rounded cursor-pointer "  onClick={()=>handledelete(pdetail.Pid)}>Delete</button></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>


        </div>
    )
}
