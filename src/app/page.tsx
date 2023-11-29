import { Metadata } from "next";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export const metadata: Metadata = {
    title: "Harsh Mithapara | Blogsite",
};
export default function Home() {
    return (
        <div className="container">
            <h1 className="font-Edu text-6xl">
                Hi, I am <strong>Harsh Mithapara</strong>
            </h1>
            <div className="mt-10 flex flex-col">
                <div className=" overflow-hidden">
                    <span className="group inline-block relative">
                        <FaGithub className="group text-7xl" />
                        <a
                            href=""
                            className="absolute text-2xl top-4 opacity-0 group-hover:opacity-100 -right-32 group-hover:-right-36 transition-all duration-300"
                        >
                            My Github
                        </a>
                    </span>
                </div>
                <div className=" overflow-hidden">
                    <span className="group inline-block relative">
                        <FaLinkedin className="group text-7xl" />
                        <a
                            href=""
                            className="absolute text-2xl top-4 opacity-0 group-hover:opacity-100 -right-32 group-hover:-right-36 transition-all duration-300"
                        >
                            My Linkedin
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
}
