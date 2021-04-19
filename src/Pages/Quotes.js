
const Quotes = (props) => {
    let id = props.id
    return( 

    <div>
    <a id={id} className={id === props.quote && props.state.down1Name ? 'btn' : 'noDisp'} href={props.state.down1} rel="noreferrer" >{props.state.down1Name}</a>
    <a id={id} className={id === props.quote && props.state.down1NameT ? 'btn' : 'noDisp'} href={props.state.down1T} rel="noreferrer" >{props.state.down1NameT}</a>
    <a id={id} className={id === props.quote && props.state.down2Name ? 'btn' : 'noDisp'} href={props.state.down2} rel="noreferrer" >{props.state.down2Name} CSV</a>
    <a id={id} className={id === props.quote && props.state.down2Name ? 'btn' : 'noDisp'} href={props.state.down2T} rel="noreferrer" >{props.state.down2NameT}</a>
    <a id={id} className={id === props.quote && props.state.down3Name ? 'btn' : 'noDisp'} href={props.state.down3} rel="noreferrer" >{props.state.down3Name} CSV</a>
    <a id={id} className={id === props.quote && props.state.down3Name ? 'btn' : 'noDisp'} href={props.state.down3T} rel="noreferrer" >{props.state.down3NameT}</a>
    <a id={id} className={id === props.quote && props.state.down4Name ? 'btn' : 'noDisp'} href={props.state.down4} rel="noreferrer" >{props.state.down4Name} CSV</a>
    <a id={id} className={id === props.quote && props.state.down4Name ? 'btn' : 'noDisp'} href={props.state.down4T} rel="noreferrer" >{props.state.down4NameT}</a>
    <a id={id} className={id === props.quote && props.state.down5Name ? 'btn' : 'noDisp'} href={props.state.down5} rel="noreferrer" >{props.state.down5Name} CSV</a>
    <a id={id} className={id === props.quote && props.state.down5Name ? 'btn' : 'noDisp'} href={props.state.down5T} rel="noreferrer" >{props.state.down5NameT}</a>
    <a id={id} className={id === props.quote && props.state.down6Name ? 'btn' : 'noDisp'} href={props.state.donw6} rel="noreferrer" >{props.state.down6Name} CSV</a>
    <a id={id} className={id === props.quote && props.state.down6Name ? 'btn' : 'noDisp'} href={props.state.down6T} rel="noreferrer" >{props.state.down6NameT}</a>
    </div>
    )
};

export default Quotes;


/*
onClick={props.downloadQuote.bind(props)}
onClick={props.downloadQuote.bind(props)}
onClick={props.downloadQuote.bind(props)}
onClick={props.downloadQuote.bind(props)}
onClick={props.downloadQuote.bind(props)}
onClick={props.downloadQuote.bind(props)}


*/