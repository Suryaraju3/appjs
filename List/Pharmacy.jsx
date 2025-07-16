import { useEffect, useState } from "react";
import api from "@/api";

export default function Pharmacy(){

    const [form,setForm]=useState({ DoctorName:"", Name:"",Age:"",Sex:"",Description:"",Qty:"",Total:""});

    const [data,setData]=useState([]);

    const fetchdata =async()=>{
            const resp = await axios.get("http://127.0.0.1:8000/phcy/");
            setData(resp.data)
         }
     const handleSubmit =async(e)=>{
            e.preventDefault();
            try{
           const res = await api.axios.post('http://127.0.0.1:8000/phcy/',formdata)
            setForm({ DoctorName:"", Name:"",Age:"",Sex:"",Description:"",Qty:"",Total:""});
        fetchdata();
            }
            catch (err){
                console.log(err,"Page is not found")
            }            
         }
          
         useEffect(()=>{
             fetchdata();
         
         },[])
    

    return(
        <div>
            <form action="" onSubmit={handleSubmit} className=" inline-block">
                <div className="flex flex-col ">
                <label htmlFor="">DoctorName</label>
                <input type="text" className="border-1 rounded" value={form.DoctorName} onChange={(e)=> setForm({...form,DoctorName:e.target.value})} />
                <label htmlFor="">Name</label>
                <input type="text" className="border-1 rounded"  value={form.Name} onChange={(e)=> setForm({...form,Name:e.target.value})} />
                <label htmlFor="">Age</label>
                <input type="text" className="border-1 rounded"  value={form.Age} onChange={(e)=> setForm({...form,Age:e.target.value})} />
                <label htmlFor="">Sex</label>
                <input type="text" className="border-1 rounded"  value={form.Sex} onChange={(e)=> setForm({...form,Sex:e.target.value})} />
                <label htmlFor="">Description</label>
                <input type="text" className="border-1 rounded"   value={form.Description} onChange={(e)=> setForm({...form,Description:e.target.value})} />
                <label htmlFor="">Qty</label>
                <input type="text" className="border-1 rounded"  value={form.Qty} onChange={(e)=> setForm({...form,Qty:e.target.value})}/>
                <label htmlFor="">Total</label>
                <input type="text" className="border-1 rounded" value={form.Total} onChange={(e)=> setForm({...form,Total:e.target.value})} />
                <div><button type="submit" className="border-1 rounded bg-green-600 text-white px-4 py-2">Save</button></div>
                </div>
            </form>


            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead>
                    <tr>
                        <td>pharmacyid</td>
                        <td>DotorName</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Sex</td>
                        <td>Description</td>
                        <td>Qty</td>
                        <td>Total</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map(datas=>(
                        <tr key={datas.id}>
                            <td>{pd.pharmacyid}</td>
                            <td>{pd.DoctorName}</td>
                            <td>{pd.Name}</td>
                            <td>{pd.Age}</td>
                            <td>{pd.Sex}</td>
                            <td>{pd.Description}</td>
                            <td>{pd.Qty}</td>
                            <td>{pd.Total}</td>
                            </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}