import PrinterList from './PrinterList'
import { useContext } from "react";
import GlobalContext from "../../pages/store/globalContext"
import classes from '../../pages/main.module.css'

function PrinterPage() {
    const globalCtx = useContext(GlobalContext)

    if (globalCtx.theGlobalObject.dataLoaded === true) {
        return <PrinterList printers={globalCtx.theGlobalObject.printers} />
    }
    return <div className={classes.mainDiv}>We are connecting to the Printers, please wait...</div>
}

export default PrinterPage;

//return <PrinterItem
//   image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9fboB3F4hULco6ruCF7jUh4N15re-vXEV-g&usqp=CAU'
//    title = 'Printer 1'
//    status = 'Status: Online'
//></PrinterItem>