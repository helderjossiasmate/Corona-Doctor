import React from 'react';
import useStats from './useStats';
import { FiCrosshair, FiRefreshCw } from 'react-icons/fi';
import { FaDiagnoses } from 'react-icons/fa';


function Stats({url}) {
    const stats = useStats(url);
    if (!stats) return <p>Processando...</p>
    return <div>
        <div>
            <p>Total de infectados:</p>
            <FaDiagnoses className="infecteds"/> <span className="infecteds">{stats.confirmed.value}</span>

            <p>Total de recuperados:</p>
            <FiRefreshCw className="recovered"/> <span className="recovered">{stats.recovered.value}</span>

            <p>Total de mortes:</p>
            <FiCrosshair className="deaths"/> <span className="deaths">{stats.deaths.value}</span>
        </div>
    </div>
}

export default Stats;
