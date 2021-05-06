import { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ForgetPasswordDragablePopup } from '../components/ForgetPasswordDragablePopup';
import history from '../services/History';
import '../styles/Login.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export class Login extends Component {
    static displayName = Login.name;
    constructor(props) {
        super(props)
        this.state = { username: '', password: '', showAllert: false, loggedIn: false }
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    componentDidMount() {
        this.setState({ loggedIn: false });
    }
    async populateData() {
        const response = await fetch('https://api.ratesapi.io/api/2021-04-01' /*+ this.state.date*/ + '?base=PLN');
        const data = await response.json();
        console.log(data);
        //this.setState({ values: data, loading: false });
    }

    handleChangeUsername = (e) => {
        this.setState({ username: e.currentTarget.value });
    }
    handleChangePassword = (e) => {
        this.setState({ password: e.currentTarget.value });
    }
    handleLogin = () => {
        this.populateData();
        history.push('/WorkshopManager_Web/WijmoGrid');
        this.setState({ loggedIn: true });
    }

    render() {
        return (
            <div className="login-container">
                {
                    this.state.loggedIn ?
                        < Redirect exact to="/WorkshopManager_Web/WijmoGrid" /> : null
                }
                <div className="form-box">
                    <div className="header-form">
                        <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4>
                        <div className="image">
                        </div>
                    </div>
                    <div className="body-form">
                        <form>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Username" onChange={this.handleChangeUsername} />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-lock"></i></span>
                                </div>
                                <input type="password" className="form-control" placeholder="Password" onChange={this.handleChangePassword} />
                            </div>
                            <button type="button" className="btn btn-secondary btn-block" style={{ margin: 0 }} onClick={this.handleLogin}>LOGIN</button>
                            <div className="message">
                                <div><ForgetPasswordDragablePopup /></div>
                                <div><Link exact to="/WorkshopManager_Web/Registration">Create new account</Link></div>
                            </div>
                        </form>
                        <div className="social">
                            <a href="https://github.com/w-gasiewicz" target="_blank"><i className="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/wojciech-gasiewicz/" target="_blank"><i className="fab fa-linkedin"></i></a>
                            <a href="#" target="_blank"><i className="fab fa-facebook"></i></a>
                            <a href="#" target="_blank"><i className="fab fa-twitter-square"></i></a>
                            <a href="#" target="_blank"><i className="fab fa-google"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;
