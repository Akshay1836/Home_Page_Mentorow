/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        violet: "#9a7bff",
        gray: {
          "100": "#171717",
          "200": "#030303",
          "300": "rgba(255, 255, 255, 0.75)",
        },
        dimgray: "rgba(77, 79, 92, 0.2)",
        cornflowerblue: "#2d86d9",
        orange: "#ffbb0d",
        mediumslateblue: "#7962fa",
        darkslategray: "rgba(45, 45, 45, 0.5)",
        gainsboro: "#dee0e5",
        darkgray: "#b2b2b2",
        dodgerblue: "#0084f8",
        aliceblue: "#e7edf2",
        springgreen: "#00ff84",
        limegreen: {
          "100": "#00cc52",
          "200": "rgba(0, 204, 82, 0.09)",
        },
        darkslateblue: "#6a54b0",
        mediumpurple: {
          "100": "#917ad6",
          "200": "rgba(145, 122, 214, 0.09)",
        },
        yellowgreen: "#c9f55f",
      },
      spacing: {},
      fontFamily: {
        sen: "Sen",
        ramabhadra: "Ramabhadra",
        "font-awesome-6-free": "'Font Awesome 6 Free'",
        "ibm-plex-sans": "'IBM Plex Sans'",
      },
      borderRadius: {
        "27xl": "46px",
        xl: "20px",
        "15xl": "34px",
        "smi-6": "12.6px",
        "mid-3": "17.3px",
        "smi-1": "12.1px",
        smi: "13px",
        "7xs-8": "5.8px",
        "11xs-6": "1.6px",
        "mini-6": "14.6px",
        "xs-7": "11.7px",
        "4xs-8": "8.8px",
        "57xl": "76px",
        mid: "17px",
        lg: "18px",
        "40xl": "59px",
      },
    },
    fontSize: {
      lg: "18px",
      lgi: "19px",
      sm: "14px",
      xl: "20px",
      base: "16px",
      "5xl": "24px",
      "13xl": "32px",
      "21xl": "40px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "33xl-1": "52.1px",
      "12xl": "31px",
      "23xl": "42px",
      "xl-8": "20.8px",
      mid: "17px",
      "7xl": "26px",
      "lg-1": "18.1px",
      "2xl-8": "21.8px",
      "3xs-8": "9.8px",
      "4xs-5": "8.5px",
      "6xs-3": "6.3px",
      "6xs-1": "6.1px",
      "xs-8": "11.8px",
      "2xl-3": "21.3px",
      "base-8": "15.8px",
      "5xl-6": "24.6px",
      "base-4": "15.4px",
      "10xl-5": "29.5px",
      "smi-6": "12.6px",
      "lgi-7": "19.7px",
      "smi-3": "12.3px",
      "4xl-6": "23.6px",
      "smi-8": "12.8px",
      "3xs-5": "9.5px",
      "mini-8": "14.8px",
      "3xs-2": "9.2px",
      "mid-7": "17.7px",
      "11xl": "30px",
      "2xl": "21px",
      "71xl": "90px",
      "8xl": "27px",
      "26xl": "45px",
      "17xl": "36px",
      "3xl": "22px",
      "77xl": "96px",
      "131xl": "150px",
      "18xl": "37px",
      "41xl": "60px",
      inherit: "inherit",
    },
    screens: {
      mq1650: {
        raw: "screen and (max-width: 1650px)",
      },
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
