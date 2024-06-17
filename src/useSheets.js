import { useState, useEffect } from "react";

const useSheets = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://script.google.com/macros/s/AKfycbzKSYR_PtQXeDMSd7USY1mrCrAxgvpgjR_l3ywV4ZgGATSVHekOCTM1vAnZLg3uQuFS/exec')
            .then(response => response.json())
            .then(data => setData(data.data));
    }, []);

    return { data };
}

export default useSheets;