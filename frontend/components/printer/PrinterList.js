import PrinterItem from './PrinterItem';
import classes from './PrinterList.module.css';

function PrinterList(props) {
    const printer = props.printer;

    console.log('props.printer:', props.printer);
    return (
        <ul className={classes.list}>
            {printer.map((printer) => (
                <PrinterItem
                    key={printer._id}
                    id={printer._id}
                    title={printer.title}
                    status={printer.status}
                />
            ))}
        </ul>
    );
}

export default PrinterList;