import React, { useState, useEffect } from 'react';

const NameList = () => {
    const [names, setNames] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const savedNames = JSON.parse(localStorage.getItem('names')) || [];
        setNames(savedNames);
    }, []);

    const addName = () => {
        if (inputValue.trim()) {
            const updatedNames = [...names, inputValue.trim()];
            setNames(updatedNames);
            localStorage.setItem('names', JSON.stringify(updatedNames));
            setInputValue('');
        }
    };

    return (
        <div>
            {names.map((name, index) => (
                 <h2 key={index}>{name}</h2>
                ))}
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                placeholder="Введите имя" 
            />
            <button onClick={addName}>Добавить имя</button>
                
            
        </div>
    );
};

export default NameList;
