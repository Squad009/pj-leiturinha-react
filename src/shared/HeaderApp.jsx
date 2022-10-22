import { Component } from 'react';


class HeaderApp extends Component {

    render() {

        return(
            <header className="p-2 text-white">
                <div className="container">
                    <nav className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        {this.props.navigationMain}

                        {this.props.searchMain}

                        {this.props.authentication}
                    </nav>
                </div>
            </header>

        )
    }
}

export default HeaderApp;