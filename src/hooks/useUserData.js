import { useState } from "react";

import { useNavigate } from "react-router-dom";

export function useUserData(){
    const navigate = useNavigate();

    const [data, setData] = useState([]);

    const [openSlide, setOpenSlide] = useState(false);

    const [image, setImage] = useState(0);

    const [form, setForm] = useState({
        initialDate: "",
        finalDate: "",
        title: "",
    });

    return {
        data,
        form,
        image,
        navigate,
        openSlide,
        setData,
        setForm,
        setImage,
        setOpenSlide
    }
}
