import {lazy} from 'react';


const Charts=lazy(()=>import(/*webpackChunkName: 'Charts' */ "./Charts"))
const Table=lazy(()=>import(/*webpackChunkName: 'Charts' */ "./Tables"))
const BodyContent=lazy(()=>import(/*webpackChunkName: 'Charts' */ "./BodyContent"))
const StaticNavigation=lazy(()=>import(/*webpackChunkName: 'Charts' */ "./StaticNavigation"))
const Material=lazy(()=>import(/*webpackChunkName: 'Charts' */ "../Tables/Material/Table"))
const Grid=lazy(()=>import(/*webpackChunkName: 'Charts' */ "../Tables/Grid/Table"))


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
    "title":"Materil",
    "components":Material,
    "route":"/material"
},
{
    "id":"6",
    "title":"Grid",
    "components":Grid,
    "route":"/grid"
},
]
export default components;