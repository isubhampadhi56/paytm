import { Appbar } from "../components/Appbar"
import { Table } from "../components/Table"
import { useEffect, useState } from "react";
import axios from "axios";
export const Transactions = () => {
    const [transactions,setTransactions] = useState([]);
    useEffect(()=>{
    (async () =>{
        const {data} = await axios.get("http://localhost:3000/api/v1/account/transactions",{
            headers: {'Authorization': localStorage.getItem('Authorization')}
        });
        setTransactions(data.transactions);
    })()}
    ,[]);
    return <div>
        <Appbar />
        <div className="m-8">
            <div className="font-bold mt-6 text-lg">
                Transactions
            </div>
            <Table tableHeader={['ID','From','To','Amount','Timestamp']} tableRows={transactions}/>
        </div>
    </div>
}