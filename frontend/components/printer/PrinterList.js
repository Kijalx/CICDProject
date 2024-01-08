import PrinterItem from './PrinterItem';
import classes from './PrinterList.module.css';

function PrinterList(props) {
    const printer = props.printers;
    console.log('props.printer:', props.printers);
    if(!printer){
        return <div>No Data</div>
    }
    return (
        <ul className={classes.list}>
            {printer.map((printer) => (
                <PrinterItem
                    title={printer.title}
                    status={printer.status}
                />
            ))}
        </ul>
    );
}

export default PrinterList;