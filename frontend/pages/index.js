import classes from './main.module.css'

function HomePage() {
    return <div className={classes.mainDiv}>
        <div className={classes.welcome}>
            Welcome to the Library
            <div className={classes.welcomeLower}>
                Check out recent events or books added
            </div>
            <div className={classes.welcomeLower}>
                You can also Login to create and add Events and Books
            </div>
        </div>

    </div>
}

export default HomePage;