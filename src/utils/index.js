import React from 'react';

export default function renderSelectOption(data) {
    let prevId = '', options = [];
    data.filter(item => {
        if (prevId !== item.userId) {
            prevId = item.userId;
            options.push(<option key={item.id} value={item.userId}>{item.userId}</option>)
            return item
        }
    })
    return options.sort((a, b) => parseInt(a.key) - parseInt(b.key));
}