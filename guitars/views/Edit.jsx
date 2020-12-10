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
                brand: <input type="text" name={brand} /><br/>
                model: <input type="text" name={model} /><br/>
                img: <input type="text" name={img}/><br/> 
                price: <input type="number" name={price} /><br/>
                qty: <input type="number" name={qty} /><br/>
                <input type="submit" name="" value="Create Guitar"/>
                </ul>
              </h2>
            </form>
        </Layout>);
    }
}

module.exports = Edit;

