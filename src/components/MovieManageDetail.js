import React, { Component } from 'react';

class MovieManageDetail extends Component {
    render() {
        return(
            <tr>
                <td>{this.props.item.id}</td>
                <td>{this.props.item.title}</td>
                <td>{this.props.item.description}</td>
                <td>{this.props.item.url}</td>
                <td><img style={{ height: "100px"}} className="img-responsive" src={this.props.item.image} /></td>
                <td>
                    <input type="button" className="btn btn-success" value="Edit" />
                </td>
                <td>
                    <input type="button" className="btn btn-danger" value="Delete" onClick={this.props.fnDel}/>
                </td>
            </tr>
        );
    }
}

export default MovieManageDetail;