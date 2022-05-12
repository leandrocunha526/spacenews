import { useState } from "react";

import { useNavigate } from "react-router-dom";

export function useUserData(){
    const navigate = useNavigate();

    const [data, setData] = useState([]);

    const [openSlide, setOpenSlide] = useState(false);

    const [image, setImage] = useState(0);

    const [date, setDate] = useState({
        initialDate: "",
        finalDate: "",
    });

    const [title, setTitle] = useState({
        title: "",
    });

    return {
        data,
        date,
        image,
        navigate,
        openSlide,
        title,
        setData,
        setDate,
        setImage,
        setOpenSlide,
        setTitle,
    }
}
