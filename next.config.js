const useTranslate = require("next-translate");

module.exports = useTranslate({
    trailingSlash: true,
    swcMinify: true,
    webpack5: true,
    poweredByHeader: false,
    basePath: "",
    i18n: {
        locales: ["de", "en"],
        defaultLocale: "de"
    }
})