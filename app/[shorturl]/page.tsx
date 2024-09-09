import { notFound, permanentRedirect} from 'next/navigation';
import { getLongUrl } from "@/app/actions";

type ShortUrlProps = {
  params: {
    shorturl: string;
  };
};

export default async function ShortUrl({ params }: ShortUrlProps) {
  const { shorturl } = params;

  const url = await getLongUrl(shorturl);

  return url ? permanentRedirect(url) : notFound();
}
