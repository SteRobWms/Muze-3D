import React from 'react';
import submitMuseum from '../Adapters/api.js'

const MuseumForm = props => {

    const handleSubmit = event => {
        event.preventDefault()
        const formData = new FormData(event.target)
        submitMuseum(formData)
            // ex had setPost and (data.post)
            // .then(data => props.setMuseum(data.museum))
            // .then(response => response.json())
            .then(museumData => { window.location.href = `http://localhost:3001/museums/${museumData.museum.id}` })
            .catch(console.error);
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <label htmlFor="name">Museum Name
                <input type="text" name="name" />
            </label><br />
            <label htmlFor="description">Description
                <input type="text" name="description" />
            </label><br />
            <label htmlFor="country">Country
                <input type="text" name="country" />
            </label><br />
            <label htmlFor="state">State
                <input type="text" name="state" />
            </label><br />
            <label htmlFor="city">City
                <input type="text" name="city" />
            </label><br />
            <label htmlFor="category">Category
                <select name="category">
                    <option value="">Select a Category</option>
                    <option value="Art and Culture">Art and Culture</option>
                    <option value="Science, Tech, and Engineering">Science, Tech, and Engineering</option>
                </select>
            </label><br />
            <label htmlFor="background_image">Upload Image
                <input required type="file" name="background_image" accept="image/*" />
            </label><br />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default MuseumForm;