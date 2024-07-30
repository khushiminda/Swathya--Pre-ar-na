import React from "react";
import mgcms from "../assets/blue_dress.glb";
import hamzatyellow from "../assets/yellow_dress.glb";
import dgc from "../assets/surfing_swimsuit_low-poly.glb";
import dosi from "../assets/open_puffer_jacket.glb";
import geig from "../assets/dior_bolso_saddle_con_bandolera_rojo.glb";
import image1 from '../assets/Screenshot 2024-07-11 131845.png';
import image2 from '../assets/Screenshot 2024-07-11 131901.png';
import image3 from '../assets/Screenshot 2024-07-11 132048.png';


// ... existing imports ...

const Arlearning = () => {
    // ... existing scenarios array ...

    const patients = [
        { name: "John Doe", age: 45, disease: "Hypertension" },
        { name: "Jane Smith", age: 32, disease: "Diabetes" },
        { name: "Mike Johnson", age: 58, disease: "Arthritis" },
        { name: "Emily Brown", age: 29, disease: "Asthma" },
    ];
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Changed from 'flex-end' to 'center'
        width: '100%',
    };
    
    const tableContainerStyle = {
        width: '50%', // Adjust this value to control the table width
        margin: '0 auto', // Changed from 'marginLeft: auto' to center the table
    };
    
    const tableStyle = {
        borderCollapse: 'collapse',
        width: '100%',
        marginTop: '20px',
    };
    const thStyle = {
        backgroundColor: '#f2f2f2',
        border: '1px solid #ddd',
        padding: '8px',
        textAlign: 'left',
    };

    const tdStyle = {
        border: '1px solid #ddd',
        padding: '8px',
    };
    return (
        <div style={containerStyle}>
            <h2>Patient Information</h2>
            <div style={tableContainerStyle}>
            <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Name</th>
                            <th style={thStyle}>Age</th>
                            <th style={thStyle}>Disease</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient, index) => (
                            <tr key={index}>
                                <td style={tdStyle}>{patient.name}</td>
                                <td style={tdStyle}>{patient.age}</td>
                                <td style={tdStyle}>{patient.disease}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

// ... existing thStyle and tdStyle ...

export default Arlearning;
