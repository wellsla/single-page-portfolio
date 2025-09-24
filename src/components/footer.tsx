import type { Dictionary } from '@/lib/get-dictionary';

export function Footer({ dictionary }: { dictionary: Dictionary['footer'] }) {
  return (
    <footer className="w-full border-t bg-card">
      <div className="container flex h-16 items-center justify-center">
        <p className="text-sm text-muted-foreground">
          {dictionary.copyright}
        </p>
      </div>
    </footer>
  );
}
