import useTranslation from "next-translate/useTranslation";

export default function Home() {
    const {t} = useTranslation("common");
    return (
        <div className="container">
            {t("TEST")} :: Home
        </div>
    );
}

export const getStaticProps = (context) => {
    if(context.locale === "en") {
        throw new Error("404");
    }

    return {
        props: {

        }
    }
}