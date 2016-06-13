import React from 'react';

import Footer   from './Footer';

require('./layout.styl');

class AppLayout extends React.Component {
    render() {
        return (
            <div className="app-wrapper">
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default AppLayout;
