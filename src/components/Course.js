import React, { useEffect, useState } from 'react'

const courses = [
      {
            id: 1,
            name: "JavaScript"
      },
      {
            id: 2,
            name: "Java"
      },
      {
            id: 3,
            name: "Python"
      }
];

console.log(courses);
function Course() {
      const [seletecd, setSelected] = useState("0");
      const [valueSelected, setValueSelected] = useState("");

      const choice = (e) => {
            setSelected(e.target.value);
      }
      useEffect(() => {
            switch (seletecd) {
                  case "1": {
                        setValueSelected(courses[0].name);
                        break;
                  }
                  case "2": {
                        setValueSelected(courses[1].name);
                        break;
                  }
                  case "3": {
                        setValueSelected(courses[2].name);
                        break;
                  }
                  default: {
                        setValueSelected("");
                  }
            }
            console.log(valueSelected);
      }, [seletecd]);
      return (
            // <div>
            //       <select onChange={(e) => {
            //             choice(e);
            //       }}>
            //             {
            //                   courses.map(course => 

            //                         <div key={course.id}>
            //                               <option value={course.id}>{course.name}</option>
            //                         </div>


            //                   )
            //             }
            //       </select>
            // </div>
            <div>
                  Khoá học :
                  <select
                        onChange={e => {
                              choice(e);
                        }}
                  >     

                        <option>Other</option>
                        {
                              courses.map(course => (

                                    
                                          <option key={course.id} value={course.id}>{course.name}</option>
                                 

                              )
                              )
                        }
                  </select>
                  <h2>Your selected: {valueSelected === "" ? "" : valueSelected}</h2>
            </div>
      )
}

export default Course