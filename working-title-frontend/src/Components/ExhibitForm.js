import React from 'react';

export default class ExhibitForm extends React.Component {

    state = {}

    componentDidMount() {
        fetch(`http://localhost:3000/users/${localStorage.user}`)
            .then(response => response.json())
            .then(data => this.setState({ user: data }))
    }

    submitExhibit = (formData) => {
        const config = {
            method: "POST",
            headers: {
                "Authorization": localStorage.getItem("token"),
                "Accept": "application/json"
            },
            body: formData
        }
        return fetch("http://localhost:3000/exhibits", config)
            .then(res => res.json());
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        this.submitExhibit(formData)
            .then((exhibitData) => { window.location.href = `http://localhost:3001/exhibits/${exhibitData.id}` })
            .catch(console.error);
    }

    render() {
        return (
            <div className="formBody">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Create Exhibit</h5>


                                <form className="form-signin" onSubmit={(event) => this.handleSubmit(event)}>

                                    <label htmlFor="museum_id">Museum</label>
                                    <select type="select" name="museum_id" id="inputMuseumId" required>
                                        <option>Select a Museum</option>
                                        {this.state.user && this.state.user.museums.length > 0
                                            ? this.state.user.museums.map(museum => { return (<option key={museum.id} value={museum.id}>{museum.name}</option>) })
                                            : null}
                                    </select>

                                    <div className="form-label-group">
                                        <input type="text" name="name" id="inputName" placeholder="Exhibit Name" autoFocus required />
                                        <label htmlFor="inputName">Exhibit Name
                                    </label>
                                    </div>

                                    <div className="form-label-group">
                                        <input type="text" name="description" id="inputDescription" placeholder="Description" />
                                        <label htmlFor="inputDescription" required>Description
                                    </label>
                                    </div>

                                    <div className="form-label-group">
                                        <input type="file" name="background_image" accept="image/*" id="inputImage" required />
                                        <label htmlFor="inputImage">
                                        </label>
                                    </div>

                                    <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Submit Exhibit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}