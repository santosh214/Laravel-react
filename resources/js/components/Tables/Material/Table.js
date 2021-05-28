import MaterialTable from 'material-table'
import react from 'react'
import {useState,useEffect} from 'react'
import React from 'react'

export default function Table() {

    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => setData(json))
    })
      const columns = [
        { title: "Id", field: "id"},
        { title: "Name", field: "name"},
        { title: "Username", field: "username"},
        { title: "Email", field: "email", },
      ];
     const actions=[
        {
          icon: 'save',
          tooltip: 'Save User',
          onClick: (event, rowData) => alert("You saved " + rowData.name)
        }
      ]

    return(
        <div className="sb-nav-fixed">
            <div id="layoutSidenav">
            <div id="layoutSidenav_content">

            <MaterialTable title="Material Table"
            data={data}
            columns={columns}
            options={{
                search:true,
                filtering:true,
                paging:true,
                exportButton:true
            }}
            actions={actions} />
        </div>
        </div>
        </div>

    )
}
