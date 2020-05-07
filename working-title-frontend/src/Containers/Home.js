import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
// import '../../node_modules/startbootstrap-heroic-features/css/heroic-features.css'
import '../../src/index.css'


export default class Home extends React.Component {

    render() {
        return (

            // <div>
            //     <h1>Welcome to the Working Title Virtual Museum!</h1>
            //     <h2>Please log in or sign up to continue</h2>
            //     <a href="/login"><button>Log In / Sign Up Here!</button></a>
            // </div>
            // <!-- Full Page Image Header with Vertically Centered Content-- >
            <div>
                <header className="masthead">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-12 text-center">
                                <h1 className="font-weight-light">Muze3D - Make and Explore your own Virtual Reality Museums Today!</h1><br />
                                <a href="/login" className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" style={{ display: "inline-block", width: "40%" }} >Log In</a>
                                <div style={{ display: "inline-block", width: "5%" }}></div>
                                <a href="/signup" className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" style={{ display: "inline-block", width: "40%" }}>Sign Up</a>
                            </div>
                        </div>
                    </div>
                </header>

                {/* // <!--Page Content-- > */}
                {/* <section class="py-5">
                    <div class="container">
                        <h2 class="font-weight-light">Page Content</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ab nulla dolorum autem nisi officiis blanditiis voluptatem hic, assumenda aspernatur facere ipsam nemo ratione cumque magnam enim fugiat reprehenderit expedita.</p>
                    </div>
                </section> */}
            </div>

        )
    }
}