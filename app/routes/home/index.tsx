import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import AnimatedText from "react-animated-text-content";
import { getPersonalTitles } from "~/models/personalTitles.server";
import IntroductionSection from "./introductionSection";
import Menu from "./menu";
import PersonalInfo from "./personalInfo";
import PersonalTitles from "./personalTitles";

export const titleLoader: LoaderFunction = async () => {

};

export type PersonalTitlesLoaderData = {
    personalTitles: Awaited<ReturnType<typeof getPersonalTitles>>;
};

export const loader = async () => {
    const jsons = json<PersonalTitlesLoaderData>({
        personalTitles: await getPersonalTitles(),
    });

    return jsons;
};

export default function Home() {
    const { personalTitles } = useLoaderData() as PersonalTitlesLoaderData;

    return (
        <main id='main-wrapper' className='mx-auto text-center dark:bg-slate-900 dark:text-white w-full'>
            <Menu />
            <img id='avatar' className='inline mt-32 object-cover w-52 h-52 mr-2 rounded-full border-4 drop-shadow-xl border-white' src='/images/avatar-igal.jpg' alt='Profile image' />
            <h1 className='mt-8 text-3xl'>Igal Khalfin</h1>
            <div className='description text-4xl'>
                <PersonalTitles personalTitles={personalTitles} />
            </div>
            <IntroductionSection />
            <PersonalInfo />
        </main>
    );
}
