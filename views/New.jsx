const React = require('react');
const Layout = require('./components/Layout.jsx');

class New extends React.Component {
  render() {
    return (
        <Layout>
          <div class="new-container">
            <h2 id="new-title">New guitar page</h2>
            <form action="/guitars/inventory" method="POST">
              <h2>
                <ul>
                brand: <input type="text" name="brand" /><br/>
                model: <input type="text" name="model" /><br/>
                img: <input type="text" name="img"/><br/> 
                price: <input type="number" name="price" /><br/>
                qty: <input type="number" name="qty" /><br/>
                <input type="submit" name="" value="Create Guitar"/>
                </ul>
                </h2>
             </form>
          </div>
        </Layout>);
    }
}

module.exports = New;

