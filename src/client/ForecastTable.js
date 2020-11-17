import React, { useState, useEffect } from 'react';

const ForecastTable = (props) => {
    
    let headers = Object.getOwnPropertyNames(props.data[0]);
    if (!props.data || props.data.length === 0 || Object.getOwnPropertyNames(props.data[0]).length === 0) {
        return null;
    }

    return (
        <table>
            <tbody>
                <tr> {headers.map((col) => <td> {col} </td>)} </tr> { props.data.map((row, index) =>
                    (<tr key={index}>
                        { headers.map((field, fieldIndex) => <td key={fieldIndex}> {row[field]} </td>)}
                    </tr>))
                }
            </tbody>
        </table>)


}

export default ForecastTable;