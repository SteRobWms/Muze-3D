import React from 'react';
import submitMuseum from '../Adapters/api.js'

const MuseumForm = props => {

    const handleSubmit = event => {
        event.preventDefault()
        const formData = new FormData(event.target)
        submitMuseum(formData)
            // ex had setPost and (data.post)
            .then(data => props.setMuseum(data.museum))
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
                <input type="select" name="category" />
            </label><br />
            <label htmlFor="background_image">Upload Image
                <input type="file" name="background_image" accept="image/*" />
            </label><br />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default MuseumForm;