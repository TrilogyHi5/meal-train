import React from 'react';

export default function People(props) {
  
    return (
        <>
{props.people.map((person,index) => {
    return (
    <li key={index}>
      <div className="flex items-center gap-x-6">
        <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
        <div>
          <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
          <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
        </div>
      </div>
    </li>
    );
    })}
  </>
)};