const React = require('react');
const Layout = require('./components/Layout.jsx');

class New extends React.Component {
  render() {
    return (
        <Layout>
          <div className="new-container">
            <h2 id="new-title">Submit a New Guitar</h2>
            <form action="/guitars" method="POST">
              <h2>
                  <ul>
                    Brand: <input type="text" name="brand" /><br/>
                    Model: <input type="text" name="model" /><br/>
                    img: <input type="text" name="img"/><br/> 
                    Price: <input type="number" name="price" /><br/>
                    Qty: <input type="number" name="qty" /><br/>
                    <input type="submit" name="" value="Create Guitar"/>
                  </ul>
                </h2>
             </form>
          </div>
        </Layout>);
    }
}

module.exports = New;

