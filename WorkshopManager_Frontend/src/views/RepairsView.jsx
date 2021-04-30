import { Component } from 'react';
import '../styles/RepairsView.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HamburgerMenu from '../components/HamburgerMenu';
import { FlexGrid, FlexGridColumn, FlexGridCellTemplate } from '@grapecity/wijmo.react.grid';
import { GroupPanel as FlexGridGroupPanel } from '@grapecity/wijmo.react.grid.grouppanel';
import { FlexGridFilter } from '@grapecity/wijmo.react.grid.filter';

export class RepairsView extends Component {
    static displayName = RepairsView.name;

    render() {
        return (
            <div>
            <HamburgerMenu/>
                    {/* <FlexGridGroupPanel grid={this.state.flex} placeholder={"Drag columns here to create groups"} /> */}

                    <FlexGrid ref={this.theGrid} autoGenerateColumns={false} allowAddNew allowDelete allowPinning="SingleColumn" showMarquee selectionMode="MultiRange" validateEdits={false} initialized={this.gridInitialized}>
                        <FlexGridFilter />

                        <FlexGridColumn header="Start date" binding="start_date" format="MMM d yyyy" isRequired={false} width={150} editor={this._dateEditor}>
                        </FlexGridColumn>
                        <FlexGridColumn header="Finish date" binding="finish_date" format="MMM d yyyy" isRequired={false} width={150} editor={this._dateEditor}>
                        </FlexGridColumn>
                        <FlexGridColumn header="Price" binding="price" format="c" isRequired={false} width={150} />
                        <FlexGridColumn header="Time" binding="time" format="HH:mm" isRequired={false} width={115} editor={this._timeEditor}>
                        </FlexGridColumn>
                        <FlexGridColumn header="User" binding="user" dataMap={"user"} width={150}/>
                        <FlexGridColumn header="Client" binding="user" dataMap={"client"} width={150}/>
                        <FlexGridColumn header="VIN number" binding="vin_number" dataMap={this.productMap} width={150} />
                        <FlexGridColumn header="Number plate" binding="number_plate" dataMap={this.productMap} width={190} />
                        <FlexGridColumn header="Discount" binding="discount" format="p0" width={150} />
                        <FlexGridColumn header="Finished" binding="finished" width={120} />
                    </FlexGrid>
                    <div className="row-buttons">
                        <button className="btn btn-warning mr-1" >Export To Excel</button>
                        <button className="btn btn-warning mr-1" >Export To PDF</button>
                        <button className="btn btn-warning mr-1" >Show chart</button>
                    </div>
            
            </div>
        )
    }
}
