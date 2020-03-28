import React, { useState } from 'react';

function Login() {
    const [input, setInput] = useState({
        username: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const { username } = input;

    function handleChange(e) {
        const { name, value } = e.target;
        setInput(input => ({ ...input, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <div className="col-lg-8 offset-lg-2">
            <h2>Login</h2>
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
                    {submitted && !username &&
                        <div className="invalid-feedback">Username is required</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">
                        <span className="spinner-border spinner-border-sm mr-1"></span>
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}

export { Login };