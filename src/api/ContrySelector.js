import React, { useState } from 'react';
import useStats from './useStats';

export default function CountrySelector() {
    const countries = useStats('https://covid19.mathdro.id/api/countries');
    //const [selectedCountry, setSelectedCountry] = useState();
    if (!countries) return <p>Processando...</p>
    return (
        <div>
            <select>
                {Object.entries(countries.countries).map((
                    [country, code]) => (
                    <option key={code} value={code}>
                        {country}
                    </option>
                ))}
            </select>
        </div>
    );
}
