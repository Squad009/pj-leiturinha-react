import NavigationMain from "./header/NavigationMain";
import SearchMain from "./header/SearchMain";
import Authentication from "./header/Authentication";
import HeaderApp from "./HeaderApp";
import withAuth from '../components/withAuth';
import { Component } from 'react';


 
class HeaderAppLogin extends Component {

    render() {

        return(
      
            <HeaderApp navigationMain={<NavigationMain />} searchMain={<SearchMain />} authentication={<Authentication />} />
    
        )
    }
}

export default    withAuth(HeaderAppLogin); 