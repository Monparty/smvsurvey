'use client';
export default function ContactForm() {
    async function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
        };

        // Post form data to our API route
        const response = await fetch('/api/route', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        alert(data.message);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <button type="submit">Submit</button>
        </form>
    );
}