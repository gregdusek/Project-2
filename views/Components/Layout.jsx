const React = require('react');

class Layout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>Greg's Guitars</title>
                    <link rel="stylesheet" href="/style.css"/>
                </head>
                <header>
                        <div className="banner">
                            <h1 id="banner-font">Greg's Guitar Shop</h1>
                        </div>
                        <nav>
                            <a href="/">HOME</a>
                            <a href="/guitars/">INVENTORY</a>
                            <a href="/guitars/new">NEW GUITAR</a>
                            {/* <a href={`/gregs-guitars/${this.props.id}/edit`}>EDIT GUITAR</a> */}
                            <a href="/about/">ABOUT</a>
                            <a href="/contact/">CONTACT  US</a>
                        </nav>
                    </header>
                <body className="container">

                    {this.props.children}
                </body>
            </html>
        );
    }
}

module.exports = Layout;