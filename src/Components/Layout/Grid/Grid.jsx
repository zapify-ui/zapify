import React, { Component } from 'react';
import './stylesGrid.scss';

export default class Grid extends Component {
    
    render() { 
        // const totalgrids = this.props.n;
        // const gridsWidth = calc((100% - "20px" * totalgrids) / totalgrids);
        return ( 
           <div>
                <div className="zapGrid">
                    <div className="zapRow">
                        <div className="zapItem">Exactly not resposive, but width changes according to pixels</div>
                        <div className="zapItem">Exactly not resposive, but width changes according to pixels</div>
                        <div className="zapItem">Exactly not resposive, but width changes according to pixels</div>
                    </div>
                 </div>
                <div className="zapGrid">
                    <div className="zapRow">
                        <div className="zapItem2">Exactly not resposive, but width changes according to pixels</div>
                        <div className="zapItem2">Exactly not resposive, but width changes according to pixels</div>
                        <div className="zapItem2">Exactly not resposive, but width changes according to pixels</div>
                        <div className="zapItem2">Exactly not resposive, but width changes according to pixels</div>
                    </div>
                </div>
           </div>
         );
    }
}