import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextResponse } from 'next/server';

let locales = ['en', 'bn'];
let defultLocal = 'en';

const getLocale = (request) => {
  const acceptedLanduage = request.headers.get('accept-language') ?? undefined;

  let headers = { 'accept-language': acceptedLanduage };
  let language = new Negotiator({ headers }).language();
  return match(language, locales, defultLocal);
};

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  const pathNameIsMissingLocal = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathNameIsMissingLocal) {
    const locale = getLocale(request);

    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    '/((?!api|assets|.*\\..*|_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
};
