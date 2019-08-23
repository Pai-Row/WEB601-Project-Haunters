import React from 'react'
import faker from 'faker';

const Student = () => (
    <div>
    <div className= "StudentContainer">
    <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()}/>
    </a>
    <div className= "studentName">
        <a href="/" className= "Name">
            {faker.name.firstName()} {faker.name.lastName()}
        </a>
        <div className="address">
            <span className="text">Nelson Street</span>
        </div>
    </div>

</div>
<div className= "StudentContainer">
    <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()}/>
    </a>
    <div className= "studentName">
        <a href="/" className= "Name">
            {faker.name.firstName()} {faker.name.lastName()}
        </a>
        <div className="address">
            <span className="text">Richmond Street</span>
        </div>
    </div>

</div>
</div>
);

export default Student;