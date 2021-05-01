import { Component } from 'react';
import HamburgerMenu from '../components/HamburgerMenu';
import '../styles/Contact.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export class UserProfile extends Component {
    static displayName = UserProfile.name;

    render() {
        return (
            <div className="contact-container">
            <HamburgerMenu/>
                <div className="form-box-contact">
                    <div className="header-form">
                        <h4 className="text-primary text-center"><i className="fa fa-user" style={{ fontSize: "110px" }}></i></h4>
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
                            <button type="button" className="btn btn-secondary btn-block">Send</button>
                        </form>
                        <div className="social">
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-twitter-square"></i></a>
                            <a href="#"><i className="fab fa-google"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
