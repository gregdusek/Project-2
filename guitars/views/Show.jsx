const React = require('react');
const Layout = require('./Components/Layout.jsx');

class Show extends React.Component {
    render(){
        return (
            <Layout id={this.props.guitar._id}>
                <div class="show-content">
                    <div class="show-info">
                        <div class="button-div"> 
                            <button id="buy-button" style={{display : this.props.guitar.qty <= 0? 'none' : ''}}>BUY</button>
                          <a href="/guitars/inventory"><button id="delete-button">DELETE</button></a>
                          <form method="POST" action={`/guitars/${this.props.id}?_method=DELETE`}>
                        <input type="submit" value={`DELETE THE ${this.props.guitar.brand.toUpperCase()}`}/>
                        </form> 
                        </div>   
                        <h3 id="show-info-box">
                            Brand:  {this.props.guitar.brand}<br/>
                            Model:  {this.props.guitar.model}<br/>
                            Price: ${this.props.guitar.price}<br/>
                            Qty:  {this.props.guitar.qty}<br/>
                        </h3>
                            <img src={this.props.guitar.img}/>
                    </div>
                </div> 
            </Layout>
        )
    }
}
module.exports = Show;

