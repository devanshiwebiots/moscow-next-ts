import "../../src/index.scss";
import NoSsr from "@/utils/NoSsr";
import type { Metadata } from "next";
import { Balsamiq_Sans, Caveat, Inter, Nunito_Sans, Poppins, Rubik } from "next/font/google";
import MainProvider from "./MainProvider";
import { detectLanguage } from "./i18n/locales/server";
import { I18nProvider } from "./i18n/locales/i18n-context";
import SessionWrapper from "@/CommonComponent/SessionWrapper";
import { getServerSession } from "next-auth";
import { authoption } from "./api/auth/[...nextauth]/authOption";
import { ToastContainer } from "react-toastify";
import { CustomToaster } from "@/utils/Toaster";

const balsamiqSans = Balsamiq_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const caveat = Caveat({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moscow - Premium Admin Template",
  description: "Moscow - Premium Admin Template",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const lng = await detectLanguage();
  const session = await getServerSession(authoption);

  return (
    <I18nProvider language={lng}>
      <html lang={lng}>
        <head>
          <link rel='icon' href='/assets/images/favicon.png' type='image/x-icon' />
          <link rel='shortcut icon' href='/assets/images/favicon.png' type='image/x-icon' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link href='https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@0,400;0,700;1,400;1,700&amp;family=Caveat:wght@400;500;600&amp;family=Nunito+Sans:opsz,wght@6..12,200;6..12,300;6..12,400;6..12,500;6..12,600;6..12,700;6..12,800;6..12,900&amp;family=Poppins:wght@100;200;300;400;500;600;700;800;900&amp;family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap' rel='stylesheet' />
        </head>
        <body className={`${poppins.className} ${balsamiqSans.className} ${caveat.className} ${nunitoSans.className} ${rubik.className} `}>
          <SessionWrapper session={session}>
            <NoSsr>
              <MainProvider>{children}</MainProvider>
              <CustomToaster />
            </NoSsr>
          </SessionWrapper>
        </body>
      </html>
    </I18nProvider>
  );
}
