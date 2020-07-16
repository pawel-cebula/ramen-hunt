import React, { useState, useEffect, useCallback } from "react"

function BowlForm({ onLoadedChange }) {
    const [name, setName] = useState("")
    const [style, setStyle] = useState("")
    const [rating, setRating] = useState("")
    const [comment, setComment] = useState("")

    const handleLoaded = useCallback(() => {
        onLoadedChange(false)
    }, [onLoadedChange])

    function handleSubmit(event) {
        event.preventDefault()

        // posts form data to DRF, which saves it in database 
        fetch("api/bowl/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "name": name,
                "style": style,
                "rating": rating,
                "comment": comment
            })
        })

        // resets form values
        setName("")
        setStyle("")
        setRating("")
        setComment("")

        // reset loaded
        handleLoaded()
    }

    return (
        <div>
            <h3>Add a new bowl</h3>
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    value={name}
                    placeholder="Bowl name"
                    onChange={e => setName(e.target.value)}
                /><br />
                <select onChange={e => setStyle(e.target.value)}>
                    <option value="Miso">Miso</option>
                    <option value="Shio">Shio</option>
                    <option value="Shoyu">Shoyu</option>
                    <option value="Tonkotsu">Tonkotsu</option>
                    <option value="Other">Other</option>
                </select><br />
                {/* <input
                    name="style"
                    value={style}
                    placeholder="Bowl style"
                    onChange={e => setStyle(e.target.value)}
                /><br /> */}
                <input
                    name="rating"
                    value={rating}
                    placeholder="Bowl rating"
                    onChange={e => setRating(e.target.value)}
                /><br />
                <input
                    name="comment"
                    value={comment}
                    placeholder="Bowl comment"
                    onChange={e => setComment(e.target.value)}
                /><br />
                <button type="submit">Add bowl</button>
            </form>
        </div>
    )
}

export default BowlForm;