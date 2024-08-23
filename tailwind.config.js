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
                    100: "#fcdcd3",
                    200: "#f9b8a7",
                    300: "#f6957b",
                    400: "#f3714f",
                    500: "#f04e23",
                    600: "#c03e1c",
                    700: "#902f15",
                    800: "#601f0e",
                    900: "#301007",
                },
                secondary: {
                    100: "#d3d2d1",
                    200: "#a6a4a3",
                    300: "#7a7774",
                    400: "#4d4946",
                    500: "#211c18",
                    600: "#1a1613",
                    700: "#14110e",
                    800: "#0d0b0a",
                    900: "#070605",
                },
            },
        },
    },

    plugins: [forms],
};
