/* eslint-disable react/prop-types */
import StudentContact from "../studentContact/StudentContact";

const StudentAddress = ({item}) => {

    return (
        <>
        <div  className="wrapper">
        <h2>City:{item.address.city}</h2>
        <p>Street:{item.address.street}</p>
        <p>Suite:{item.address.suite}</p>
        <p>Suite:{item.address.zipcode}</p>
        </div>
        <StudentContact item={item} />
        </>
    );
};

export default StudentAddress;