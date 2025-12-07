import { notFound, permanentRedirect} from 'next/navigation';
import { getLongUrl } from "@/app/actions";

type ShortUrlProps = {
  params: Promise<{
    shorturl: string;
  }>;
};

export default async function ShortUrl(props: ShortUrlProps) {
  const params = await props.params;
  const { shorturl } = params;

  const url = await getLongUrl(shorturl);

  return url ? permanentRedirect(url) : notFound();
}
