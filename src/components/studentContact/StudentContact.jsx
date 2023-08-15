/* eslint-disable react/prop-types */

const StudentContact = ({item}) => {
    
    return (
        <><div className="studentContact">
            <h2>Contact Info {item.phone}</h2>
            <p>Website: {item.website}</p>
            <p>Company Name: {item.company.name}</p>
            <p>Catch Phrase: {item.company.catchPhrase}</p>
            </div>
        </>
    );
};

export default StudentContact;