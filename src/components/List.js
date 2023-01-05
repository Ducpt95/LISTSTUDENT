import React, { Component } from "react";
export default class ListStudents extends Component {
	constructor(props) {
		super();
	}
	render() {
		const students = this.props.students;
		return (
			<div className="card-body">
				<h3 className="card-title">Danh sách sinh viên</h3>
				<div className="table-responsive pt-3">
					<table className="table table-bordered">
						<thead>
							<tr>
								<th>STT</th>
								<th>Mã sinh viên</th>
								<th>Tên sinh viên</th>
								<th>Tuổi</th>
								<th>Giới tính</th>
								<th>Hành động</th>
							</tr>
						</thead>
						<tbody>
							{students.map((student, index) => (
								<tr key={student.code}>
									<td>{index + 1}</td>
									<td>{student.code}</td>
									<td>{student.name}</td>
									<td>{student.age}</td>
									<td>{student.sex ? "Nam" : "Nữ"}</td>
									<td>
										<div className="template-demo">
											<button
												type="button"
												className="btn btn-danger btn-icon-text">
												Xem
											</button>
											<button
												type="button"
												className="btn btn-warning btn-icon-text">
												Sửa
											</button>
											<button
												type="button"
												className="btn btn-success btn-icon-text">
												Xóa
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
