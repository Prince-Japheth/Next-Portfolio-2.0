import UrlHandler from '../components/UrlHandler';

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string[] }>
}) {
    const { slug } = await params;
    return <UrlHandler slug={slug} />;
}
