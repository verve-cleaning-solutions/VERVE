VERVE WEBSITE PROJECT Usage and Modification Instructions

I. Modifying Text :-
    Open the corresponding HTML file with Notepad, Notepad++, or Visual Studio Code.

    Find the existing English text on the page, replace it directly, and save.

II. Replacing Images :-
    All images are located in the images folder.

    The simplest method: Prepare a new image, rename it to the exact same filename as the old image, and then overwrite the old file.

    If using different filenames, you need to modify the corresponding relative paths in the HTML or css/style.css file.

III. Adding and Deleting Sections :-
    Each <section> from the beginning to the end of </section> constitutes a complete page section.

    Copying the entire section adds a section with the same structure; deleting the entire section removes the section.

    Please copy the entire project folder as a backup before making any modifications.

IV. Styles and Mobile Layout :-

    css/style.css controls colors, font size, spacing, and layout for desktop and mobile devices.

    The @media area at the bottom of the file specifies the layout for mobile and tablet devices.

V. Form Description :-
    Currently, submitting the form will open the visitor's default email application on their computer or mobile phone and send the completed content to info@vervecleaningsolutions.com.

    Static HTML itself cannot directly store form content in a database. If automatic online email receipt is required in the future, you can integrate with Formspree, Google Forms, or a form service from a website hosting platform.