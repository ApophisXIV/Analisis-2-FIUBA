/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{html,js,svelte,ts}"],
    // daisyui: {
    //     themes: [
    //         {
    //             mytheme: {
    //                 primary: "#ffd9a0",

    //                 secondary: "#efb1e2",

    //                 accent: "#80e59d",

    //                 neutral: "#121C21",

    //                 "base-100": "#243147",

    //                 info: "#5382EA",

    //                 success: "#65DCCC",

    //                 warning: "#B56408",

    //                 error: "#EC7482",
    //             },
    //         },
    //     ],
    // },
    plugins: [require("daisyui")],
};
