import './navBar.css'
import { useTranslation } from 'react-i18next'

function NavBar() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  return (
    <div className='navbar2'>
      <div className="menu2">
        <span><a href="#projects">{t('Work')}</a></span>
        {/* <span><a href="#services">{t('CV')}</a></span> */}
        <span><a href="#About">{t('About')}</a></span>
        <span><a href="#contact">{t('Contact')}</a></span>
      </div>
      <div className="prefernece">
        <div className="language" role="group" aria-label={t('Language')}>
          <span data-active={lang}>
            <button
              type="button"
              className={lang === "en" ? "active" : ""}
              aria-pressed={lang === "en"}
              onClick={() => i18n.changeLanguage("en")}
            >
              En
            </button>
            <button
              type="button"
              className={lang === "fr" ? "active" : ""}
              aria-pressed={lang === "fr"}
              onClick={() => i18n.changeLanguage("fr")}
            >
              Fr
            </button>
          </span>
        </div>
        <div className="mode"></div>
      </div>
    </div>
  )
}

export default NavBar