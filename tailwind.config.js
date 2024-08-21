import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    100: "#fcdbd3",
                    200: "#f9b7a7",
                    300: "#f5947b",
                    400: "#f2704f",
                    500: "#ef4c23",
                    600: "#bf3d1c",
                    700: "#8f2e15",
                    800: "#601e0e",
                    900: "#300f07",
                },
                secondary: {
                    100: "#fbd6d3",
                    200: "#f7ada7",
                    300: "#f4837c",
                    400: "#f05a50",
                    500: "#ec3124",
                    600: "#bd271d",
                    700: "#8e1d16",
                    800: "#5e140e",
                    900: "#2f0a07",
                },
            },
        },
    },

    plugins: [forms],
};
