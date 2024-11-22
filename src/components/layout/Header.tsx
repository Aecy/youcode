import Link from 'next/link';
import {ThemeToggle} from '../ThemeToggle';
import {Typography} from '../ui/typography';
import {SiteConfig} from "@/lib/site-config";
import {LoginButton} from "@/components/features/auth/LoginButton";
import {AuthButton} from "@/components/features/auth/AuthButton";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full px-8 border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Typography variant="h3" as={Link} href="/">
            {SiteConfig.title}
          </Typography>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <AuthButton/>
            <ThemeToggle/>
          </nav>
        </div>
      </div>
    </header>
  );
}