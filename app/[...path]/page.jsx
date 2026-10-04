import Storefront from '../../components/storefront';
export default async function Page({params}){ const p=await params; return <Storefront path={'/'+p.path.join('/')}/> }
