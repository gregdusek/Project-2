const React = require('react');
const Layout = require('./Components/Layout.jsx');

class Edit extends React.Component {
  render() {
    const {brand, model, img, price, qty, _id} = this.props.guitar;
        return (
         <Layout title={`Edit ${brand.toUpperCase()} Page`}
         stylesheet="/style.css">
            <form action={`/guitars/${_id}?_method=PUT`} method="POST">
              <h2>
                <ul>
                Brand: <input type="text" name="name" defaultValue={brand} /><br/>
                Model: <input type="text" name="model" defaultValue={model} /><br/>
                Image: <input type="text" name="img" defaultValue={img} /><br/> 
                Price: <input type="text" name="price" defaultValue={price} /><br/>
                Quantity: <input type="text" name="qty" defaultValue={qty} /><br/>
                <input type="submit" name="" value="Update Guitar"/>
                </ul>
              </h2>
            </form>
        </Layout>);
    }
}

module.exports = Edit;

