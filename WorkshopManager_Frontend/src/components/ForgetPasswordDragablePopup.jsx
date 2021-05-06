import { Link } from 'react-router-dom';
import '@grapecity/wijmo.styles/wijmo.css';
import 'bootstrap/dist/css/bootstrap.css';
//
import * as React from 'react';
//
import * as wjInput from '@grapecity/wijmo.react.input';
//
export class ForgetPasswordDragablePopup extends React.Component {
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
                <Link onClick={() => this.state.frmLoginPopup.show(true)}>Forgot your password?</Link>

                <wjInput.Popup isDraggable={true} initialized={this.initLoginForm}>
                    <form>
                        <div className="wj-dialog-header">
                            Generate new password
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
                            <label>
                                Confirm password:
                            <input className="form-control" type="password" required pattern=".{4,}" title="Please enter 4 characters or more." />
                            </label>
                            <br />
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-warning mr-1" type="submit">
                                Confirm
                        </button>
                        </div>
                    </form>
                </wjInput.Popup>
            </div>);
    }
}
