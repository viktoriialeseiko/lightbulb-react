import React from 'react';
import './student.css';

function Student(props) {
    return(
        <>
            {props.data.map(item => {
                if(item.grade<=40){
                    return <div className="failed">
                    <h1>{item.name}</h1>
                    <h3>failed</h3>
                    {item.hasOwnProperty('url') && <img src={item.url} />}
                    </div> 
                } else {
                    return <div className="passed">
                    <h1>{item.name}</h1>
                    <h3>passed</h3>
                    {item.hasOwnProperty('url') && <img src={item.url} />}
                    </div> 
                }
            })}
        </>
    )
}

export default Student;



// import React from 'react';
// import './student.css';
// import Image from './Image';
// const Student = (props) => {
//     const status = props.data.grade <= 40 ? 'failed' : 'passed';
//     const image = props.data.url !== undefined ? <Image imageUrl={props.data.url}/> : null;
//     return(
//         <div className={status}>
//             <h1>{props.data.name}</h1>
//             <h3>{status}</h3>
//             {image}
//         </div>
//     )
// }
// export default Student;