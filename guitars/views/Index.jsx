const React = require('react');
const Layout = require('./Components/Layout.jsx');

class Inventory extends React.Component{
    render() {
        return (
            <Layout>
                    <h2 id="inventory">Available Inventory</h2>
                    <div id="main-container">
                        {
                            this.props.guitars.map((guitar) => {
                                return (
                                    <div className="guitar-content">
                                        <div className="guitar-info">
                                            <h3 id="guitar-info-box">
                                                Brand:  {guitar.brand}<br/>
                                                Model:  {guitar.model}<br/>
                                                Price: ${guitar.price}<br/>
                                                Qty:  {guitar.qty}
                                            </h3>
                                            <a href={`/guitars/${guitar.id}`}>
                                                <img src={guitar.img}/>
                                            </a>
                                        </div>
                                    </div> 
                                )
                            })
                        }  
                    </div>             
            </Layout>
        )
    }
}
module.exports = Inventory; 