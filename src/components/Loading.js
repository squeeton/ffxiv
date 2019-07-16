import Spinner from 'react-spinner-material';
import React, { Component } from 'react';
import { Consumer } from './Context';

export default class Loading extends Component {
    render() {
        return (
            <Consumer>
                {context => {
                    return (
                        <div className="loading-div">
                            <div className="row">
                                <div className="col-2"></div>
                                <div className="col center">
                                    <h1>Data is being fetched from the server</h1>
                                </div>
                                <div className="col-2"></div>
                            </div>
                            <div className="row">
                                <div className="col"></div>
                                <div className="col-3 center">
                                    <div className="row">
                                        <div className="col"></div>
                                        <div className="col">
                                            <Spinner size={150} spinnerColor={"#333"} spinnerWidth={15} visible={true} /></div>
                                        <div className="col"></div>
                                    </div>
                                </div>
                                <div className="col"></div>
                            </div>
                            <div className="row">
                                <div className="col"></div>
                                <div className="col center">
                                    <h2>{context.loadPercent}%</h2>
                                </div>
                                <div className="col"></div>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}