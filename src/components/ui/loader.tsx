import {Loader2} from "lucide-react";
import {cn} from "@/lib/utils";

// @ts-ignore
export const Loader = ({ className, ...props}) => {
  return <Loader2 className={cn('animate-spin', className)} {...props}/>
}