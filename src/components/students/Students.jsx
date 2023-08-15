import axios from "axios";
import { useEffect, useState } from "react";
import StudentName from "../studentsName/StudentName";
import  './students.css'

const Students = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        loadUser();
    },[])
    const loadUser = async()=>{
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
        setData(data)
        
   }

    return (
        <>
        
            {
            data.map((item)=>(
                <StudentName item={item} key={item.id}/>
            ))
        }
       
        
        </>
    );
};

export default Students;