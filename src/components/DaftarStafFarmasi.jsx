import React from 'react';

export const DaftarStafFarmasiRow = (props) => {
    return (
        <tbody>
            {props.listStafFarmasi.map(stafFarmasi => {
                return (
                    <tr key={stafFarmasi.id}>
                        <td>{stafFarmasi.nama}</td>
                    </tr>
                )
            })}
        </tbody>
    )
}