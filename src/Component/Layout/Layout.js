import React,{Component} from 'react';
import Box from './Box/Box';

class Layout extends Component{
    render(){

        const property = this.props.property;
        return(
            <div>
                 <Box property={property}/>
            </div>
        )
    }
}

export default Layout;

