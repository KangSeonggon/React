import React from "react";

function DataTable() {
    return(
        <div className="recent-orders">
            <h2>Data Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Produnt</th>
                        <th>Number</th>
                        <th>Status</th>
                        <th>Status</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Foldable Drone</td>
                        <td>1234</td>
                        <td>Due</td>
                        <td className="warning">Pending</td>
                        <td className="primary">Details</td>
                    </tr>
                    <tr>
                        <td>Hvac</td>
                        <td>5445</td>
                        <td>Due</td>
                        <td className="warning">Pending</td>
                        <td className="primary">Details</td>
                    </tr>
                    <tr>
                        <td>Multi v</td>
                        <td>245</td>
                        <td>Due</td>
                        <td className="warning">Pending</td>
                        <td className="primary">Details</td>
                    </tr>
                    <tr>
                        <td>Ventilation</td>
                        <td>777</td>
                        <td>Due</td>
                        <td className="warning">Pending</td>
                        <td className="primary">Details</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DataTable;