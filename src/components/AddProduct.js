const AddProduct = () => {
  return (
    <div className="myContainer">
      <h3>Add Product</h3>
      <table>
        <tr>
          <td>Name</td>
          <td>:</td>
          <td>
            <input
              type="text"
              placeholder="Name"
              className="form-control"
            ></input>
          </td>
        </tr>
        <tr>
          <td>Price</td>
          <td>:</td>
          <td>
            <input
              type="text"
              placeholder="Price"
              className="form-control"
            ></input>
          </td>
        </tr>
        <tr>
          <td>Description</td>
          <td>:</td>
          <td>
            <textarea
              placeholder="Description"
              className="form-control"
              rows={5}
              cols={40}
            ></textarea>
          </td>
        </tr>
        <tr>
          <td>Image</td>
          <td>:</td>
          <td>
            <input
              type="file"
              placeholder="Image"
              className="form-control"
            ></input>
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <button className="btn btn-primary">Save</button>
          </td>
        </tr>
      </table>
    </div>
  );
};
export default AddProduct;
