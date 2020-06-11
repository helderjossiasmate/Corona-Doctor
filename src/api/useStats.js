import { useState, useEffect } from 'react';

 function useStats(url) {
    const [stats, setStats] = useState();
    useEffect(() => {
        async function fetchData() {
            console.log('Buscando dados...');
            const data = await fetch(url).then(res => res.json()
            );
            setStats(data);
        }
        fetchData();
    }, []);
    return stats;
}

export default useStats;