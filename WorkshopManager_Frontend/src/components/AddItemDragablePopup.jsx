import '@grapecity/wijmo.styles/wijmo.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/AddItemDragablePopup.css';
//
import * as React from 'react';
//
import * as wjInput from '@grapecity/wijmo.react.input';
//
export class AddItemDragablePopup extends React.Component {
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
                    Add item
            </button>

                <wjInput.Popup isDraggable={true} initialized={this.initLoginForm}>
                    <form>
                        <div className="wj-dialog-header">
                            Add new item
                        {/* <button type="button" className="close wj-hide">&times;</button> */}
                        </div>
                        <div className="modal-body">
                            <label>
                                Date:
                            <input className="form-control" required type="date" />
                            </label>
                            <br />
                            <label>
                                Country:
                            <input className="form-control" type="password" required pattern=".{4,}" title="Please enter 4 characters or more." />
                            </label>
                            <br />
                            <label>
                                Price:
                            <input className="form-control" required type="number" />
                            </label>
                            <br />
                            <label>
                                Rating:
                            <input className="form-control" required type="number" />
                            </label>
                            <br />
                            <label>
                                Time:
                            <input className="form-control" required type="number" />
                            </label>
                            <br />
                            <label>
                                Color:
                            <input className="form-control" required type="number" />
                            </label>
                            <br />
                            <label>
                                Product:
                            <input className="form-control" required type="number" />
                            </label>
                            <br />
                            <label>
                                Discount:
                            <input className="form-control" required type="number" />
                            </label>
                            <br />
                            <label>
                                Active:
                            <input className="form-control" required type="checkbox" />
                            </label>
                            <br />
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-warning mr-1" type="submit">
                                Add
                        </button>
                        </div>
                    </form>
                </wjInput.Popup>
            </div>);
    }
}
