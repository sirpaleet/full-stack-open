sequenceDiagram
    participant browser
    participant server

    Note right of browser: new note on /notes (user writing in field -> clicking Save)  

    browser->>+server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    server-->>-browser: instructions to redirect the request

    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    server-->>-browser: the HTML document

    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    Note right of browser: the browser has sent two different GET-requests at the same time
    server-->>-browser: the CSS file
    server-->>-browser: the JavaScript file
    Note right of browser: the browser starts executing the JavaScript file

    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server-->>-browser: the JSON response of updated data
    Note right of browser: the browser renders the page with notes
