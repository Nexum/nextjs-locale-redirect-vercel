const useTranslate = require("next-translate");
const withPWA = require("next-pwa");

module.exports = useTranslate(withPWA({
    serverRuntimeConfig:  {},
    eslint: {ignoreDuringBuilds: true},
    trailingSlash: true,
    swcMinify: true,
    webpack5: true,
    poweredByHeader: false,
    basePath: "",
    i18n: {
        locales: ["de", "en"],
        defaultLocale: "de"
    },
    pwa: {
        dest: "public",
        buildExcludes: [/middleware-manifest\.json$/],
        register: true,
        dynamicStartUrl: true,
    },
}))