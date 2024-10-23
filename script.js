document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');

    // Simple routing
    function navigate(page) {
        switch(page) {
            case 'home':
                mainContent.innerHTML = `
                    <h1>Welcome to the Central library</h1>
                    <div class="home">
                    <form id="home-form">
                        <label for="name">Your Name:</label>
                        <input type="text" id="name" name="name" required><br><br>

                        <label for="card">Library Card:</label>
                        <select id="card" name="card">
                            <option value="user">User</option>
                            <option value="librarian">Librarian</option>
                        </select><br><br>

                        <label for="arrival-time">Time of Arrival:</label>
                        <input type="time" id="arrival-time" name="arrival-time" required><br><br>

                        <button type="submit">Submit</button>
                    </form></div>
                `;
                break;

            case 'member':
                mainContent.innerHTML = `
                    <h1>Member Dashboard</h1>
                    <form id="member-form">
                    <!-- Login Section -->
                    <div class="login">
                    <div class="b"
                        <h2>Login</h2></div>
                       <li> <label for="member-id">Member ID:</label>
                       <input type="text" id="member-id" name="member-id" required><br><br></li>
                       
                       <li> <label for="password">Password:</label>
                       <input type="password" id="password" name="password" required><br><br></li>
                       
                       <li> <button type="submit">Login</button><br><br></li>
                       </div>
                       
                       <!-- Search Books Section -->
                       <div class="search">
                       <div class="b">
                       <h2>Search Books</h2></div>
                       <li>
                       <input type="text" id="search-books" placeholder="Search by title, author, or ISBN"><br><br></li>
                       
                      <li> <label for="filter-category">Filter by Category:</label>
                       <select id="filter-category">
                       <option value="fiction">Fiction</option>
                       <option value="non-fiction">Non-Fiction</option>
                       <option value="science">Science</option>
                       </select><br><br></li>
                       
                     <li>  <label for="pub-date">Filter by Publication Date:</label>
                       <input type="date" id="pub-date"><br><br></l>
                       
                     <li>  <button type="button">Search</button><br><br></li>
                       </div>
                       
                       <!-- Book Checkout Section -->
                       <div class="check">
                       <div class="b">
                       <h2>Checkout Book</h2></div>
                       <li>
                       <label for="book-id">Book ID/Title:</label>
                       <input type="text" id="book-id" name="book-id" required><br><br></li>
                       
                      <li> <label for="checkout-date">Checkout Date:</label>
                       <input type="date" id="checkout-date" name="checkout-date" required><br><br></li>
                       
                     <li>  <label for="return-date">Return Date:</label>
                       <input type="date" id="return-date" name="return-date" required><br><br></li>
                       
                      <li> <button type="submit">Checkout</button><br><br></li>
                       </div>
                       
                       <!-- Membership Status Section -->
                       <div class="mem">
                       <div class="b">
                       <h2>Membership Details</h2></div>
                     <li>  <button type="button">View Membership Status</button><br><br></li>
                       
                      <li> <button type="button">Renew Membership</button><br><br></li>
                       </div>
                       </form>
                `;
                break;

            case 'librarian':
                mainContent.innerHTML = `
                    <h1>Librarian Dashboard</h1>
                    <form id="librarian-form">
                        <!-- Add New Book Section -->
                        <div class="book">
                        <div class="b">
                        <h2>Add New Book</h2></div>
                        <li>
                        <label for="book-title">Book Title:</label>
                        <input type="text" id="book-title" name="book-title" required><br><br></li>

                       <li> <label for="author">Author:</label>
                        <input type="text" id="author" name="author" required><br><br></li>

                     <li>   <label for="isbn">ISBN:</label>
                        <input type="text" id="isbn" name="isbn" required><br><br></li>

                      <li>  <label for="category">Category:</label>
                        <select id="category">
                            <option value="fiction">Fiction</option>
                           
                            <option value="science">Science</option>
                            <option value="horrier">horrier</option>
                            <option value="relegious">relegious</option>
                        </select><br><br></li>

                      <li>  <label for="pub-date">Publication Date:</label>
                        <input type="date" id="pub-date" required><br><br></li>

                       <li> <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" required><br><br></li>

                       <li> <button type="submit">Add Book</button><br><br></li>
                        </div>

                        <!-- Manage Existing Books Section -->
                        <div class="manage">
                        <div class="b">
                        <h2>Manage Existing Books</h2></div>
                        <li>
                        <label for="search-book">Search Book:</label>
                        <input type="text" id="search-book" placeholder="Search by title, author, or ISBN"><br><br></li>

                       <li> <label for="edit-book-id">Book ID:</label>
                        <input type="text" id="edit-book-id"><br><br></li>

                        <button type="button">Update Book</button>
                        <button type="button">Delete Book</button><br><br>
                        </div>

                        <!-- Member Management Section -->
                        <div class="manage2">
                        <div class="b">
                        <h2>Manage Members</h2></div>
                      <li>  <label for="search-member">Search Member:</label>
                        <input type="text" id="search-member" placeholder="Search by name or ID"><br><br></li>

                        <button type="button">Update Member</button>
                        <button type="button">Delete Member</button><br><br>
                        </div>

                        <!-- Loan Management Section -->
                        <div class="manage3">
                        <div class="b">
                        <h2>Loan Management</h2></div>
                      <li>  <label for="loan-member-id">Member ID:</label>
                        <input type="text" id="loan-member-id" required><br><br></li>

                      <li>  <label for="loan-book-id">Book ID:</label>
                        <input type="text" id="loan-book-id" required><br><br></li>

                       <li> <label for="loan-checkout-date">Checkout Date:</label>
                        <input type="date" id="loan-checkout-date" required><br><br></li>

                       <li> <label for="loan-return-date">Return Date:</label>
                        <input type="date" id="loan-return-date" required><br><br></li>

                      <li>  <button type="submit">Check Out</button><br><br></li>
                        </div>

                        
                    </form>
                `;
                break;

            default:
                mainContent.innerHTML = '<h1>404 - Page Not Found</h1>';
        }
    }

    // Event delegation for navigation
    document.querySelector('nav').addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            const page = e.target.getAttribute('href').substr(1);
            navigate(page);
        }
    });

    // Initial load
    navigate('home');
});
