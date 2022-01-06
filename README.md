# JavaScript Mastery - Google Search Clone

This is a Google Search Clone / Goggl.<br>
We use React and Tailwind CSS on the front end and we make get requests to RapidAPI.<br>
Big thanks to [JavaScript Mastery](https://www.youtube.com/channel/UCmXmlB4-HJytD7wek0Uo97A) for project tutorial.<br>
<br>
Notes:<br>
Managed to fix some router errors. However, there are still some bugs left to fix:<br>
🐛 Each child in a list should have a unique "key" prop.<br>
🐛 Error on videos... Failed to execute 'postMessage' on 'DOMWindow': The target origin provided ('<URL>') does not match the recipient window's origin ('<URL>').

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### Screenshots

![](./screenshot.jpg)
![](./screenshot2.jpg)

### Links

- Solution: [GitHub](https://github.com/MariusDevelops/google-search-clone)
- Live: [Goggl](https://mariusdevelops.github.io/google-search-clone/)

### Built with

- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/) - Syntactically Awesome Style Sheets
- [API](https://rapidapi.com/) - Advice Slip JSON API

### What I learned

How to use Tailwind CSS:

```HTML
    <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">
        {title}
    </p>
```

How to use state Routes:

```JS
export const AllRoutes = () => (
  <div className="p-4">
    {/* <Navigate from="/" to="/search" /> */}
    <Routes>
      {/* <Route path="/" to="/search" /> */}
      <Route path="/" element={<Navigate to="/search" />} />
      <Route path="/search" element={<Results />} />
      <Route path="/images" element={<Results />} />
      <Route path="/news" element={<Results />} />
      <Route path="/videos" element={<Results />} />
    </Routes>
  </div>
);
```

How to create method that fetches data from API:

```JS
const res = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "x-user-agent": "desktop",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      },
    });
```

## Author

- Website - [Marius Bražas](https://mariusdevelops.github.io/)
