import useTranslation from "next-translate/useTranslation";

export default function Generic({speakingUrl}) {
    const {t} = useTranslation("common");
    return (
        <div className="container">
            {t("TEST")} :: ${speakingUrl}
        </div>
    );
}

export const getStaticProps = (context) => {
    let {speakingUrl} = context.params || {};

    return {
        props: {
            speakingUrl: speakingUrl.join("/")
        }
    }
}

export const getStaticPaths = () => {
    return {
        paths: [
            {params: {speakingUrl: ["/"]}}
        ],
        fallback: true
    }
}