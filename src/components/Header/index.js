import "./style.css";
import useData from "../../hooks/useData";
import api from "../../services/api";
import { AiFillHome } from "react-icons/ai"

export default function Header(){
    const {setData, form, setForm} = useData();

    const inputTitle = (e) => {
        setForm({...form, [e.target.name] : e.target.value});
    }
    const filter = async (e) => {
            let param = "articles?_limit=100"
            e.preventDefault();

        if(form.title) {
                param = `?title_contains=${form.title}`;
        }

        try{
            let response = await api.get(`/articles/${param}`);
            const { data } = response;
            setForm({
                initialDate: "",
                finalDate: "",
                title: "",
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
            <input
                type="text"
                name="title"
                placeholder="Search by title"
                onChange={inputTitle}
                value={form.title}
            />
            <label>Initial date:</label>
            <input type="date" />
            <label>Final date:</label>
            <input type="date" />
            <button type="button" onClick={filter}>Search</button>
        </div>
        </div>
    )
}
