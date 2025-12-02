import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"
import { FacebookLogoIcon } from "@phosphor-icons/react/dist/ssr"

function Footer() {

    const data = new Date().getFullYear();

    return (

        <>
            <div className="flex justify-center bg-green-900 text-white">
                <div className=" container flex flex-col items-center py-4">

                    <p className="text-xl font-bold">
                        Farmácia Generation | Copyright: {data}
                    </p>

                    <p className="text-lg">
                        Acesse nossas resdes sociais
                    </p>

                    <div className=" flex gap-2">
                        <a href="https://www.linkedin.com/in/andressa-funes/" target="_blank">
                            <LinkedinLogoIcon size={48} weight="bold" />
                        </a>
                        <a href="https://www.instagram.com/andressafunes/" target="_blank">
                            <InstagramLogoIcon size={48} weight="bold" />
                        </a>
                        <a href="https://www.facebook.com/andressa.funes/" target="_blank">
                            <FacebookLogoIcon size={48} weight="bold" />
                        </a>
                        <a href="https://github.com/andressafunes" target="_blank">
                            <GithubLogoIcon size={48} weight="bold" />
                        </a>
                        
                        
                        
                    </div>
                </div>
            </div>
        </>

    )
}

export default Footer