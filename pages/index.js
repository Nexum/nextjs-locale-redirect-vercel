import {useRouter} from "next/router";

export default function Home() {
    const {locale} = useRouter();
    return (
        <div className="container">
            {locale}
        </div>
    );
}