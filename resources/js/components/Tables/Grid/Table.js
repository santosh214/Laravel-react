import { Grid } from 'gridjs-react';
import "gridjs/dist/theme/mermaid.css";
import React from 'react'

export default function Table() {
  
  const data=[    ['1','John', 'john@exampe.com'],
  ['2','Mike', 'mike@gmail.com'],
  ['3','ABHAY', 'abhay@exampe.com'],
  ['4','pawan', 'dawan@gmail.com']
]
  
    return (
        <div className="sb-nav-fixed">
            <div id="layoutSidenav">
            <div id="layoutSidenav_content">
            <Grid
  data={data

  }
  columns={['id','Name', 'Email']}
  search={true}
  sort={true}
  pagination={{
    enabled: true,
    limit: 15,
  }}
/>
        </div>
        </div>
        </div>
    )
}
