// Code I initially used from a blog post to understand the process. I then modified it to fit subsequent steps.

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