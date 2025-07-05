import React from 'react';
import './UserTable.css'; 

const UserTable = ({ users }) => {
    return(
        <div className="user-table-container">
            <table className="user-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.attributes.username}</td>
                            <td>{user.attributes.email}</td>
                            <td>{user.attributes.role?.name || "N/A"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;