const React = require('react');
const Layout = require('./Components/Layout.jsx');

class Contact extends React.Component {
    render() {
        return (
            <Layout>
                <h2>
                    <h2>Contact us at the following:</h2>
                    <h2>Phone: 888-Buy-More</h2>
                    <h2>Email: info@gregsguitars.com</h2>
                </h2>
            </Layout>
        )
    }
}
module.exports = Contact;