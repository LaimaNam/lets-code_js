const someFunction = (app) => {
  app.innerHTML += `
    <header>
        <nav style="font-size: 1.5em;">
            <ul style="display:flex; gap: 10px; list-style:none;">
                <li><a href="#" style="text-decoration: none">Home</a></li>
                <li><a href="#" style="text-decoration: none">Contact</a></li>
            </ul>
        </nav>
    </header>
    `;
};

export default someFunction;
