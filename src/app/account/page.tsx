import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {auth} from "@/auth";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export default async function Page() {
  const session = await auth();

  if (!session) {
    throw new Error("No session found");
  }

  return <Card className="m-auto mt-4 max-w-lg">
    <CardHeader className="flex flex-row gap-4 space-y-0">
      <Avatar>
        <AvatarFallback>{session.user.name?.[0]}</AvatarFallback>
        {session.user.image && (
          <AvatarImage src={session.user.image} alt={`${session.user.name}'s profile picture`}/>
        )}
      </Avatar>
      <div className="flex flex-col gap-1">
        <CardTitle>{session.user.email}</CardTitle>
        <CardDescription>{session.user.name}</CardDescription>
      </div>
    </CardHeader>
  </Card>
}