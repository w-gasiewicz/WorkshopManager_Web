import { Component } from 'react';
import '../styles/AnalyticsView.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export class RepairsView extends Component {
    static displayName = RepairsView.name;

    render() {
        return (
            <div className="container">
                <div className="form-box-contact">
                    <div className="header-form">
                        <h4 className="text-primary text-center"><i className="fas fa-chart-line" style={{ fontSize: "110px" }}></i></h4>
                        <div className="image">
                        </div>
                    </div>
                    <div className="body-form">
                        <form>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Subject" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-at"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Your email" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-comment-dots"></i></span>
                                </div>
                                <textarea className="form-control" rows={3} placeholder="Message" required></textarea>
                            </div>
                            <button type="button" className="btn btn-secondary btn-block">Analytics</button>
                        </form>
                        <div className="social">
                            <a href="#"><i className="fas fa-dot-circle"></i></a>
                            <a href="#"><i className="fas fa-dot-circle"></i></a>
                            <a href="#"><i className="fas fa-dot-circle"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
