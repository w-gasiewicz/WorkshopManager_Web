import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import history from '../services/History';
import '../styles/Registration.css'
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export class Registration extends Component {
    static displayName = Registration.name;
    constructor(props) {
        super(props)
        this.state = { Login: '', Password: '', Name: '', Surname: '', showAllert: false, loggedIn: false }
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleRegistration = this.handleRegistration.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeSurname = this.handleChangeSurname.bind(this);
    }

    componentDidMount() {
        this.setState({ loggedIn: false });
    }
    async populateData() {
        const user = {
            id: 0,
            login: this.state.Login,
            password: this.state.Password,
            name: this.state.Name,
            surname: this.state.Surname,
            roleId: 2//User
        };
        console.log(JSON.stringify(user));
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(user),
            mode: 'cors'//,
            //data: JSON.stringify(user)
        };
        const response = await fetch('https://localhost:44349/api/Users/RegisterUser', requestOptions);
        const data = await response.json();
        console.log(response);
        //this.setState({ values: data, loading: false });
    }

    handleChangeUsername = (e) => {
        this.setState({ Login: e.currentTarget.value });
    }
    handleChangePassword = (e) => {
        this.setState({ Password: e.currentTarget.value });
    }
    handleChangeName = (e) => {
        this.setState({ Name: e.currentTarget.value });
    }
    handleChangeSurname = (e) => {
        this.setState({ Surname: e.currentTarget.value });
    }
    handleRegistration = () => {
        this.populateData();
        history.push('/WorkshopManager_Web/WijmoGrid');
        this.setState({ loggedIn: true });
    }

    render() {
        return (
            <div className="registration-container">
                {
                    this.state.loggedIn ?
                        < Redirect exact to="/" /> : null
                }
                <div className="form-box-registration">
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
                                <input type="text" className="form-control" placeholder="Login" onChange={this.handleChangeUsername} />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Name" onChange={this.handleChangeName} />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Surname" onChange={this.handleChangeSurname} />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-lock"></i></span>
                                </div>
                                <input type="password" className="form-control" placeholder="Password" onChange={this.handleChangePassword} />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-lock"></i></span>
                                </div>
                                <input type="password" className="form-control" placeholder="Confirm password" onChange={this.handleChangePassword} />
                            </div>
                            <button type="button" className="btn btn-secondary btn-block" style={{ margin: 0 }} onClick={this.handleRegistration}>REGISTER</button>
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
export default Registration;
