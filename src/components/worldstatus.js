import React from 'react';
//import CountrySelector from '../api/ContrySelector';
import Api from '../api/api';


    function worldstatus() {
        return(
        <div className="mozstats">
            <h2 className="text-center">Covid-19 em Moçambique</h2>
            <div className="container2">
                <div className="info">
                    <p>Moçambique regista !!!!! casos comulativos do virus COVID-19 em todas as regiões do país (Sul, Centro e Norte).</p>
                </div>
                <div className="statsmoz">
                    <Api url="https://covid19.mathdro.id/api/countries/MZ"/>
                </div>
            </div>
        </div>
    )
}

export default worldstatus;