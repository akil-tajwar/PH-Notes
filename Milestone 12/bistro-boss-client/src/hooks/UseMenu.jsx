import React, { useEffect, useState } from 'react';

const UseMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        fetch('Menu.json')
            .then(res => res.json())
            .then(data => {
                setMenu(data);
                setLoader(false);
            })
            .catch(error => console.log(error))
    }, [])
    return [menu, loader]
};

export default UseMenu;