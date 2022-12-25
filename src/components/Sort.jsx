import React from "react";
import '../styles/Sort.css';

export default function Sort ({selected, search, setSortProducts}) {

    return (
        <div id="sort">
            <div id="search">
                <h4>Поиск по названию</h4>
                <input 
                type="text" 
                value={search} 
                onChange={ e => setSortProducts(prev => {return {...prev, search: e.target.value}}) } />
            </div>
            <div id="filter">
                <select 
                value={selected} 
                onChange={e => setSortProducts( prev => {return {...prev, selected: e.target.value}})}>
                    <option value="" disabled>Выберите категорию</option>
                    <option value="computer">Компьютер</option>
                    <option value="clothes">Одежда</option>
                    <option value="toy">Игрушки</option>    
                </select>
            </div>
        </div>
    );
};