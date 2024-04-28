import { useState } from "react";
import "./CommentsForm.css";

export default function CommentsForm(){
    let [formData, setFormData] = useState({
        username: "",
        comment: "",
        rating : "",
    });

    let handleInputChange = (event) => {
        setFormData ((currData) => {
            return {...currData, [event.target.name]: event.target.value };
        });
    };

    let handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
        setFormData({
            username: "",
            comment: "",
            rating : "",
        });
    };

    return(
        <div className="comments-form">
            <h3>Comment Section!</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input type="text" placeholder="username" value={formData.username} onChange={handleInputChange} id="username" name="username"/>
                <br /><br />

                <label htmlFor="comment">Comment: </label>
                <textarea cols="30"
                 rows="3" placeholder="leave comment here!" value={formData.comment} onChange={handleInputChange} id="comment" name="comment" ></textarea>
                 <br /><br />

                <label htmlFor="rating">Rating: </label>
                <input type="number" placeholder="rating" min={1} max={5} value={formData.rating} onChange={handleInputChange} id="rating" name="rating" />
                <br /><br />

                <button>Add Comment</button>
            </form>
        </div>
    );
}; 