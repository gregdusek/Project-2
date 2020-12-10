const React = require('react');

class Layout extends React.Component {
    render () {
        return (
            <html>
                <head>
                    <title>Greg's Guitars</title>
                    <link rel="stylesheet" href="/style.css"/>
                </head>
                <body className="container">
                    <header>
                        <div class="banner">
                            <h1 contenteditable spellcheck="false" 
                            id="banner-font">Greg's Guitar Shop</h1>
                        </div>
                        <nav>
                            <a href="/guitars">HOME</a>
                            <a href="/guitars/inventory">INVENTORY</a>
                            <a href="/guitars/new">NEW GUITAR</a>
                            <a href={`/guitars/${this.props.id}/edit`}>EDIT GUITAR</a>
                            <a href="/guitars/about">ABOUT</a>
                            <a href="/guitars/contact">CONTACT  US</a>
                        </nav>
                    </header>
                    {this.props.children}
                </body>
            </html>
        );
    }
}

module.exports = Layout;