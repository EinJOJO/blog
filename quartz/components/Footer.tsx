import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <div className="">
                        <p>Johannes Schloter</p>
          
                    </div>
                    <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
        </p>
                    <ul className="links">
                    <li>
                    <a href={"https://discordapp.com/users/959771174529810502"}>Write <span
                                className={"text-primary-300"}>einjojo</span> on Discord</a>
                    </li>
                            <span className={"text-gray-700"}>|</span>
                            <li><a href={"https://www.einjojo.it/imprint"}>Imprint</a></li>
                            <span className={"text-gray-700"}>|</span>
                            <li><a href={"https://www.einjojo.it/privacy"}>Privacy</a></li>
                    </ul>
                    
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
