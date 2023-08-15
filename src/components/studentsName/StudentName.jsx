import StudentAddress from "../studentAddress/StudentAddress";


/* eslint-disable react/prop-types */
const StudentName = ({item}) => {
    
    return (
        <>
        <div className="nameTitle">
          <h2>Name: {item.name}</h2>
          </div>
          <StudentAddress item={item}/>
        </>
    );
    }
export default StudentName;