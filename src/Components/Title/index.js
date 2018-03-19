import React from 'react';
import style from './style.module.css';

export default ({children: title}) => <h1 className={style.title}>{title}</h1>