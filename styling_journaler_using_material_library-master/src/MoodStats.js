import { Card, CardContent, Icon } from '@mui/material';
import React from 'react';

class MoodStats extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return (
            <div>
               <h2>Mood Stats</h2>
                        <Card id="journal-catalog__mood-stats">
                            <CardContent>   
                                <div className="mood-stat">
                                    <div className="mood"><Icon baseClassName="far" className="fa-smile-beam" /></div>
                                    <div className="stat">{this.props.excitedValue}</div>
                                </div>
                                <div className="mood-stat">
                                    <div className="mood"><Icon baseClassName="far" className="fa-smile" /></div>
                                    <div className="stat">{this.props.happyValue}</div>
                                </div>
                                <div className="mood-stat">
                                    <div className="mood"><Icon baseClassName="far" className="fa-surprise" /></div>
                                    <div className="stat">{this.props.surprisedValue}</div>
                                </div>
                                <div className="mood-stat">
                                    <div className="mood"><Icon baseClassName="far" className="fa-frown" /></div>
                                    <div className="stat">{this.props.sadValue}</div>
                                </div>
                                <div className="mood-stat">
                                    <div className="mood"><Icon baseClassName="far" className="fa-angry" /></div>
                                    <div className="stat">{this.props.angryValue}</div>
                                </div>
                            </CardContent>
                        </Card>
            </div>
        );
    }
}

export default MoodStats;