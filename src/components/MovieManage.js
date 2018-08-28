import React, { Component } from 'react';

class MovieManage extends Component {
    render() {
        return (
            <div style={{paddingTop: "100px"}} className="container">
                <div className="row">
                    <div className="col-xs-12">
                    <div className="box">
                        <div className="box-header">
                        <h3 className="box-title">Hover Data Table</h3>
                        </div>
                        <div className="box-body">
                        <table id="example2" className="table table-bordered table-hover">
                            <thead>
                            <tr>
                            <th>Rendering engine</th>
                            <th>Browser</th>
                            <th>Platform(s)</th>
                            <th>Engine version</th>
                            <th>CSS grade</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                            <td>Trident</td>
                            <td>Internet
                                Explorer 4.0
                            </td>
                            <td>Win 95+</td>
                            <td> 4</td>
                            <td>X</td>
                            </tr>
                            <tr>
                            <td>Trident</td>
                            <td>Internet
                                Explorer 5.0
                            </td>
                            <td>Win 95+</td>
                            <td>5</td>
                            <td>C</td>
                            </tr>
                            
                            </tbody>
                            <tfoot>
                            <tr>
                            <th>Rendering engine</th>
                            <th>Browser</th>
                            <th>Platform(s)</th>
                            <th>Engine version</th>
                            <th>CSS grade</th>
                            </tr>
                            </tfoot>
                        </table>
                        </div>
                    </div>

                    <div className="box">
                        <div className="box-header">
                        <h3 className="box-title">Data Table With Full Features</h3>
                        </div>
                        <div className="box-body">
                        <table id="example1" className="table table-bordered table-striped">
                            <thead>
                            <tr>
                            <th>Rendering engine</th>
                            <th>Browser</th>
                            <th>Platform(s)</th>
                            <th>Engine version</th>
                            <th>CSS grade</th>
                            </tr>
                            </thead>
                            <tbody>
                        
                            </tbody>
                            <tfoot>
                            <tr>
                            <th>Rendering engine</th>
                            <th>Browser</th>
                            <th>Platform(s)</th>
                            <th>Engine version</th>
                            <th>CSS grade</th>
                            </tr>
                            </tfoot>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieManage;