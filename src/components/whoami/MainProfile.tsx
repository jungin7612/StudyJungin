import classes from './profile.module.css'
import profile from './profile.jpg'
import insta from './insta.png'
import github from './github.png'

export default function Profile(){
    return(
        <div className={classes.profileContainer}>
            <img src={profile} alt=""  className={classes.profile}/>
            <div className={classes.descContainer}>
                <div className={classes.firstContainer}>
                    <h1>김정인</h1>
                    <p>Korea digital media high school</p>
                    <p>평범한 고등학생 2학년</p>
                </div>
                <div className={classes.whiteBlock}></div>
                <div className={classes.secondContainer}>
                    <p>I want.. </p>
                    <p>Yonsei University department of Computer Science</p>
                    <p>Korea University department of Computer</p>
                </div>
                <div className={classes.whiteBlock}></div>
                <div className={classes.urlWrap}>
                    <a href="https://github.com/jungin7612"><img src={github} alt="" className={classes.github}/></a>
                    <a href="https://www.instagram.com/jungin7612/"><img src={insta} alt="" className={classes.insta}/></a>
                </div>
            </div>
        </div>
    )
}