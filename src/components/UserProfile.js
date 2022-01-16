const UserProfile = () => {
	return (<div className="myContainer">
    <h3>User Profile</h3>
	<table>
		<tr>
			<td>Name</td>
			<td>:</td>
			<td>
				<input type="text" placeholder="Name" className="form-control"></input>
			</td>
		</tr>
		<tr>
			<td>Password</td>
			<td>:</td>
			<td>
				<input type="text" placeholder="Password" className="form-control"></input>
			</td>
		</tr>
		
		<tr>
			<td>Re-type Password</td>
			<td>:</td>
			<td>
				<input type="text" placeholder="Re-type Password" className="form-control"></input>
			</td>
		</tr>
		<tr>
			<td>Breif Introdcution</td>
			<td>:</td>
			<td>
				<textarea  placeholder="Breif Introdcution" className="form-control" rows={5} cols={40}></textarea>
			</td>
		</tr>
		<tr>
			<td>Profile Pictute</td>
			<td>:</td>
			<td>
				 <input type="file" placeholder="Image" className="form-control"></input>
			</td>
		</tr>
		<tr>
			<td colspan="3"><button className="btn btn-primary">Save</button></td>
			
		</tr>
	</table>
    
  </div>)
}
export default UserProfile;