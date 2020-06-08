module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: "postcss-loader",
        options: {
          ident: "postcss",
          syntax: "postcss-scss",
          plugins: () => [
            require("postcss-import"),
            require("tailwindcss"),
            require("autoprefixer"),
            require("@fullhuman/postcss-purgecss")({
              content: ["./src/**/*.html", "./src/**/*.ts"],
              defaultExtractor: (content) =>
                content.match(/[A-Za-z0-9-_:/]+/g) || [],
            }),
          ],
        },
      },
    ],
  },
};
