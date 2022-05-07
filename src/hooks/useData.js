import { useContext } from "react";

import userContext from "../context/provider";

export default function useData(){
    return useContext(userContext);
}
