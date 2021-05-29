import { ReactTabulator } from 'react-tabulator'
// import 'react-tabulator/lib/css/tabulator.min.css'; // theme
import 'react-tabulator/css/materialize/tabulator_materialize.css'
import React from 'react'

export default function Table() {
    const columns = [
        { title: "Name", field: "name", width: 150,headerFilter:true },
        { title: "Age", field: "age", hozAlign: "left", formatter: "progress" ,},
        { title: "Favourite Color", field: "col" ,headerFilter:true},
        { title: "Date Of Birth", field: "dob", hozAlign: "center" ,},
        { title: "Rating", field: "rating", hozAlign: "center", formatter: "star" ,},
        { title: "Passed?", field: "passed", hozAlign: "center", formatter: "tickCross" ,}
      ];
      const data = [
        {id:1, name:"Oli Bob", age:"12", col:"red", dob:""},
        {id:2, name:"Mary May", age:"1", col:"blue", dob:"14/05/1982"},
        {id:3, name:"Christine Lobowski", age:"42", col:"green", dob:"22/05/1982"},
        {id:4, name:"Brendon Philips", age:"125", col:"orange", dob:"01/08/1980"},
        {id:5, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999"},
        {id:5, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999"},
        {id:5, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999"},
        {id:5, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999"},
        {id:5, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999"},
        {id:5, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999"},
        {id:5, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999"},
      ];
    return (
      <div className="sb-nav-fixed">
      <div id="layoutSidenav">
      <div id="layoutSidenav_content">

            <ReactTabulator
 data={data}
 columns={columns}
 tooltips={true}
 layout={"fitColumns"}
 options={{ movableColumns: true, movableRows: true ,pagination:"local", paginationSize:7}}
 />
        </div>
        </div>
        </div>
    )
}
