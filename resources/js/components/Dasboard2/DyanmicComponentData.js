import {lazy} from 'react';


const Charts=lazy(()=>import(/*webpackChunkName: 'Charts' */ "./Charts"))
const Table=lazy(()=>import(/*webpackChunkName: 'Charts' */ "./Tables"))
const BodyContent=lazy(()=>import(/*webpackChunkName: 'Charts' */ "./BodyContent"))
const StaticNavigation=lazy(()=>import(/*webpackChunkName: 'Charts' */ "./StaticNavigation"))
const Material=lazy(()=>import(/*webpackChunkName: 'Charts' */ "../Tables/Material/Table"))
const Grid=lazy(()=>import(/*webpackChunkName: 'Charts' */ "../Tables/Grid/Table"))
const Tabulator=lazy(()=>import(/*webpackChunkName: 'Charts' */ "../Tables/Tabulator/Table"))
const ReactTable=lazy(()=>import(/*webpackChunkName: 'Charts' */ "../Tables/MaterialUi/Table"))


let components=[
    {
    "id":"1",
        "title":"Home",
    "components":BodyContent,
    "route":"/home"
},
{
    "id":"2",
    "title":"Charts",
    "components":Charts,
    "route":"/charts"
},
{
    "id":"3",
    "title":"Tables",
    "components":Table,
    "route":"/tables"
},
{
    "id":"4",
    "title":"StaticNavigation",
    "components":StaticNavigation,
    "route":"/static-content"
},
{
    "id":"5",
    "title":"Material",
    "components":Material,
    "route":"/material"
},
{
    "id":"6",
    "title":"Grid",
    "components":Grid,
    "route":"/grid"
},
{
    "id":"7",
    "title":"Tabulator",
    "components":Tabulator,
    "route":"/tabulator"
},
{
    "id":"8",
    "title":"React-table",
    "components":ReactTable,
    "route":"/react-table"
},

]
export default components;