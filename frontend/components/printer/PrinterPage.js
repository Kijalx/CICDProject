import PrinterList from './PrinterList'
import { useContext } from "react";
import GlobalContext from "../../pages/store/globalContext"
import classes from '../../pages/main.module.css'

function PrinterPage() {
    const globalCtx = useContext(GlobalContext)

    if (globalCtx.theGlobalObject.dataLoaded === true) {
        return <PrinterList events={globalCtx.theGlobalObject.printer} />
    }
    return <div className={classes.mainDiv}>We are connecting to the Printers, please wait...</div>
}

export default PrinterPage;