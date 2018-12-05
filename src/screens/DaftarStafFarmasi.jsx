import React from 'react';

import { DaftarStafFarmasiRow } from '../components/DaftarStafFarmasi';
import { Loading } from '../components/Loading';
import { TableContainer } from '../containers/TableContainer';
import { Appointment } from '../utils/Appointment.js';

export class DaftarStafFarmasi extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			listStafFarmasi: []
		}

	}

	componentDidMount(){
        Appointment.getAllStafFarmasi().then(response => {
            this.setState({
                loading: false,
                listStafFarmasi: response.result
            })
        })
	}

	render() {
        if (this.state.loading) {
            return (
                <Loading msg="Fetching Data..."/>
            )
        } else {
            return (
                <TableContainer title="Daftar Staf Farmasi" header={['Nama Staf']}>
                    <DaftarStafFarmasiRow listStafFarmasi={this.state.listStafFarmasi}/>
                </TableContainer>
            )
        }
	}
}