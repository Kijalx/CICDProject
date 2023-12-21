import classes from './main.module.css'

function HomePage() {
    return <div className={classes.mainDiv}>
        <div className={classes.welcome}>
            Welcome to the ATU Library
            <div className={classes.welcomeLower}>
                Check out recent events or books added
            </div>
        </div>
    </div>
}

export default HomePage;