import React from 'react'

export default function Form(props) {
    const { handleSubmit, handleChange, searchString } = props;
    return (
        <form onSubmit={handleSubmit} className="form-horizontal">
            <input
                placeholder="Search"
                type="text"
                name="searchString"
                onChange={handleChange}
                value={searchString}
            />
            <button type="submit">Search</button>
        </form>
    )
}

