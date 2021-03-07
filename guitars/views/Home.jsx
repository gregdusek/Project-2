const React = require('react');
const Layout = require('./Components/Layout.jsx')

class Home extends React.Component{
    render() {
        return (
         <Layout>
                <h2>
                     The internet's premiere one stop shop for all your favorite guitar brands.
                </h2>
        </Layout>
        )
    }
}

module.exports = Home;