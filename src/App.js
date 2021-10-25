
import './App.css';
import React, { useState, useEffect,useMemo } from "react";

import axios from 'axios';
import Table from "./Table";

 function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://api.tvmaze.com/search/shows?q=snow").then(res => {
        const result = res.data;
        setData(result);
      })
      
   
  }, []);


   
 
  const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: "TV Show",
        // First group columns
        columns: [
          {
            Header: "Name",
            accessor: "show.name"
          },
          {
            Header: "Type",
            accessor: "show.type"
          }
        ]
      },
      {
        // Second group - Details
        Header: "Details",
        // Second group columns
        columns: [
          {
            Header: "Language",
            accessor: "show.language"
          },
          {
            Header: "Genre(s)",
            accessor: "show.genres"
          },
          {
            Header: "Runtime",
            accessor: "show.runtime"
          },
          {
            Header: "Status",
            accessor: "show.status"
          }
        ]
      }
    ],
    []
  );
 
  
 
   return (
    <div className="App"> <Table columns={columns} data={data} /></div>
   )
 }
 export default App;