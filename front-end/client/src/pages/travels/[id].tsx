import Layout from "@/components/Layout"
import Head from "next/head"

export default Travel() {
    return (
        <Layout>
            <Head><title>Аялал</title></Head>            
            <article>
                <h2>Card title</h2>
                <div>Card body text</div>
            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllTravelDatas();

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(params) {
    const result = await getTravelData(params.id);

    return {
        props: {
            result
        }
    }
}