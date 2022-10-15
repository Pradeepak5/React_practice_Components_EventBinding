import React from "react";
import Person from "./Person";

function List(){
    const names =[{
        id:1,
        name:"Shiva",
        age:24,
        skill:"Php"
        },
        {
            id:2,
        name:"Naveen",
        age:16,
        skill:"biology"
        },
        {
            id:3,
        name:"nousith",
        age:11,
        skill:"School"
        },
        {id:4,
            name:"tharun",
            age:21,
            skill:"software"}
    ];
    return(
        names.map(name=>(
            <Person key={name.id} names={name}></Person>
            ))
    )
}
export default List;