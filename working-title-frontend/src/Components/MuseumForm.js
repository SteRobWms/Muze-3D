import React from 'react';
import submitMuseum from '../Adapters/api.js'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../src/forms.css'

const MuseumForm = props => {

    const handleSubmit = event => {
        event.preventDefault()
        const formData = new FormData(event.target)
        submitMuseum(formData)
            .then(museumData => { window.location.href = `http://localhost:3001/museums/${museumData.museum.id}` })
            .catch(console.error);
    }

    return (
        <div className="formBody">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Create Museum</h5>
                            <form className="form-signin" onSubmit={(event) => handleSubmit(event)}>
                                <div className="form-label-group">
                                    <input type="text" name="name" id="inputName" placeholder="Museum Name" autoFocus required />
                                    <label htmlFor="inputName">Museum Name
                                </label>
                                </div>
                                <div className="form-label-group">
                                    <input type="text" name="description" id="inputDescription" placeholder="Description" required />
                                    <label htmlFor="inputDescription">Description
                                </label>
                                </div>
                                <div className="form-label-group">
                                    <input type="text" name="country" id="inputCountry" placeholder="Country" required />
                                    <label htmlFor="inputCountry">Country
                                </label>
                                </div>
                                <div className="form-label-group">
                                    <input type="text" name="state" id="inputState" placeholder="State" required />
                                    <label htmlFor="inputState">State
                                </label>
                                </div>
                                <div className="form-label-group">
                                    <input type="text" name="city" id="inputCity" placeholder="City" required />
                                    <label htmlFor="inputCity">City
                                </label>
                                </div>
                                <select name="category" id="inputCategory" required>

                                    <option value="">Select a Category</option>

                                    <option value="Art and Culture">Art and Culture</option>

                                    <option value="Science, Tech, and Engineering">Science, Tech, and Engineering</option>
                                </select>
                                <label htmlFor="inputCategory">
                                </label>
                                <div className="form-label-group">
                                    <input type="file" name="background_image" accept="image/*" id="inputImage" required />
                                    <label htmlFor="inputImage">
                                    </label>
                                </div>

                                <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Submit Museum</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default MuseumForm;