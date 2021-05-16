import { Component } from 'react';
import '../styles/RepairsView.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HamburgerMenu from '../components/HamburgerMenu';
import { FlexGrid, FlexGridColumn } from '@grapecity/wijmo.react.grid';
import { GroupPanel as FlexGridGroupPanel } from '@grapecity/wijmo.react.grid.grouppanel';
import { FlexGridFilter } from '@grapecity/wijmo.react.grid.filter';
import API from '../services/API'

export class UsersView extends Component {
    static displayName = UsersView.name;
    constructor(props) {
        super(props);

        this.api = new API();
        this.gridInitialized = (ctl) => {
            this.setState({
                flex: ctl
            });
        };

        this.state = {
            flex: null,
            users: {}
        };
        this.populateData();
    }
    async populateData() {
        const test = this.api.populateData('https://localhost:44349/api/Users');
        console.log(test.then(items => this.setState({ data:  items})));        
    }

    render() {
        return (
            <div>
                <HamburgerMenu />
                <FlexGridGroupPanel grid={this.state.flex} placeholder={"Drag columns here to create groups"} />

                <FlexGrid ref={this.theGrid} autoGenerateColumns={false} allowAddNew allowDelete allowPinning="SingleColumn" showMarquee selectionMode="MultiRange"
                    validateEdits={false} initialized={this.gridInitialized} itemsSource={this.state.data}>
                    <FlexGridFilter />
                    <FlexGridColumn header="Login" binding="login" dataMap={"login"} width={150} />
                    <FlexGridColumn header="Name" binding="name" dataMap={"name"} width={150} />
                    <FlexGridColumn header="Surname" binding="surname" dataMap={"surname"} width={150} />
                </FlexGrid>
                <div className="row-buttons">
                    <button className="btn btn-warning mr-1" onClick={this.populateData}>Export To Excel</button>
                    <button className="btn btn-warning mr-1" >Export To PDF</button>
                </div>

            </div>
        )
    }
}
