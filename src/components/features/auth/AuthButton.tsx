import {LoginButton} from "@/components/features/auth/LoginButton";
import {LoggedButton} from "@/components/features/auth/LoggedButton";
import {auth} from "@/auth";

export type AuthButtonProps = {}

export const AuthButton = async (props: AuthButtonProps) => {
  const session = await auth()
  const user = session?.user;

  if (!user) {
    return <LoginButton/>
  }

  return <LoggedButton user={user}/>
}