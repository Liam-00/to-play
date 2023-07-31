import style from './page.module.css'
import AuthButton from '@/app/components/AuthButton'

export default function Home() {
  return (
    <>
      <div className={`${style.page_body}`}>
        <div className={`${style.box} shadow`}>
          <span className={`${style.big_text1}`}>toPlay</span>

          <h1>Features:</h1>
          <ul>
            <li>Feat1</li>
            <li>Feat2</li>
            <li>Feat3</li>
            <li>Feat4</li>

          </ul>
        </div>
        
        <div className={`${style.login_block}`}> 
          <span className={`${style.big_text1}`}>Welcome!</span>
          <span className={`${style.big_text2}`}>Log in below to get started:</span>
          <AuthButton text='Sign in with Google!'/>
        </div>
      </div>
    </>
  )
}
