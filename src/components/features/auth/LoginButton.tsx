'use client'

import {Button} from "@/components/ui/button";
import {signIn} from "next-auth/react";
import {useMutation} from "@tanstack/react-query";
import {LogIn} from "lucide-react";
import {Loader} from "@/components/ui/loader";

export const LoginButton = () => {
  const mutation = useMutation({
    mutationFn: async () => signIn('github')
  })

  return <Button
    variant="outline"
    size="sm"
    onClick={() => {
      mutation.mutate()
    }}
  >
    {mutation.isPending ? (
      <Loader className="mr-2" size={12} />
    ) : (
      <LogIn className="mr-2" size={12} />
    )}
    Login
  </Button>
}