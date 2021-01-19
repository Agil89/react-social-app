import giphy from './../../extras/giphy.gif'
import s from './Preloader.module.css'


let Preloader = () =>{
    return (
        <img className={s.giphy} src={giphy} />
    )
}

export default Preloader;