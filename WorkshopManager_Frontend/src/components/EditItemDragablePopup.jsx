import '@grapecity/wijmo.styles/wijmo.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/AddItemDragablePopup.css';
//
import * as React from 'react';
//
import * as wjInput from '@grapecity/wijmo.react.input';
//
export class EditItemDragablePopup extends React.Component {
    constructor(props) {
        super(props);
        this.initLoginForm = (popup) => {
            this.setState({ frmLoginPopup: popup });
        };
        this.state = {
            frmLoginPopup: props.PopupForm
        };
    }
    render() {
        return (
            <div className="container-fluid">
                <button className="btn btn-warning mr-1" onClick={() => this.state.frmLoginPopup.show(true)}>
                    Edit item
            </button>

                <wjInput.Popup isDraggable={true} initialized={this.initLoginForm}>
                    <form>
                        <div className="wj-dialog-header">
                            Edit item
                        <button type="button" className="close wj-hide">&times;</button>
                        </div>
                        <div className="modal-body">
                            <label>
                                Email:
                            <input className="form-control" required type="email" />
                            </label>
                            <br />
                            <label>
                                Password:
                            <input className="form-control" type="password" required pattern=".{4,}" title="Please enter 4 characters or more." />
                            </label>
                            <br />
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-warning mr-1" type="submit">
                                Edit
                        </button>
                        </div>
                    </form>
                </wjInput.Popup>
            </div>);
    }
}
