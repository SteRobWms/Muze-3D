// import React from 'react'

// export default class API extends React.Component {
export default function submitMuseum(formData) {
    const config = {
        method: "POST",
        headers: {
            "Authorization": localStorage.getItem("token"),
            "Accept": "application/json"
        },
        body: formData
    }
    return fetch("http://localhost:3000/museums", config)
        .then(res => res.json());
}
// }