import React, { Component } from 'react'
import ReactDOM from "react-dom";
import Tabulator from "tabulator-tables"; //import Tabulator library
import "tabulator-tables/dist/css/tabulator.min.css"; //import Tabulator stylesheet
import Multiselect from 'multiselect-react-dropdown';

export default class Table extends Component {
  constructor() {
    super();
    this.state = {
      columnTitle: '',
      columnField: '',
      colorEditor: '',
      hideColumn: '',
      field: 'name',
      type:'=',
      value:''
    }


  }
  el = React.createRef();
  tabulator = null; //variable to hold your table
  tableData = [
    { id: 1, name: "Oli Bob", progress: 12, gender: "male", rating: 1, col: "red", dob: "19/02/1984", car: 1 },
    { id: 2, name: "Mary May", progress: 1, gender: "female", rating: 2, col: "blue", dob: "14/05/1982", car: true },
    { id: 3, name: "Christine Lobowski", progress: 42, gender: "female", rating: 0, col: "green", dob: "22/05/1982", car: "true" },
    { id: 4, name: "Brendon Philips", progress: 100, gender: "male", rating: 1, col: "orange", dob: "01/08/1980" },
    { id: 5, name: "Margret Marmajuke", progress: 16, gender: "female", rating: 5, col: "yellow", dob: "31/01/1999" },
    { id: 6, name: "Frank Harbours", progress: 38, gender: "male", rating: 4, col: "red", dob: "12/05/1966", car: 1 },
    { id: 7, name: "Christine Lobowski", progress: 42, gender: "female", rating: 0, col: "green", dob: "22/05/1982", car: "true" },
    { id: 8, name: "Mary May", progress: 1, gender: "female", rating: 2, col: "blue", dob: "14/05/1982", car: true },
    { id: 9, name: "Margret Marmajuke", progress: 16, gender: "female", rating: 5, col: "yellow", dob: "31/01/1999" },
    { id: 10, name: "Mary May", progress: 1, gender: "female", rating: 2, col: "blue", dob: "14/05/1982", car: true },

  ]; //data for table to display
  columns = [
    { title: "Name", field: "name", editor: "input" },
    { title: "Task Progress", field: "progress", hozAlign: "left", formatter: "progress", editor: true },
    { title: "Gender", field: "gender", width: 95, editor: "select", editorParams: { values: ["male", "female"] } },
    { title: "Rating", field: "rating", formatter: "star", hozAlign: "center", width: 100, editor: true },
    { title: "Color", field: "col", width: 130, editor: true, },
    { title: "Date Of Birth", field: "dob", width: 130, sorter: "date", hozAlign: "center" },
    { title: "Driver", field: "car", width: 90, hozAlign: "center", formatter: "tickCross", sorter: "boolean", editor: true },
  ]
  componentDidMount() {

    //instantiate Tabulator when element is mounted
    this.tabulator = new Tabulator(this.el, {
      data: this.tableData, //link data to table
      reactiveData: true, //enable data reactivity
      columns: this.columns, //define table columns
      paginationSize: 10,
      pagination: "local",
      layout: "fitColumns",
      movableColumns: true,
      movableRows: true,
    });

  }
  componentDidUpdate(){
  }
  hideColumn = (ev) => {
    console.log('val', ev.target.value)

  }
  addColumn = () => {
    if (this.state.columnField === '' || this.state.columnTitle === '') {
      return alert("plz fill value first")
    }
    this.tabulator.addColumn({ title: this.state.columnTitle, field: this.state.columnField }, true, "name");
  }

  addRow = () => {
    this.tabulator.addRow({}, true);
  }
  handleField=(ev)=>{
this.setState({field:ev.target.value})
console.log("ev",this.state.field)
this.updateFilter()
  }
  handleType=(ev)=>{
this.setState({type:ev.target.value})
console.log("ev",this.state.type)
this.updateFilter()

  }
  handleValue=(ev)=>{
    this.setState({value:ev.target.value})
    console.log("ev",this.state.value)
    this.updateFilter()

  }
componentDidUpdate(){
  this.updateFilter()
}
updateFilter=()=>{

this.tabulator.setFilter(this.state.field,this.state.type,this.state.value)
}

  
  //add table holder element to DOM
  render() {
    return (
      <div className="sb-nav-fixed">
        <div id="layoutSidenav">
          <div id="layoutSidenav_content">
            <div className="container-fluid">



              <div>


                <label>
                  Pick your filter-field:
                  <select value={this.state.field} onChange={this.handleField}>
                    <option value="name">Name</option>
                    <option value="progress">Progress</option>
                    <option value="gender">Gender</option>
                    <option value="rating">Rating</option>
                    <option value="col">Favourite Colour</option>
                    <option value="dob">Date Of Birth</option>
                    <option value="car">Drives</option>
                    <option value="function">Drives & Rating  3 </option>
                  </select>
                </label>
                <select value={this.state.type} onChange={this.handleType}>
                  <option value="=">= </option>
                  <option value="<" >{'<'} </option>
                  <option value="<=" >{"<="}</option>
                  <option value=">" >{">"}</option>
                  <option value=">=">{">="}</option>
                  <option value="!=">{"!="}</option>
                  <option value="like">like</option>
                </select>

                <input id="filter-value" value={this.state.value} onChange={this.handleValue} type="text" placeholder="value to filter" />
              </div>


              {/* <!-- Button trigger modal --> */}
              <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Add Column
              </button>

              {/* <!-- Modal --> */}
              <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="form-group">
                        <label>Column Title</label>
                        <input type="text" id="columnTitle" value={this.state.columnTitle} onChange={(e) => { this.setState({ columnTitle: e.target.value }) }} className="form-control"></input>
                      </div>
                      <div className="form-group">
                        <label>Column Field</label>
                        <input type="text" id="columnField" value={this.state.columnField} onChange={(e) => this.setState({ columnField: e.target.value })} className="form-control"></input>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary" onClick={this.addColumn}>Submit</button>
                    </div>
                  </div>
                </div>
              </div>
              &nbsp;

              {/* //ADD ROW */}
              <button type="button" className="btn btn-primary" onClick={this.addRow}>
                Add row
              </button>


              <div className="row">
                <div className="col">
                  <div ref={el => (this.el = el)} />
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    );
  }
}
