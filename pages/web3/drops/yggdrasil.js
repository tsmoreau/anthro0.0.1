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
        <title>Anthromancer - Yggdrasil</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <div className="bg-black text-white">
        <div className="w-screen flex">
          <div
            id="scroller"
            className="snap-y snap-mandatory w-8/12 h-156 overflow-scroll"
          >
            <div className="snap-start bg-black w-full h-156 flex flex-col text-center items-center justify-center text-base px-36">
              <div className="mt-24">
                <p className="pt-6 text-3xl font-bold">1. The Beginning...</p>
                <p className="pt-6">
                  <span className="italic">"What IS this place?"</span> Roxas
                  asks, gazing up into the branches of the pale tree...
                </p>
                <p className="pt-6">
                  <span className="italic">
                    "It is the place beyond the place,"
                  </span>{" "}
                  the Fox replies,{" "}
                  <span className="italic">
                    "The time from which ALL times begin..."
                  </span>
                </p>
                <p className="pt-6 leading-relaxed">
                  As a token of our gratitude for their support, every verified
                  backer of the 2020 Anthromancer Kickstarter Campaign is
                  eligible to claim a single limited edition “Yggdrasil” NFT,
                  secured on the Ethereum blockchain for all time. These ERC-721
                  tokens will enable the holder to participate in secret
                  experiences, grant special access to playtesting and live
                  events, and unlock discounts on future NFT drops and gaming
                  applications, for the life of the Anthromancer brand. Gas for
                  claiming has been prepaid, and the claim codes distributed via
                  email do not expire. We are moved by your support, and are
                  grateful for the opportunity to repay you in some small way.
                  Thank you.
                </p>

                <p className="mt-12 text-lg font-bold">2. How to Get Started</p>
                <div className="mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="flex mx-auto translate-y-0 animate-bounce"
                    stroke="#67e8f9"
                    strokeWidth="3px"
                  >
                    <path d="M12 21l-12-18h24z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="snap-start bg-black w-full  h-156 flex items-center justify-center text-8xl">
              2
            </div>
            <div className="snap-start bg-black w-full h-156 flex items-center justify-center text-8xl">
              3
            </div>
            <div className="snap-start bg-black w-full h-156 flex items-center justify-center text-8xl">
              4
            </div>
          </div>
          <div className="w-4/12 text-center mx-auto">
            <div className="h-72"></div>
            <p className="text-3xl font-bold">∞. Yggdrasil</p>
            <p className="font-sans px-6 pt-3 leading-relaxed text-base">
              <p>
                In Norse mythology, Yggdrasil is the massive tree whose roots
                and branches stretch through the nine realms of time and space.
                The concept of a great tree on whose body rests the world,
                though, transcends any culture, and the four-dimensional
                structure of spacetime evokes a similar metaphor.
              </p>

              <p className="mt-4">
                We are the fruit of the tree of time, and as we are born we
                become its stewards. In this token we see the image of a tree
                appearing in front of metatron’s cube, a sacred geometric design
                which contains schematic information for all of the platonic
                solids, those mathematically perfect shapes that were once
                theorized to be the building blocks of reality. Yggdrasil is the
                icon of cosmic unity; the blend between the divine feminine
                chaos of nature, and the divine masculine order of math.
              </p>
            </p>
          </div>
        </div>
      </div>
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

        /* Hide scrollbar for Chrome, Safari and Opera */
        #scroller::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        #scroller {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
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
