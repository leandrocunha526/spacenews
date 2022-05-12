import React, { useState } from "react";
import "./style.css";
import useData from "../../hooks/useData";
import api from "../../services/api";
import { AiFillHome } from "react-icons/ai"

export default function Header(){
    const {setData, form, setForm} = useData();

    const [message, setMessage] = useState("");

    const input = (e) => {
        setForm({...form, [e.target.name] : e.target.value});
    }

    const filterTitle = async (e) => {
        e.preventDefault();
        let param = "articles?_limit=100";

        let param1 = null;

        if(form.title){
            param1 = `&title_contains=${form.title}`;
        }
        else {
            setMessage("Please, insert a title to search");
        }
       try{
            let response = await api.get(param + param1);
            const { data } = response;
            setForm({
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

        if (form.initialDate && form.finalDate){
            param1 = `&publishedAt_gte=${form.initialDate}&publishedAt_lte=${form.finalDate}`;
        }
        else {
            setMessage("Please, insert a initial and final date to search");
        }

        try{
            let response = await api.get(param + param1);
            const { data } = response;
            setForm({
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
                value={form.title}
        />
        <button type="submit" onChange={filterTitle}>Search</button>
        </form>

        <form onSubmit={filterDate}>
        <label>Initial date:</label>
        <input
                type="date"
                name="initialDate"
                value={form.initialDate}
                onChange={input}
        />
        <label>Final date:</label>
        <input
                type="date"
                name="finalDate"
                value={form.finalDate}
                onChange={input}
        />
        <button type="submit" onClick={filterDate}>Search</button>
        </form>
        </div>
            <span>{message}</span>
        </div>
    )
}
