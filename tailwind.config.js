module.exports = {
    purge: [
      'src/**/*.js',
      'src/**/*.jsx',
      'src/**/*.ts',
      'src/**/*.tsx',
      'public/**/*.html',
    ],
    theme: {
      extend: {
        colors: {
            "primary-200": "#e0d5f8",
            "primary-300": "#c7b1f8",
            "primary-400": "#a883f8",
            "primary-500": "#8151e8",
            "primary-600": "#581add",
            "secondary-200": "#eec7e2",
            "secondary-300": "#e89dd2",
            "secondary-400": "#ec74c9",
            "secondary-500": "#f045bf",
            "secondary-600": "#f011b1",
            "danger-200": "#fcb5bd",
            "danger-500": "#ff7988",
            "danger-600": "#ec1b34",
            "code-400": "#fefcf9",
            "code-600": "#3c455b",
          },
          textColor: {
            primary: {
                200: "#e0d5f8",
                300: "#c7b1f8",
                400: "#a883f8",
                500: "#8151e8",
                600: "#581add",
            },
            secondary: {
              200: "#eeeeee",
              300: "#eec7e2",
              400: "#e89dd2",
              500: "#ec74c9",
              500: "#f045bf",
              600: "#f011b1",
            },
            danger: {
              200: "#fcb5bd",
              500: "#ff7988",
              600: "#ec1b34",
            }, code: {
              400: "#fefcf9",
              600: "#3c455b",
            }
          }
      },
    },
    fontFamily: {
        serif: [],
        sans: [],
    variants: {},
    plugins: [],
  }
}
