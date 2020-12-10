const React = require('react');
const Layout = require('./Components/Layout.jsx')

class Home extends React.Component{
    render () {
        return (
         <Layout>
            <body>
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus qui, animi sapiente quaerat necessitatibus ipsum, ex placeat corrupti ab, eius sequi labore adipisci accusamus nulla est? Nisi pariatur officiis dolor.
                </h2>
            </body>
        </Layout>
        )
    }
}

module.exports = Home;