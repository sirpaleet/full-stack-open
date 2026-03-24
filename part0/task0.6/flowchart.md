```mermaid
sequenceDiagram;
    participant browser;
    participant server;

    Note right of browser: new note on /spa (user writing in field -> clicking Save);
    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/spa;
    server-->>-browser: the HTML document;

    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js;
    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/main.css;
    Note right of browser: the browser has sent two different GET-requests at the same time;
    server-->>-browser: the CSS file;
    server-->>-browser: the JavaScript file;
    Note right of browser: the browser starts executing the JavaScript file;

    browser->>+server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa;
    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/data.json;
    Note right of browser: the browser has sent a GET and a POST request at the same time;
    server-->>-browser: the JSON response of all previous notes;
    server-->>-browser: success message JSON;
    Note right of browser: the browser renders the page with all notes;
```
