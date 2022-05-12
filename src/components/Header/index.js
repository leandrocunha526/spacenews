import React, { useState } from "react";
import "./style.css";
import useData from "../../hooks/useData";
import api from "../../services/api";
import { AiFillHome } from "react-icons/ai";

export default function Header(){
    const {setData, date, setDate, title, setTitle} = useData();

    const [message, setMessage] = useState("");

    const input = (e) => {
        setTitle({...title, [e.target.name] : e.target.value});
    }

    const inputDate = (e) => {
        setDate({...date, [e.target.name] : e.target.value});
    }

    const filterTitle = async (e) => {
        e.preventDefault();
        let param = "articles?_limit=100";

        let param1 = null;

        if(title.title){
            param1 = `&title_contains=${title.title}`;
        }
        else {
            setMessage("Please, insert a title to search");
        }
       try{
            let response = await api.get(param + param1);
            const { data } = response;
            setTitle({
                title: "",
            });
            setData(data);
        }
        catch(error){
            console.log(error);
        }
    }

    const filterDate = async(e) => {
        e.preventDefault();
        let param = "articles?_limit=100";

        let param1 = null;

        if (date.initialDate && date.finalDate){
            param1 = `&publishedAt_gte=${date.initialDate}&publishedAt_lte=${date.finalDate}`;
        }
        else {
            setMessage("Please, insert a initial and final date to search");
        }

        try{
            let response = await api.get(param + param1);
            const { data } = response;
            setDate({
                initialDate: "",
                finalDate: "",
            });
            setData(data);
        }
        catch(error){
            console.log(error);
        }
    }

    return (
     <div className="header">
        <a href="/"><AiFillHome/></a>
        <div className="form">
        <form onSubmit={filterTitle}>
        <input
                type="text"
                name="title"
                placeholder="Search by title"
                onChange={input}
                value={title.title}
        />
        <button type="submit" onChange={filterTitle}>Search</button>
        </form>

        <form onSubmit={filterDate}>
        <label>Initial date:</label>
        <input
                type="date"
                name="initialDate"
                value={date.initialDate}
                onChange={inputDate}
        />
        <label>Final date:</label>
        <input
                type="date"
                name="finalDate"
                value={date.finalDate}
                onChange={inputDate}
        />
        <button type="submit" onClick={filterDate}>Search</button>
        </form>
        </div>
            <span>{message}</span>
        </div>
    )
}
