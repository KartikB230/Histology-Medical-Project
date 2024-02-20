import React from 'react';

function HomePage() {
    function navigateToSelected(event) {
        const selectedValue = event.target.value;
        if (selectedValue === "histology") {
            window.location.href = "/SquamousEpithelium";
        } else if (selectedValue === "thyroid") {
            window.location.href = "/Thyroid";
        }
    }

    return (
        <div>
            <h1>Welcome to the Home Page!</h1>
            <label htmlFor="studySelector">Select what to study:</label>
            <select id="studySelector" onChange={navigateToSelected}>
                <option value="" disabled selected>Select an option</option>
                <option value="histology">A - Squamous Epithelium</option>
                <option value="thyroid">B - Thyroid</option>
            </select>
        </div>
    );
}

export default HomePage;
