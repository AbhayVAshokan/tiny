import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Form from "@/components/form";

const Home = () => {
  return (
    <main className="max-w-6xl mx-auto p-8 flex flex-col h-screen">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl fixed">
        Tiny
      </h1>
      <Card className="m-auto w-full max-w-4xl">
        <CardHeader>
          <CardTitle>Shorten your URL</CardTitle>
          <CardDescription>
            Got a long URL? Hand it over, and I&apos;ll shrink it for you!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form />
        </CardContent>
      </Card>
    </main>
  );
};

export default Home;
