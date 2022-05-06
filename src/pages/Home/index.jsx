import React,  { useEffect, useState } from "react";
import api from "../../services/api";
import { Card, Button } from "./style";
import moment from "moment";
import { Link } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Input } from "@mui/material";
import FormControl from '@mui/material/FormControl';

const Home = () => {

const [data, setData] = useState([]);
const [search, setSearch] = useState("");
const [initialDate, setInitialDate] = useState([]);

useEffect(() => {
  api.get(`/articles/${search}`).then((res) => {
    const data = res.data;
    setData(data);
    setInitialDate(data);
  })
  .catch((error) => {
    console.log(error);
  })
}, [search]);

const handleChangeDate = ({target}) => {
  if(!target.value){
    setData(initialDate);
    return;
  }
  const filterDate = data.filter(({ publishedAt }) =>
    publishedAt.includes(target.value)
  );
  setData(filterDate);
}

    return (
    <div>
      <FormControl sx={{width: '8%'}}>
      <InputLabel id="range">Limit</InputLabel>
      <Select
        name="limit"
        defaultValue="10"
        id="range"
        label="Limit"
        onChange={async (event) => await setSearch('?_limit=' + event.target.value)}
      >
        <MenuItem value="10">10</MenuItem>
        <MenuItem value="25">25</MenuItem>
        <MenuItem value="50">50</MenuItem>
        <MenuItem value="100">100</MenuItem>
      </Select>
      </FormControl>

      <FormControl sx={{width: '20%', padding: 0.4}}>
      <InputLabel>Search by title:</InputLabel>
      <Input type="text" name="search" onChange={(event) => setSearch('?title_contains=' + event.target.value)} autoComplete="off" />
      </FormControl>

      <FormControl sx={{width: '20%', padding: 0.4}}>
      <InputLabel></InputLabel>
      <Input
        type="date"
        onChange={handleChangeDate}
      />
      </FormControl>

      {data.map((article) => (
      <Card key={article.id}>
        <h2>{article.title}</h2>
        <p>{moment(article.publishedAt).format('LLLL')}</p>
        <Link to={"/article/detail/" + article.id} style={{ textDecoration: 'none' }}><Button>Details</Button></Link>
      </Card>
      ))}
    </div>
  );
}

export default Home;
