import React, { Component } from "react";
export default class Control extends Component {
	constructor(props){
		super();
		this.state=({
			searchData:""
		})
	}
	handleChange=(event)=>{
		let value=event.target.value;
		this.setState({searchData:value});
	}
	
	render() {
		return (
			<div className="card-header">
				<div className="row">
					<div className="col-3">
						<button onClick={()=>this.props.onOpen(true)} type="button" className="btn btn-primary btn-icon-text">
							Thêm mới sinh viên
						</button>
					</div>
					<div className="col-6">
						<form className="search-form" action="#">
							<i className="icon-search" />
							<input
							    onChange={this.handleChange}
								type="search"
								className="form-control"
								placeholder="Search Here"
								title="Search here"
							/>
							<button className="btn btn-primary btn-icon-text"
							onClick={()=>this.props.handleData(this.state.searchData)}>
								Tìm kiếm
							</button>
						</form>
					</div>
					<div className="col-3 d-flex align-items-center">
						<select className="form-control">
							<option value=""></option>
							<option value="">Tên tăng</option>
							<option value="">Tên giảm dần</option>
							<option value="">Tuổi tăng dần</option>
							<option value="">Tuổi giảm dần</option>
						</select>
					</div>
				</div>
			</div>
		);
	}
}
