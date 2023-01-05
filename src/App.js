import "./App.css";
import Control from "./components/control";
import ListStudents from "./components/List";
import Form from "./components/Form";
import data from "./db";
import { Component } from "react";

class App extends Component {
	constructor() {
		super();
    this.state = {
      isShown:false, 
	  dataSearch: []
    }
	}
  handleDislayForm=(value)=>{
      this.setState({isShown:value})
  }
  handleData=(searchData)=>{
	 let students =[]
	 data.forEach((student)=>{
		if(student.name.toUpperCase().includes(searchData.toUpperCase())){
			students.push(student)
		}
	 })
	 this.setState({
		dataSearch:students
	 })
  }

	render() {
		return (
			<div class="row">
				<div class="col-lg-7 grid-margin stretch-card">
					<div class="card">
						{/* <!-- START CONTROL --> */}
						<Control handleData={this.handleData} onOpen={this.handleDislayForm} />
						{/* <!-- END CONTROL --> */}
						{/* <!-- START LIST STUDENT --> */}
						<ListStudents students={this.state.dataSearch.length>0 ? this.state.dataSearch : data} isTrue={true} />
						{/* <!-- END LIST STUDENT --> */}
					</div>
				</div>
				{/* <!-- START FORM SINH VIEN --> */}
				{this.state.isShown && <Form onClose={this.handleDislayForm} />}
				{/* <!-- END FORM SINH VIÊN --> */}
			</div>
		);
	}
}

export default App;
