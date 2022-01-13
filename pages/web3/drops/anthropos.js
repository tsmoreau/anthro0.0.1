import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Link from "next/link";
import Account from "../../../components/Utils/Account";
import Nav from "../../../components/Layout/Nav";
import Footer from "../../../components/Layout/Footer";
import useEagerConnect from "../../../hooks/useEagerConnect";

export default function Home() {
  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === "string" && !!library;

  return (
    <div>
      <Head>
        <title>Anthromancer - Anthropos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black text-white">
        <Nav />
        <div className="py-4 w-full">
          <p className="font-mono text-4xl pt-16 mb-8 underline underline-offset-2 decoration-yggpurple-300">
            ANTHROPOS
          </p>
          <p className=" hidden italic font-mono text-lg pt-8 pb-6">
            "Insightful quote/Structured abstraction"
          </p>
        </div>
        <img
          src="/anth.svg"
          className="flex mx-auto w-5/6 lg:w-1/2  rounded-xl mb-10"
        />
        <div className="mb-10 w-full ">
          <div className="font-mono flex mx-auto my-4 max-w-5xl grid grid-cols-2 xl:grid-cols-4  gap-2 lg:gap-4 px-10">
            <div className="border border-gray-400 border-double border-4  transition ease-in-out hover:-translate-y-3 hover:-rotate-3  italic rounded-lg h-64 w-40 lg:h-80 lg:w-56 flex mx-auto bg-yggpurple-300">
              <div className="flex my-auto px-6 text-base lg:text-xl ">
                Free To Mint Human Blueprints.
              </div>
            </div>

            <div className="border border-gray-400 border-double border-4  transition ease-in-out hover:-translate-y-3 hover:-rotate-2 italic rounded-lg h-64 w-40 lg:h-80 lg:w-56 flex mx-auto bg-yggpurple-300">
              <div className="flex my-auto px-6 text-base lg:text-xl ">
                Birthed From Randomness.
              </div>
            </div>

            <div className="border border-gray-400 border-double border-4 transition ease-in-out hover:-translate-y-3 hover:rotate-2   italic rounded-lg h-64 w-40 lg:h-80 lg:w-56 flex mx-auto bg-yggpurple-300">
              <div className="flex my-auto px-6 text-base lg:text-xl ">
                Open Ended, Built For Community Expansion.
              </div>
            </div>
            <div className="border border-gray-400 border-double border-4 transition ease-in-out hover:-translate-y-3 hover:rotate-3   italic rounded-lg h-64 w-40 lg:h-80 lg:w-56 flex mx-auto bg-yggpurple-300">
              <div className="flex my-auto px-6 text-base lg:text-xl ">
                Character Seed For Anthromancer Game Projects.
              </div>
            </div>
          </div>
        </div>

        <div className="items-center text-base py-1 my-1 flex mx-auto justify-center w-116 max-w-full font-mono text-white px-6 py-1  border-2 bg-yggpurple-400 border-yggpurple-300 ">
          1893 / 7777 Anthropos Tokens Minted
        </div>
        <div className="items-center text-base py-1 my-1 flex mx-auto justify-center w-116 max-w-full font-mono text-white px-6 py-1  border-2 bg-yggpurple-400 border-yggpurple-300 ">
          You Own 2 (of 3 Max) Anthropos Tokens
        </div>
        <div className="items-center text-base py-1 my-1 cursor-pointer  flex mx-auto justify-center w-116 max-w-full font-mono text-white px-6 py-1  border-2 bg-yggpurple-400 border-yggpurple-300 ">
          View All Anthropos Tokens Minted
        </div>
        <div className=" items-center text-xl  mt-6 cursor-pointer py-1 flex mx-auto justify-center w-80 animate-pulse font-mono text-white px-6 py-1  border-2 bg-yggpurple-400 border-yggpurple-300 ">
          Mint Anthropos Token
        </div>
        <div className="h-20 w-full"></div>
      </main>
      <Footer />

      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
        }

        main {
          text-align: center;
        }

        @font-face {
          font-family: myFirstFont123;
          src: url(/fonts/BlankRiver.ttf);
        }

        #depict,
        #depict3 {
          font-family: myFirstFont123;
          text-shadow: 1px 1px white;
        }
      `}</style>

      <style jsx global>{`
        body {
          margin: 0;
        }

        html {
          font-family: sans-serif, Apple Color Emoji, Segoe UI Emoji,
            Segoe UI Symbol, Noto Color Emoji;
          line-height: 1.5;
        }

        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
